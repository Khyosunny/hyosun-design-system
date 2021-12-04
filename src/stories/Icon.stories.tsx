import React from 'react';
import Icon from '../components/Icon/Icon';
import { EColors } from '../styles';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Default = () => {
  const IconsPreview = ({ iconName }: any) => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
        margin: 10,
        minWidth: 120,
      }}
    >
      <Icon icon={iconName} size={40} />
      <p style={{ fontSize: 12 }}>{iconName}</p>
    </div>
  );
  return (
    <>
      <IconsPreview iconName="radioUnchecked" />
      <IconsPreview iconName="radioChecked" />
      <IconsPreview iconName="checkBox" />
      <IconsPreview iconName="checkBoxBlank" />
      <IconsPreview iconName="fileCopy" />
      <IconsPreview iconName="link" />
      <IconsPreview iconName="person" />
      <IconsPreview iconName="moreVert" />
      <IconsPreview iconName="arrowDown" />
      <IconsPreview iconName="arrowUp" />
      <IconsPreview iconName="visibility" />
      <IconsPreview iconName="visibilityOff" />
      <IconsPreview iconName="add" />
      <IconsPreview iconName="miniCheck" />
    </>
  );
};
