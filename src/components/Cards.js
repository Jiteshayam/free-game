import React from "react";
import Card from './Card';
import { useState,useEffect  } from "react";
import {LiaAngleLeftSolid,LiaAngleRightSolid} from 'react-icons/lia'


const Cards=(props)=>{
  let Games = props.Games
  let setCount = props.setCount
  let count = props.Count
  const [BookmarkGames,setBookmark]= useState([11111])

  let allGames = []

  const getGames = ()=>{
    Object.values(Games).forEach((game)=>{
      allGames.push(game)
    })
    return allGames
  }

  function decHandler(){
    if (count>12){
      setCount(preCount=>preCount-12)
    }
  }
  
  function incHandler(){
    if(Games.length>count){
      setCount(preCount=>preCount+12)
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[count])

  return(
    <div className="flex justify-center place-content-center flex-wrap flex-col mt-10" >
    <div className="flex justify-center flex-wrap gap-7 w-4/5">
      {getGames().slice(count-12, count).map((Game)=>{
        return(<Card Game={Game} key={Game.id} BookmarkedGames={BookmarkGames} setBookmark={setBookmark}></Card>)
      })}
    </div>
      <div className="m-10 mt-36 flex justify-center gap-6">
        <button className="text-white rounded-md border-2 bg-bgDark2 p-3 flex items-center hover:bg-[#20232a] w-20 justify-center" 
        onClick={decHandler}><LiaAngleLeftSolid/>Prev</button>
        <button className="text-white rounded-md border-2 bg-bgDark2 p-3 flex items-center hover:bg-[#20232a] w-20 justify-center" 
        onClick={incHandler}>Next<LiaAngleRightSolid/></button>
      </div>
    </div>
  )
}

export default Cards