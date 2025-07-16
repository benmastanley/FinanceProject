import React, { JSX } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResults }: Props): JSX.Element => {
  return (
    <div>
      {searchResults.length === 0 ? (
        <p>No search results found. Please try a different query.</p>
      ) : (
        searchResults.map((company) => (
          <Card
            id={company.symbol}
            key={uuidv4()} // Using uuid to ensure unique keys
            searchResult={company}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
