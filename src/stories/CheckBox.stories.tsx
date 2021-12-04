import React, { useState } from 'react';
import CheckBox from '../components/CheckBox';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
};

export const Default = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <CheckBox selected={selected} onClick={() => setSelected(!selected)} />
      <CheckBox
        label="체크박스"
        selected={selected}
        onClick={() => setSelected(!selected)}
      />
    </div>
  );
};

export const Disabled = () => {
  return <CheckBox label="체크박스" disabled />;
};
