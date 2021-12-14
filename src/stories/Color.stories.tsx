import React from 'react';
import { EColors, Text } from '..';

export default {
  title: 'Introduce/Color',
};

export const Color = () => {
  const Palette = ({ color }: { color: EColors }) => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        padding: 10,
        boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ background: color, width: 80, height: 80 }} />
      <Text style={{ marginTop: 10 }}>{color}</Text>
    </div>
  );

  return (
    <div style={{ padding: '10px 20px' }}>
      <Text variant="h3" style={{ margin: '20px 0' }}>
        Black
      </Text>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <Palette color={EColors.black_100} />
        <Palette color={EColors.black_90} />
        <Palette color={EColors.black_80} />
        <Palette color={EColors.black_70} />
        <Palette color={EColors.black_60} />
        <Palette color={EColors.black_40} />
      </div>
      <Text variant="h3" style={{ margin: '20px 0' }}>
        Gray + White
      </Text>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <Palette color={EColors.gray_100} />
        <Palette color={EColors.gray_80} />
        <Palette color={EColors.gray_60} />
        <Palette color={EColors.gray_40} />
        <Palette color={EColors.white} />
      </div>
      <Text variant="h3" style={{ margin: '20px 0' }}>
        Blue
      </Text>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <Palette color={EColors.blue_100} />
        <Palette color={EColors.blue_90} />
        <Palette color={EColors.blue_80} />
        <Palette color={EColors.blue_70} />
        <Palette color={EColors.blue_60} />
        <Palette color={EColors.blue_40} />
      </div>
      <Text variant="h3" style={{ margin: '20px 0' }}>
        Green
      </Text>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <Palette color={EColors.green_100} />
        <Palette color={EColors.green_80} />
        <Palette color={EColors.green_60} />
        <Palette color={EColors.green_40} />
        <Palette color={EColors.green_20} />
      </div>
      <Text variant="h3" style={{ margin: '20px 0' }}>
        Red + Pink
      </Text>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <Palette color={EColors.red_100} />
        <Palette color={EColors.red_80} />
        <Palette color={EColors.red_60} />
        <Palette color={EColors.red_40} />
        <Palette color={EColors.pink_20} />
      </div>
    </div>
  );
};
