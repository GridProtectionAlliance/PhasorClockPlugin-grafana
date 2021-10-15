import { FieldConfigProperty, PanelPlugin } from '@grafana/data';
import { SimpleOptions} from './types';
import { PhasorClockPanel } from './PhasorClockDataPanel';
import { ReferenceSelector} from './ReferenceSelector';

export const plugin = new PanelPlugin<SimpleOptions>(PhasorClockPanel).useFieldConfig({
  disableStandardOptions: [
    FieldConfigProperty.Min, FieldConfigProperty.Max, FieldConfigProperty.Unit,
    FieldConfigProperty.Decimals, FieldConfigProperty.DisplayName, FieldConfigProperty.NoValue,
    FieldConfigProperty.Mappings
    ],
  useCustomConfig: (builder) => { 
    return builder.addNumberInput({
      path: 'ThicknessLines',
      name: 'Arrow Size',
      description: 'Size of the Phasor Arrows',
      defaultValue: 1,
      settings: {
        min: 1,
        max: 20
      }
    })
  }
}).setPanelOptions(builder => {
  return builder
    .addNumberInput({
      path: 'Nominal',
      name: 'Nominal Voltage',
      description: 'Nominal Voltage to show on the clock',
      defaultValue: 1.0,
      settings: {
        min: 0,
      }
    })
    .addNumberInput({
      path: 'AngleSegments',
      name: 'Angle Segments',
      description: 'Number of Angle Segements shown',
      defaultValue: 8,
      settings: {
        min: 0,
      }
    }).addNumberInput({
      path: 'MagStep',
      name: 'Step Magnitudes',
      description: 'Steps between Magnitude Lines',
      defaultValue: 0.1,
      settings: {
        min: 0,
        max: 1
      }
    }).addNumberInput({
      path: 'MagStart',
      name: 'Start Magnitude Lines',
      description: 'First Magnitude Line',
      defaultValue: 0.5,
      settings: {
        min: 0,
        max: 1
      }
    }).addColorPicker({
      path: 'backgroundColor',
      name: 'Background',
      description: 'Color of the helper circles and lines',
      defaultValue: '#ffffff'
    }).addCustomEditor({
      id: 'PhasorRef',
      path: 'phasorRef',
      name: 'Phasor Query',
      editor: ReferenceSelector,
    }).addCustomEditor({
      id: 'magRef',
      path: 'magRef',
      name: 'Magnitude Query',
      editor: ReferenceSelector,
    }).addSelect({
      path: 'stylingRef',
      name: 'Styling Based on',
      description: "Element used to determine style of the Arrows",
      defaultValue: 'phase',
      settings: { 
        options:[
          {value: 'phase', label: 'Phase' },
          {value: 'mag', label: 'Magnitude' }
       ]}
    });
    

   
});
