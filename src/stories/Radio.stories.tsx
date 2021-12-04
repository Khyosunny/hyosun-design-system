import React, { useState } from 'react';
import Radio from '../components/Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Default = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Radio selected={selected} onClick={() => setSelected(!selected)} />
      <Radio
        label="라디오"
        selected={selected}
        onClick={() => setSelected(!selected)}
      />
    </div>
  );
};

export const Disabled = () => {
  return <Radio label="라디오" disabled />;
};
