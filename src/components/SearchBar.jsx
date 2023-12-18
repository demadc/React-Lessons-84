import React from 'react';
import { TopicFilter } from './TopicFilter';
import { LevelFilter } from './LevelFilter';

export const SearchBar = () => {
  return (
    <div>
      <TopicFilter />
      <LevelFilter />
    </div>
  );
};
