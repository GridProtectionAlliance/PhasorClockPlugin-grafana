import React from 'react';
import { PanelProps, FieldType, getDisplayProcessor, Vector, Field } from '@grafana/data';
import { DataAggregation, SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}
interface IPhasor {Ang: number, Mag: number, Style: IArrowStyle }
interface IArrowStyle {Size: number, Color: string}

export const PhasorClockPanel: React.FC<Props> = ({ options, data, width, height, fieldConfig }) => {
  //const theme = useTheme();
  const styles = getStyles();

  const [domain, setDomain] = React.useState<[number,number]>([0,1])
  const [circleRadius, setCircleRadius] = React.useState<number[]>([]);
  const [lineAngle, setLineAngle] = React.useState<number[]>([]);
  const [phasors, setPhasors] = React.useState<IPhasor[]>([]);

  React.useEffect(() => {
    let radii = [];
    for (let r = options.MagStart; r < domain[1]; r = r + options.MagStep) {
      radii.push(r);
    }
    setCircleRadius(radii);
  }, [options.MagStart, options.MagStep, domain]);

  React.useEffect(() => {
    let angles = [];
    const step = 360.0/options.AngleSegments;
    for (let r = 0; r < 360.0; r = r + step) {
      angles.push(r);
    }
    setLineAngle(angles);
  }, [options.AngleSegments]);

  React.useEffect(() => {
    let m = 0;
    phasors.forEach(p => {
      if (p.Mag > m)
        m = p.Mag;
    })
    setDomain([0,Math.max(options.Nominal, m)]);

  }, [phasors, options.Nominal]);


  React.useEffect(() => {

    if (data.state != 'Done')
      return;

    console.log(fieldConfig);
    console.log(data);
  
    let magnitudes: number[] = [];
    let phases: number[] = [];

    let PhasorStyle: IArrowStyle[] = [];

    
    if (options.magRef == "All")
    {
      magnitudes = data.series.map((d) => {
        const valueField = d.fields.find((field) => field.type === FieldType.number);
        if (valueField == undefined)
          return 0;
        return calcValue(valueField)
      });
    }
    else {
      magnitudes = data.series.filter(f => f.refId == options.magRef).map((d) => {
        const valueField = d.fields.find((field) => field.type === FieldType.number);
        if (valueField == undefined)
          return 0;
        return calcValue(valueField)
      });
    }

    if (options.stylingRef == 'mag' && options.magRef == "All")
      PhasorStyle = data.series.map((d) => {
        const valueField = d.fields.find((field) => field.type === FieldType.number);
        if (valueField == undefined)
          return {Size: 0, Color: "#ffffff"};

        const display = valueField?.display ?? getDisplayProcessor({ field: valueField  });
        return {
          Size: valueField.config.custom["ThicknessLines"],
          Color: display(valueField.values.get(0)).color ?? "#ffffff"
        }
      });

    else if (options.stylingRef == 'mag')
      PhasorStyle = data.series.filter(f => f.refId == options.magRef).map((d) => {
        const valueField = d.fields.find((field) => field.type === FieldType.number);
        if (valueField == undefined)
          return {Size: 0, Color: "#ffffff"};

        const display = valueField?.display ?? getDisplayProcessor({ field: valueField  });
        return {
          Size: valueField.config.custom["ThicknessLines"],
          Color: display(valueField.values.get(0)).color ?? "#ffffff"
        }
      });


    if (options.phasorRef == "All")
    {
      phases = data.series.map((d) => {
        const valueField = d.fields.find((field) => field.type === FieldType.number);
        if (valueField == undefined)
          return 0;
        return calcValue(valueField)
      });
      
    }

    else {
      phases = data.series.filter(f => f.refId == options.phasorRef).map((d) => {
        const valueField = d.fields.find((field) => field.type === FieldType.number);
        if (valueField == undefined)
          return 0;
        return calcValue(valueField)
      });
    }

    if (options.stylingRef == 'phase' && options.phasorRef == "All")
    PhasorStyle = data.series.map((d) => {
      const valueField = d.fields.find((field) => field.type === FieldType.number);
      if (valueField == undefined)
        return {Size: 0, Color: "#ffffff"};

      const display = valueField?.display ?? getDisplayProcessor({ field: valueField  });
      return {
        Size: valueField.config.custom["ThicknessLines"],
        Color: display(valueField.values.get(0)).color ?? "#ffffff"
      }
    });
    else if (options.stylingRef == 'phase')
    PhasorStyle = data.series.filter(f => f.refId == options.phasorRef).map((d) => {
      const valueField = d.fields.find((field) => field.type === FieldType.number);
      if (valueField == undefined)
        return {Size: 0, Color: "#ffffff"};

      const display = valueField?.display ?? getDisplayProcessor({ field: valueField  });
      return {
        Size: valueField.config.custom["ThicknessLines"],
        Color: display(valueField.values.get(0)).color ?? "#ffffff"
      }
    });

    if (options.magRef == "All")
      phases = magnitudes.map((m) => 180);
    
    if (options.phasorRef == "All")
      magnitudes = phases.map((m) => options.Nominal);
    
    if (magnitudes.length < phasors.length)
      setPhasors(magnitudes.map((m,i) =>({Mag: m, Ang: phases[i], Style: (i < PhasorStyle.length - 1? PhasorStyle[i] : PhasorStyle[0])})))
    else
      setPhasors(phases.map((p,i) =>({Mag: magnitudes[i], Ang: p, Style: PhasorStyle[i]})))

  }, [data, options.magRef, options.phasorRef])


  const centerX = width/2;
  const centerY = height/2;
  const scale = 0.5*(Math.min(width,height)/domain[1]);
  const radius = 0.5*Math.min(width,height);
  

  function generateArrow(v: IPhasor) {

    const arrowLength = Math.min(v.Style.Size*10,radius*0.1);
    const arrowHeight = 0.7*arrowLength*0.5;
    return <g transform={`rotate(-${v.Ang}, ${centerX} ${centerY})`}>
      <line x1={centerX} y1={centerY} x2={centerX + scale*v.Mag} y2={centerY} strokeWidth={v.Style.Size} stroke={v.Style.Color}/>
      <polygon 
      points={`${centerX + scale*v.Mag } ${centerY}, ${centerX + scale*v.Mag - arrowLength} ${centerY - arrowHeight}, ${centerX + scale*v.Mag - arrowLength} ${centerY + arrowHeight}`}
      fill={v.Style.Color}/>
    </g>
  }

  function calcValue(fld: Field<any, Vector<any>>): number{
    const agg: DataAggregation = fld.config.custom["DataAgg"];

    if (agg == 'average')
      return fld.state?.calcs?.mean ?? 0;
    if (agg == 'min')
      return fld.state?.calcs?.min ?? 0;
    if (agg == 'max')
      return fld.state?.calcs?.max ?? 0;
    if (agg == 'sum')
      return fld.state?.calcs?.sum ?? 0;
    if (agg == 'count')
      return fld.state?.calcs?.count ?? 0;
    if (agg == 'last')
      return fld.state?.calcs?.lastNotNull ?? 0;
    
    return fld.values.get(0);
  }


  return (
    <div className={cx(styles.wrapper, css`
          width: ${width}px;
          height: ${height}px;
        `
      )}>
        <svg width={width} height={height}>
         {circleRadius.map((r,i) => <circle cx={centerX} cy={centerY} strokeWidth={1} stroke={options.backgroundColor} r={scale*r} fill={'none'}/>)}
         <circle cx={centerX} cy={centerY} strokeWidth={2} stroke={options.backgroundColor} r={scale*options.Nominal} fill={'none'}/>
         {lineAngle.map((a,i) => <g transform={`rotate(-${a}, ${centerX} ${centerY})`}>
            <line x1={centerX} y1={centerY} x2={centerX + radius} y2={centerY} strokeWidth={1} stroke={options.backgroundColor}/>
           </g>
         )}
         {phasors.map((v,i) => generateArrow(v))}
           
        </svg>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
  };
});
