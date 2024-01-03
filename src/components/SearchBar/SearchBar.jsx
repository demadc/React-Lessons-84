import React from 'react';
import { TopicFilter } from '../TopicFilter';
import { LevelFilter } from '../LevelFilter';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = ({
  topicFilter,
  levelFilter,
  onChangeTopic,
  onChangeLevel,
  onReset,
}) => {
  return (
    <div>
      <Wrapper>
        <TopicFilter value={topicFilter} onChange={onChangeTopic} />
        <LevelFilter value={levelFilter} onChange={onChangeLevel} />
        <button onClick={onReset}>Reset Filters</button>
      </Wrapper>
    </div>
  );
};
