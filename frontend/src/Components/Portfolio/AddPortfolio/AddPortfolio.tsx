import React, { SyntheticEvent } from "react";

type Props = {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
};

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input readOnly hidden={true} value={symbol} />
      <button type="submit">Add to Portfolio</button>
    </form>
  );
};

export default AddPortfolio;
