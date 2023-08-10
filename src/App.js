import { React, useState, useEffect, useRef } from "react";
import { options, listurl, filterDataByCategory,popularity } from "./data";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { toast } from "react-toastify";
import Spinner from './components/Spinner'
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopularGame from "./components/PopularGame";

const App = () => {
  const [games, setGames] = useState('')
  const [FillteredItems, setFilteredItems] = useState([])
  const [topgames, settopgames] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(listurl)
  const [count,setCount] = useState(12)
  const filtercards = useRef()

  const fetchData = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result?.message == true) {
        throw result
      }
      
      setLoading(false)
      console.log("ok");
      return result

    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  }

  const relevenseGames = async () => {
    let releveseGames = await fetchData(listurl)
    setFilteredItems(releveseGames)
    setGames(releveseGames)
  }

  const Popularity = async () => {
    let topgames = await fetchData(popularity)
    settopgames(topgames)
  }
  
  useEffect(() => {
    relevenseGames()
    Popularity()
  }, [])

  let allGames = []

  const getGames = () => {
    Object.values(games).forEach((game) => {
      allGames.push(game)
    })
    return allGames
  }

  return (
    <div className="Wrapper">

      <Header Url={url} SetUrl={setUrl} getGames={getGames} SetFilteredItems={setFilteredItems} Filtercards={filtercards} />

      <PopularGame Top={topgames}></PopularGame>

      <div ref={filtercards}></div>
      <Filter  Url={url} SetUrl={setUrl} getGames={getGames} SetFilteredItems={setFilteredItems}
       filterDataByCategory={filterDataByCategory} setCount={setCount}/>

      <div>
        {
          loading ? (<Spinner />) :( <Cards Games={FillteredItems} setCount={setCount} Count={count} 
            ></Cards>)
        }
      </div>
      <div>
          <Footer/>
      </div>
      
    </div>
  )
};

export default App;
