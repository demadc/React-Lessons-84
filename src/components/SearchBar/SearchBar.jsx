import React from 'react';
import { TopicFilter } from '../TopicFilter';
import { LevelFilter } from '../LevelFilter';
import { Wrapper } from './SearchBar.styled';

export const SearchBar = ({
  topicFilter,
  levelFilter,
  onChangeTopic,
  onChangeLevel,
}) => {
  return (
    <div>
      <Wrapper>
        <TopicFilter value={topicFilter} onChange={onChangeTopic} />
        <LevelFilter value={levelFilter} onChange={onChangeLevel} />
      </Wrapper>
    </div>
  );
};
