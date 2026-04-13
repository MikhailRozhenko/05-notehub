import css from './SearchBox.module.css';

interface searchProps {
  value: string;
  onSearch: (e: string) => void;
}

export default function SearchBox({ value, onSearch }: searchProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <>
      <input
        className={css.input}
        type="text"
        placeholder="Search notes"
        defaultValue={value}
        onChange={handleChange}
      />
    </>
  );
}
