import React, { useRef } from 'react'
import PopularGame from '../components/PopularGame'
import Filter from '../components/Filter'
import Spinner from '../components/Spinner'
import Cards from '../components/Cards'

const Home = (props) => {
  const filtercards = useRef()
  return (
    <>
    <PopularGame Top={props.topgames}></PopularGame>

    <div ref={filtercards}></div>
    <Filter  Url={props.url} SetUrl={props.setUrl} genre={props.genre} 
    setGerne={props.setGerne} getGames={props.getGames} SetFilteredItems={props.SetFilteredItems} 
    filterDataByCategory={props.filterDataByCategory} setCount={props.setCount}/>

      <div>
        {
          props.loading ? (<Spinner />) :( <Cards Games={props.FillteredItems} setCount={props.setCount}
             Count={props.count} Filtercards={filtercards}
            ></Cards>)
        }
      </div>
      <div>
          {/* <Footer/> */}
      </div>
    
    </>
  )
}

export default Home