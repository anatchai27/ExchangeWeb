import React from "react";

export const MobileSearchBar = () => {
  return (
    <>
      <div className="mobile-search">
        <form action="/" className="search-form">
          <img src="img/svg/search.svg" alt="search" className="svg" />
          <input
            className="form-control me-sm-2 box-shadow-none"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
      </div>
      <div className="mobile-author-actions" />
    </>
  );
};
