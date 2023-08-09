import React from "react";
import Card from './Card';
import { useState,useEffect,useRef  } from "react";
import {LiaAngleLeftSolid,LiaAngleRightSolid} from 'react-icons/lia'


const Cards=({Games})=>{

  const [count,setCount] = useState(12)
  const prev = useRef(null);
  const next = useRef(null);
  const [BookmarkGames,setBookmark]= useState([])

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
    const el = prev.current;
    if(count>12){
      el.style.display = "flex";
    }else{
      el.style.display = "none";
    }
    
    const nextbtn = next.current;
    if(Games.length<=count){
      nextbtn.style.display = "none";
    }else{
      nextbtn.style.display = "flex";
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[count])

  return(
    <div>
    <div className="flex flex-wrap justify-center gap-10 mt-6 mb-4 bg-opacity-80">
      {getGames().slice(count-12, count).map((Game)=>{
        return(<Card Game={Game} key={Game.id} BookmarkedGames={BookmarkGames} setBookmark={setBookmark}></Card>)
      })}
    </div>
      <div className="m-10 mt-36 flex justify-center gap-6">
        <button ref={prev} className="text-white rounded-md border-2 bg-bgDark2 p-3 flex items-center hover:bg-[#20232a] w-20 justify-center" 
        onClick={decHandler}><LiaAngleLeftSolid/>Prev</button>
        <button ref={next} className="text-white rounded-md border-2 bg-bgDark2 p-3 flex items-center hover:bg-[#20232a] w-20 justify-center" 
        onClick={incHandler}>Next<LiaAngleRightSolid/></button>
      </div>
      </div>
  )
}

export default Cards