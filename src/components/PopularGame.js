import PopularCard from "./PopularCard"
import {LiaAngleLeftSolid,LiaAngleRightSolid} from 'react-icons/lia'
import { useEffect,useRef,useState } from "react"

const PopularGame= (props) => {
  let Games = props.Top.slice(0,24)
  const grid = useRef()
  
  let allGames = []
  const getGames = ()=>{
    Object.values(Games).forEach((game)=>{
      allGames.push(game)
    })
    return allGames
  }



  // const button =document.querySelectorAll("[data-carousel-btn]")
  
  // button.forEach(button =>{
  //   button.addEventListener("click",()=>{
  //     const slides = button.closest("[data-carousel]").querySelector("[data-Slides")
  //     const offset = button.dataset.carouselButton === "next"? 1:-1
      
  //     const activeSlide = slides.querySelector('[data-active]')
  //     let newIndex = [...slides.children].indexOf(activeSlide)+offset
  //     if (newIndex<0) newIndex = slides.children.length-1
  //     if (newIndex>=slides.children.length)  newIndex = 0
  
  //     slides.children[newIndex].dataset.active = true
  //     delete activeSlide.dataset.active
  //   })
  // })
  
  const [index,setIndex] = useState(0)
  function prevHandler(){
    if (index===0){
      setIndex(Games.length-6)
    }else{
      setIndex(preIndex=>preIndex-6)
    } 
  }

  function nextHandler() {
    if (Games.length-6===index){
      setIndex(0)
    }
    else{
      setIndex(preIndex=>preIndex+6)
    }
  }
  
  

  return(
    <div className="flex justify-center">
      <div className="topgame-wrapper" data-carousel>
          <LiaAngleLeftSolid className="carousel-btn prev" onClick={prevHandler}/>
          <LiaAngleRightSolid className="carousel-btn next"  onClick={nextHandler}/>

        <div className="top-games-container" data-Slides>

          <div className="grid" ref={grid}>
              {getGames().slice(index,index+6).map((Game)=>{
              return(<PopularCard topGame={Game} key={Game.id}></PopularCard>)
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default PopularGame