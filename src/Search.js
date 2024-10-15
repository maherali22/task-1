import React, { useState } from "react";

const Search = () => {
  const fruits = ["apple", "mango", "pineapple", "kiwi"];

  const [search, setSearch] = useState("");

  const filtered = fruits.filter((fruit) => fruit.includes(search));

  return (
    <div>
      <h2>Search</h2>
      <label for="a">Search: </label>
      <input
        id="a"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((fruit, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
