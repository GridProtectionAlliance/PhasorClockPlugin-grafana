import React from 'react';
import { PanelProps, FieldType, getDisplayProcessor, Vector, Field } from '@grafana/data';
import { DataAggregation, SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import chroma from 'chroma-js';


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
  const [heatMaps, setHeatMaps] = React.useState<Map<string,number>>(new Map<string,number>());
  const [heatMapPhasors, setHeatMapPhasors] = React.useState<[number,number][]>([]);

  React.useEffect(() => {
    let radii = [];
    for (let r = options.MagStart; r < domain[1]; r = r + options.MagStep) {
      radii.push(r);
      if (radii.length > 100)
        break;
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

    let heatMapMagnitudes: (Field<any, Vector<any>>|undefined)[] = [];
    let heatMapPhases: (Field<any, Vector<any>>|undefined)[] = [];

    if (options.magRef == "All")
    {
      magnitudes = data.series.map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => f == undefined? 0 :calcValue(f));
      heatMapMagnitudes = data.series.map(d => d.fields.find((field) => field.type === FieldType.number))
      .filter(f => f != undefined && f.config.custom["DataAgg"] == 'heatmap' )
    }
    else {
      magnitudes = data.series.filter(f => f.refId == options.magRef).map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => f == undefined? 0 :calcValue(f));
      heatMapMagnitudes = data.series.filter(f => f.refId == options.magRef).map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f != undefined && f.config.custom["DataAgg"] == 'heatmap' )
    }

    if (options.stylingRef == 'mag' && options.magRef == "All")
    
      PhasorStyle = data.series.map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => {
          if (f == undefined)
            return {Size: 0, Color: "#ffffff"};

          const display = f?.display ?? getDisplayProcessor({ field: f  });
          return {
            Size: f.config.custom["ThicknessLines"],
            Color: display(f.values.get(0)).color ?? "#ffffff"
          }

        })

    else if (options.stylingRef == 'mag')
      PhasorStyle = data.series.filter(f => f.refId == options.magRef)
        .map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => {
          if (f == undefined)
            return {Size: 0, Color: "#ffffff"};

          const display = f?.display ?? getDisplayProcessor({ field: f  });
          return {
            Size: f.config.custom["ThicknessLines"],
            Color: display(f.values.get(0)).color ?? "#ffffff"
          }
        });


    if (options.phasorRef == "All") {
      phases = data.series.map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => f == undefined? 0 :calcValue(f));
      heatMapPhases = data.series.map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f != undefined && f.config.custom["DataAgg"] == 'heatmap' )
    }

    else {
      phases = data.series.filter(f => f.refId == options.phasorRef).map(d => d.fields.find((field) => field.type === FieldType.number))
      .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => f == undefined? 0 :calcValue(f));
      heatMapPhases = data.series.filter(f => f.refId == options.phasorRef).map(d => d.fields.find((field) => field.type === FieldType.number))
        .filter(f => f != undefined && f.config.custom["DataAgg"] == 'heatmap' )
    }
    

    if (options.stylingRef == 'phase' && options.phasorRef == "All")
      PhasorStyle = data.series.map(d => d.fields.find((field) => field.type === FieldType.number))
      .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => {   
        if (f == undefined)
          return {Size: 0, Color: "#ffffff"};

        const display = f?.display ?? getDisplayProcessor({ field: f  });
        return {
          Size: f.config.custom["ThicknessLines"],
          Color: display(f.values.get(0)).color ?? "#ffffff"
        }
      });
    else if (options.stylingRef == 'phase')
      PhasorStyle = data.series.filter(f => f.refId == options.phasorRef).map(d => d.fields.find((field) => field.type === FieldType.number))
      .filter(f => f== undefined || f.config.custom["DataAgg"] != 'heatmap' ).map((f) => {

        if (f == undefined)
          return {Size: 0, Color: "#ffffff"};

        const display = f?.display ?? getDisplayProcessor({ field: f  });
        return {
          Size: f.config.custom["ThicknessLines"],
          Color: display(f.values.get(0)).color ?? "#ffffff"
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

    if (heatMapPhases.length > 0 && heatMapMagnitudes.length > 0){
      let results: [number,number][] = [];

      for (let i=0; i < Math.max(heatMapPhases.length, heatMapMagnitudes.length); i++ )
      {
        let m: number[] = [];
        let p: number[] = [];
        if (i < heatMapPhases.length && heatMapPhases[i] != undefined)
          p = heatMapPhases[i]?.values.toArray() as number[] ?? [];
        if (i < heatMapMagnitudes.length && heatMapMagnitudes[i] !== undefined)
          m = heatMapMagnitudes[i]?.values.toArray() as number[] ?? [];
        
        if (m.length > p.length)
          p = m.map((v,i) => i >= p.length? 0 : p[i]);
        if (p.length > m.length)
          m = p.map((v,i) => i >= m.length? options.Nominal : m[i]);

        results = results.concat(p.map((v,i) => [m[i],v]));
      }
      
      setHeatMapPhasors(results)
    }
    else
      setHeatMapPhasors([])
  }, [data, options.magRef, options.phasorRef])

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


  React.useEffect(() => {

    if (heatMapPhasors.length == 0 && heatMaps.size == 0)
      return;
    if (heatMapPhasors.length == 0)
      setHeatMaps(new Map<string,number>());
    
      let result = new Map<string, number>();

      heatMapPhasors.forEach((v) => {
        let ang = v[1];
        while (ang < 0)
          ang = ang + 360;

        let iPhase = lineAngle.findIndex( a => a > ang);

        if (iPhase == -1)
          iPhase = 0;

        let iMag = circleRadius.findIndex(r => r > v[0]);
        if (iMag == -1)
          iMag = circleRadius.length;

        let key: string;

        if (v[0] < options.MagStart)
          key = "0";
        else
          key = iPhase.toString() + "-" + iMag.toString();

        result.set(key,(result.get(key)?? 0) + 1);
    })

    setHeatMaps(result);

  }, [heatMapPhasors, lineAngle, circleRadius, options.Nominal])

  let heatMapMax = 2;
  heatMaps.forEach(item => {if (item > heatMapMax) heatMapMax = item;});

  const centerX = width/2;
  const centerY = height/2;
  const scale = 0.5*(Math.min(width,height)/domain[1]);
  const radius = 0.5*Math.min(width,height);
  const color = chroma.scale('RdYlBu').domain([1,heatMapMax], 7, 'quantiles')

  function generateArrow(v: IPhasor) {

    const arrowLength = Math.min(v.Style.Size*10,radius*0.1);
    const arrowHeight = 0.7*arrowLength*0.5;
    let ang = v.Ang;
    while (ang < 0)
      ang = ang + 360;

    return <g transform={`rotate(-${ang}, ${centerX} ${centerY})`}>
      <line x1={centerX} y1={centerY} x2={centerX + scale*v.Mag - arrowLength} y2={centerY} strokeWidth={v.Style.Size} stroke={v.Style.Color}/>
      <polygon 
      points={`${centerX + scale*v.Mag } ${centerY}, ${centerX + scale*v.Mag - arrowLength} ${centerY - arrowHeight}, ${centerX + scale*v.Mag - arrowLength} ${centerY + arrowHeight}`}
      fill={v.Style.Color}/>
    </g>
  }

  function generateSlice() {
    let result: JSX.Element[] = [];
    heatMaps.forEach((val, key) => {
      if (key == "0")
        return;
      let s = key.split("-");
      const iPhase = parseInt(s[0]);
      const iMag = parseInt(s[1]);
      const ri = scale*circleRadius[iMag - 1];
      const ro = scale*(iMag < circleRadius.length? circleRadius[iMag] : radius/scale);
      const ang = iPhase > 0? lineAngle[iPhase -1] : lineAngle[lineAngle.length -1];
      //const dr = ro - ri;
      const dt = lineAngle[0] - lineAngle[1];
      const xEndI = centerX + ri*Math.cos(dt*Math.PI/180.0);
      const yEndI = centerY + ri*Math.sin(dt*Math.PI/180.0);
      const xEndO = centerX + ro*Math.cos(dt*Math.PI/180.0);
      const yEndO = centerY + ro*Math.sin(dt*Math.PI/180.0);
      result.push(<path 
        d={`M ${centerX + ri} ${centerY} A ${ri} ${ri} 0 0 0 ${xEndI} ${yEndI} L ${xEndO} ${yEndO} A ${ro} ${ro} 0 0 1 ${centerX + ro} ${centerY} Z`} 
        fill={color(val).toString()}
        transform={`rotate(-${ang}, ${centerX} ${centerY})`} 
      />)

    });
    return result;
  }

  return (
    <div className={cx(styles.wrapper, css`
          width: ${width}px;
          height: ${height}px;
        `
      )}>
        <svg width={width} height={height}>
        {heatMaps.has("0")? <circle cx={centerX} cy={centerY} strokeWidth={0} fillOpacity={1} r={scale*(circleRadius[0]?? 0)} fill={color(heatMaps.get("0")).toString()}/> : null}
        {generateSlice()}
         {circleRadius.map((r,i) => <circle cx={centerX} cy={centerY} strokeWidth={1} stroke={options.backgroundColor} r={scale*r} fill={'none'}/>)}
         <circle cx={centerX} cy={centerY} strokeWidth={2} stroke={options.backgroundColor} r={scale*options.Nominal} fill={'none'}/>
         <circle cx={centerX} cy={centerY} strokeWidth={1} stroke={options.backgroundColor} r={radius} fill={'none'}/>
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
