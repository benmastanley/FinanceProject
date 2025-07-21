import React, { useState, ChangeEvent, SyntheticEvent } from "react";

type Props = {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props) => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e)}
          placeholder="Search for a company or ticker"
        />
      </form>
    </>
  );
};

export default Search;
