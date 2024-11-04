import React from 'react'

const SearchBar = () => {
  return (
    <div className="container absolute -bottom-48 md:bottom-28 left-0 right-0 m-auto bg-white max-w-lg md:max-w-3xl xl:max-w-6xl p-6 shadow-md rounded-md">
      <form className="grid md:grid-cols-6 gap-1 md:gap-6 items-center">
        <div className="md:col-span-2">
          <label className="searchForm_label">Place</label>
          <input
            className="searchForm_input"
            type="text"
            placeholder="Find your next destination"
          />
        </div>
        <div>
          <label className="searchForm_label">Check in</label>
          <input className="searchForm_input" type="date" />
        </div>
        <div>
          <label className="searchForm_label">Check out</label>
          <input className="searchForm_input" type="date" />
        </div>
        <div>
          <label className="searchForm_label">Guests</label>
          <input className="searchForm_input" type="number" />
        </div>
        <div>
          <button className="searchButton">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
