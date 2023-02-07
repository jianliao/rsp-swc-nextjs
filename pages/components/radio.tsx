import { Content, Heading, Radio, RadioGroup } from '@adobe/react-spectrum';
import { useState } from 'react';
import CodeExample from '@components/CodeExample';
import { SpRadio, SpRadioGroup } from '@swc-next/radio';
import { SpFieldLabel } from '@swc-next/field-label';

export default function RadioPage() {
  let [rspSelected, setRspSelected] = useState('dogs');
  let [selected, setSelected] = useState('dragon');
  const handleChange = (e: any) => {
    e.stopPropagation();
  };
  const handleSwcChange = (e: any) => {
    e.stopPropagation();
    setSelected(e.target.selected);
  };
  return (
    <>
      <Heading level={1}>Radio Button</Heading>
      <Content>
        <CodeExample
          title="Base case"
          rspCode={`<RadioGroup label="Favorite pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>`}
          rspChildren={
            <RadioGroup label="Favorite pet" value={rspSelected} onChange={setRspSelected}>
              <Radio value="dogs">Dogs</Radio>
              <Radio value="cats">Cats</Radio>
            </RadioGroup>
          }
          swcCode={`<SpFieldLabel for="self">Favorite pet</SpFieldLabel>
<SpRadioGroup
  name="example"
  change={handleChange}
  selected="cats"
  vertical>
  <SpRadio value="dogs">Dogs</SpRadio>
  <SpRadio value="cats">Cats</SpRadio>
</SpRadioGroup>`}
          swcChildren={
            <>
              <SpFieldLabel for="self">Favorite pet</SpFieldLabel>
              <SpRadioGroup name="example" change={handleChange} selected="cats" vertical>
                <SpRadio value="dogs">Dogs</SpRadio>
                <SpRadio value="cats">Cats</SpRadio>
              </SpRadioGroup>
            </>
          }
        />
        <CodeExample
          title="Event handling"
          rspCode={`<RadioGroup
  label="Favorite avatar"
  value={selected}
  onChange={setSelected}
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
<div>You have selected: {selected}</div>`}
          rspChildren={
            <>
              <RadioGroup label="Favorite avatar" value={selected} onChange={setSelected}>
                <Radio value="wizard">Wizard</Radio>
                <Radio value="dragon">Dragon</Radio>
              </RadioGroup>
              <div>You have selected: {selected}</div>
            </>
          }
          swcCode={`<SpFieldLabel for="self">Favorite avatar</SpFieldLabel>
<SpRadioGroup
  name="example"
  change={handleSwcChange}
  selected={selected}
  vertical>
  <SpRadio value="wizard">Wizard</SpRadio>
  <SpRadio value="dragon">Dragon</SpRadio>
</SpRadioGroup>
<div>You have selected: {selected}</div>`}
          swcChildren={
            <>
              <SpFieldLabel for="self">Favorite avatar</SpFieldLabel>
              <SpRadioGroup name="example" change={handleSwcChange} selected={selected} vertical>
                <SpRadio value="wizard">Wizard</SpRadio>
                <SpRadio value="dragon">Dragon</SpRadio>
              </SpRadioGroup>
              <div>You have selected: {selected}</div>
            </>
          }
        />
      </Content>
    </>
  );
}
