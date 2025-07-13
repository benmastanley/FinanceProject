import React, { useState, ChangeEvent, SyntheticEvent } from "react";

type Props = {
  onClick: (e: SyntheticEvent) => void;
  search: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({
  onClick,
  search,
  handleSearchChange,
}: Props) => {
  return (
    <>
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
