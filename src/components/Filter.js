import React, { useState } from "react";

const Filter =(props)=>{
  let filterDataByCategory = props.filterDataByCategory
  var fillGame = []
  let [genre,setGerne] = useState('All')

  function CategoryHandler(title){
    props.getGames().map(items =>{
      if(title==='All'){
        fillGame=props.getGames()
        props.setCount(12)
      }
      else if(items.genre.toLowerCase().includes(title.toLowerCase())){
        fillGame.push(items)
        props.setCount(12)
      }}
      );
    setGerne(title)
    props.SetFilteredItems(fillGame)
  }
  
  return(
    <nav className="nav-list-wrapper">

      <div className="navlist">
      {filterDataByCategory.map((data)=>{
        return(
        <button className={` mx-2 my-2 px-[1rem] py-1 border border-solid bg-bgDark2 h-[42px] rounded-md tracking-[0.1rem] hover:border-red hover:text-opacity-70   
        ${genre === data.title ? "text-red border-red":"text-white border-transparent]"}`}
        key={data.id} onClick={()=>CategoryHandler(data.title)}>
          <p>{data.title}</p>
        </button>
        )
      })}
      </div>

    </nav>
  )
}

export default Filter