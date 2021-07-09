import React from "react";

function SortFilter (props){
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="sort-select" className="form-label">Sort:</label>
        <select id="sort-select" className="form-select" onChange={props.handleSort}>
          <option value="">-- Select --</option>
          <option value='{"name": "first", "order": "asc"}'>First Name, Ascending</option>
          <option value='{"name": "first", "order": "desc"}'>First Name, Descending</option>
          <option value='{"name": "last", "order": "asc"}'>Last Name, Ascending</option>
          <option value='{"name": "last", "order": "desc"}'>Last Name, Descending</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="filter-select" className="form-label">Filter:</label>
        <select id="filter-select" className="form-select" onChange={props.handleFilter}>
          <option value="">-- Select --</option>
          <option value="female">Gender - (F)</option>
          <option value="male">Gender - (M)</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Submit</button>
    </form>
  )
}

export default SortFilter;


