import React from 'react';
import { TopicFilter } from '../TopicFilter';
import { LevelFilter } from '../LevelFilter';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <div>
      <Wrapper>
        <TopicFilter />
        <LevelFilter />
      </Wrapper>
    </div>
  );
};
