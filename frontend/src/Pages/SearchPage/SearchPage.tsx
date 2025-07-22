import React, { SyntheticEvent, useState } from "react";
//import "./App.css";
import CardList from "../../Components/CardList/CardList";
import Search from "../../Components/Search/Search";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    console.log(`Searching for: ${event.target.value}`);
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResults(result.data);
    }
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    if (portfolioValues.includes(e.target[0].value)) {
      console.log("This symbol is already in your portfolio.");
    } else {
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
    }
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const updatedPortfolio = portfolioValues.filter(
      (s) => s !== e.target[0].value
    );
    setPortfolioValues(updatedPortfolio);
  };

  return (
    <div className="App">
      <Search
        onSearchSubmit={onSearchSubmit}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResults}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && (
        <div className="error-message">Unable to connect to API</div>
      )}
    </div>
  );
};

export default SearchPage;
