import React, { useState, useEffect } from "react";

import { useDebounce } from "./hooks/useDebounce";
import { Header } from "./components/header";
import { Opportunities } from "./components/opportunities";
import { opportunities } from "./mocks/opportunities";
import { OpportunityModel } from "./models/opportunityModel";

import "./App.css";

export const App = () => {
  const [value, setValue] = useState("");
  const [opportunityItems, setOpportunityItems] =
    useState<OpportunityModel[]>(opportunities);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    const result = opportunities;

    const filtered = result.filter((item) => {
      return (
        item.title
          .toLocaleLowerCase()
          .includes(debouncedValue.toLocaleLowerCase()) ||
        item.description
          .toLocaleLowerCase()
          .includes(debouncedValue.toLocaleLowerCase())
      );
    });

    setOpportunityItems(filtered);
  }, [debouncedValue]);

  return (
    <div>
      <Header />
      <div className="info_container">
        <h1 className="info_title">Projects</h1>
        <p className="info_description">
          From configuration to security, web apps to big data—whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </p>
      </div>
      <div className="opportunities_wrapper">
        <input
          placeholder="Search..."
          className="input"
          type="search"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {!opportunityItems.length ? (
          <h2 style={{ textAlign: "center" }}>Error</h2>
        ) : null}
        <Opportunities opportunityItems={opportunityItems} />
      </div>
    </div>
  );
};
