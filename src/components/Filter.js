import React from "react";

const Filter =({filterDataByCategory})=>{
  return(
    <nav className="nav-list-wrapper">

      <div className="navlist ">
      {filterDataByCategory.map((data)=>{
        return(
        <button className="filter-button" key={data.id}>
          <p>{data.title}</p>
        </button>
        )
      })}
      </div>

    </nav>
  )
}

export default Filter