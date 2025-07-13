import React, { SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";

function App() {
  const [search, setSearch] = useState<string>("");

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    console.log(`Searching for: ${event.target.value}`);
  }

  const onClick = (e: SyntheticEvent) => {
    alert(`Searching for: ${search}`);
  };

  return (
    <div className="App">
      <Search
        onClick={onClick}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <CardList />
    </div>
  );
}

export default App;
