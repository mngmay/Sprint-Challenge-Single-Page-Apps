import React, { useState } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [name, setName] = useState(null);

  const onSearch = (event, query) => {
    event.preventDefault();
    setName(query.name);
  };

  return (
    <main>
      <Header />
      <SearchForm onSearch={onSearch} />
      <TabNav />
      <AppRouter />
    </main>
  );
}
