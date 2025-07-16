import React, { SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    console.log(`Searching for: ${event.target.value}`);
  }

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setSearch(result);
      console.error("Error fetching search results:", result);
    } else if (Array.isArray(result.data)) {
      console.log("Search results:", result.data);
      setSearchResults(result.data);
    }
    console.log("Search results state updated:", searchResults);
  };

  return (
    <div className="App">
      <Search
        onClick={onClick}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <CardList searchResults={searchResults} />
      {serverError && (
        <div className="error-message">Unable to connect to API</div>
      )}
    </div>
  );
}

export default App;
