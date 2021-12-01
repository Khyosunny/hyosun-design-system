import React from 'react';
import Tag from '../components/Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const Default = () => (
  <div style={{ display: 'flex', gap: 10 }}>
    <Tag label="진행중" color="green" />
    <Tag label="마감" color="red" />
  </div>
);
