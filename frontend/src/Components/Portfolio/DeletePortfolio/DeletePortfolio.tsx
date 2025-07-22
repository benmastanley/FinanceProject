import React from "react";

interface Props {
  onPortfolioDelete: (e: React.SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <form onSubmit={onPortfolioDelete}>
      <input readOnly hidden={true} value={portfolioValue} />
      <button type="submit">X</button>
    </form>
  );
};

export default DeletePortfolio;
