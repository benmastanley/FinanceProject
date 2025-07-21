import React from "react";

interface Props {
  onPortfolioDelete: (e: React.SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <form>
      <input readOnly hidden={true} value={portfolioValue} />
      <button type="submit" onClick={onPortfolioDelete}>
        X
      </button>
    </form>
  );
};

export default DeletePortfolio;
