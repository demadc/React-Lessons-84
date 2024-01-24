import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'All' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

export const LevelFilter = ({ value, onChange }) => {
  const defaultOption = options.find(opt => opt.value === value);

  return (
    <Select
      options={options}
      value={defaultOption}
      onChange={option => onChange(option.value)}
    />
  );
};

// export const LevelFilter = ({ value, onChange }) => {
//   return (
//     <div>
//       <select
//         name=""
//         id=""
//         value={value}
//         onChange={evt => onChange(evt.target.value)}
//       >
//         <option value="all">All</option>
//         <option value="beginner">Beginner</option>
//         <option value="intermediate">Intermediate</option>
//         <option value="advanced">Advanced</option>
//       </select>
//     </div>
//   );
// };
