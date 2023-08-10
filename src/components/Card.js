import React from "react";
import { BsFillBookmarkCheckFill, BsBookmark } from "react-icons/bs";
import { AiFillWindows } from "react-icons/ai";
import { toast } from "react-toastify";

const Card = (props) => {
  let Game = props.Game
  let BookmarkedGames = (props.BookmarkedGames)
  let setBookmark = props.setBookmark


  function ClickHandler(){
    console.log(BookmarkedGames.includes(Game.id));
    if(BookmarkedGames.includes(Game.id)){
      setBookmark((prev)=> prev.filter((gid)=>(gid!==Game.id)))
      toast.warning("Bookmark Removed")
    }else{
      console.log(BookmarkedGames);
      if (BookmarkedGames.length === 0){
        setBookmark(String(Game.id))
      }else{
        setBookmark((prev)=>[...prev,Game.id])
      }
      toast.success("Added to Bookmark")
    }
  }
  
  const platform = (Game.platform)
  function checkPlat() {
    if (platform == "PC (Windows)") {
      return <AiFillWindows fontSize='1.3rem' />
    }
    return (platform)
  }

  return (
    <div className="w-[350px] h-[280px] bg-bgDark2 text-white relative Game-Thumbnail ">

      <div className="relative z-0">
        <a href={Game.game_url} target="_blank" rel="noreferrer">
          <img className="gameImage rounded-t-lg" src={Game.thumbnail} alt="" ></img>
        </a>
        <div onClick={ClickHandler} className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 grid place-items-center cursor-pointer hover:scale-105 duration-100 transition-scale">
          <button >
            {
              BookmarkedGames.includes(Game.id) ?
              (<BsFillBookmarkCheckFill fontSize='1.3rem' />):
              (<BsBookmark fontSize='1.3rem' />)
            }
            </button>
        </div>
      </div>

      <div className="">

        <p className="text-primary font-semibold leading-6 text-lg px-4 pt-4 tracking-wide">{Game.title}</p>
        <p className="px-4 flex justify-between items-center">
          <span className="">{checkPlat()}</span>
          <span>{Game.publisher}</span>
        </p>

        <div className="hidden game-detail bg-bgDark2 rounded-b-lg w-[350px] mt-3">
          <p className="black px-4">{Game.developer}</p>
          <p className="block px-4">{Game.release_date}</p>
          <p className="black px-4 text-sm">{
          Game.short_description.length>100?
          (Game.short_description.substr(0,100)+("...")):
          (Game.short_description)
          }</p>
        </div>
      </div>

    </div>
  )
}

export default Card