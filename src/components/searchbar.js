import React from "react";

function searchbar() {
  return (
    <div class="input-group rounded" style={{width: '16vw', paddingLeft: '20px',}}>
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
    </div>
  );
}

export default searchbar;
