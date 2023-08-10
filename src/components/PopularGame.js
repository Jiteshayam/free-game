import PopularCard from "./PopularCard"
import {LiaAngleLeftSolid,LiaAngleRightSolid} from 'react-icons/lia'
import { useEffect,useRef } from "react"

const PopularGame= (props) => {
  let Games = props.Top
  let allGames = []
  const nextbtn = useRef()

  const getGames = ()=>{
    Object.values(Games).forEach((game)=>{
      allGames.push(game)
    })
    return allGames
  }

  const button =document.querySelectorAll("[data-carousel-btn]")
  
  button.forEach(button =>{
    button.addEventListener("click",()=>{
      const offset = button.dataset.carouselButton === "next"? 1:-1
      const slides = button.closest("[data-carousel]").querySelector("[data-Slides")
      
      const activeSlide = slides.querySelector('[data-active]')
      let newIndex = [...slides.children].indexOf(activeSlide)+offset
      if (newIndex<0) newIndex = slides.children.length-1
      if (newIndex>=slides.children.length)  newIndex = 0
      
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })
  
  

  return(
    <div className="flex justify-center">
      <div className="topgame-wrapper" data-carousel>
          <LiaAngleLeftSolid className="carousel-btn prev" data-carousel-btn="prev"/>
          <LiaAngleRightSolid className="carousel-btn next" data-carousel-btn='next' ref={nextbtn}/>
        <div className="top-games-container" data-Slides>
          <div className="grid" data-active>
              {getGames().slice(0,6).map((Game)=>{
              return(<PopularCard topGame={Game} key={Game.id}></PopularCard>)
            })}
          </div>
          <div className="grid">
              {getGames().slice(6,12).map((Game)=>{
              return(<PopularCard topGame={Game} key={Game.id}></PopularCard>)
            })}
          </div>
          <div className="grid">
              {getGames().slice(12,18).map((Game)=>{
              return(<PopularCard topGame={Game} key={Game.id}></PopularCard>)
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularGame