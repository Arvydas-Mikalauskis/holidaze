import React from 'react'

const SearchBar = () => {
  return (
    <div className="absolute bottom-16 left-0 right-0 m-auto bg-white max-w-6xl p-6 shadow-md rounded-md">
      <form className="grid grid-cols-6 gap-6 items-center">
        <div className="col-span-2">
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
          <button className="w-full bg-gold text-white rounded-md px-2 py-2 mt-5">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
