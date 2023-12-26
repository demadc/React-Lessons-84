export const LevelFilter = ({ value, onChange }) => {
  return (
    <div>
      <select
        name=""
        id=""
        value={value}
        onChange={evt => onChange(evt.target.value)}
      >
        <option value="all">All</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};
