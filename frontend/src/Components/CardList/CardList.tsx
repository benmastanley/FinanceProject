import React, { JSX } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div>
      {searchResults.length === 0 ? (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      ) : (
        searchResults.map((company) => (
          <Card
            id={company.symbol}
            key={uuidv4()} // Using uuid to ensure unique keys
            searchResult={company}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
