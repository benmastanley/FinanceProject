import React, { useState, ChangeEvent, SyntheticEvent } from "react";

type Props = {};

const Search: React.FC<Props> = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    alert(`Searching for: ${event.target.value}`);
  }

  const onClick = (e: SyntheticEvent) => {
    alert(`Searching for: ${search}`);
  };

  return (
    <>
      <div>Search</div>
      <h1>Search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => handleSearchChange(e)}
        placeholder="Search for a company or ticker"
      ></input>
      <button onClick={(e) => onClick(e)}>Search</button>
    </>
  );
};

export default Search;
