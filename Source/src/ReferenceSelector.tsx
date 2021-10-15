import React from 'react';
import { StandardEditorProps, SelectableValue } from '@grafana/data';
import { Select } from '@grafana/ui';
import _ from 'lodash';

interface Props extends StandardEditorProps<string> {}

export const ReferenceSelector: React.FC<Props> = ({ item, value, onChange, context }) => {
  const [options, setOptions] = React.useState<SelectableValue<string>[]> ([]);

  React.useEffect(() => {
    let refs: string[] = [];

    if (context.data == undefined) {
      setOptions([{value: "All", label: "All"}]);
      return;
    }
    refs = context.data.filter(item => item.refId != undefined).map(item => (item.refId == undefined? "" :item.refId));
    refs = _.uniq(refs);
    refs.push('All');
    setOptions(refs.map(d=> ({value: d, label: d})));
  }, [context.data])
  
  

  return <Select options={options} value={value} onChange={(selectableValue) => onChange(selectableValue.value)} />;
};
