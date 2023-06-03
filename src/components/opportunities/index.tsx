import { useState, useEffect } from "react";

import { useDebounce } from "../../hooks/useDebounce";
import { opportunities } from "../../mocks/opportunities";
import { OpportunityCard } from "./opportunitiesCard";
import { OpportunityModel } from "../../models/opportunityModel";

export const Opportunities = () => {
  const [value, setValue] = useState("");
  const [opportunityItems, setOpportunityItems] =
    useState<OpportunityModel[]>(opportunities);
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    const filtered = opportunities.filter((item) => {
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
        <h2 className="error_title">No results</h2>
      ) : (
        <OpportunityCard opportunityItems={opportunityItems} />
      )}
    </div>
  );
};
