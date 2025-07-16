import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";

interface Props {
  id: string;
  key: string;
  searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({ id, searchResult }: Props) => {
  return (
    <div className="card">
      <img alt="Company Logo" />
      <div className="details">
        <h2>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p>{searchResult.currency}</p>
      </div>
      <p className="info">
        {searchResult.exchangeShortName} -
        {searchResult.stockExchange || "No description available."}
      </p>
    </div>
  );
};

export default Card;
