import { React, useState, useEffect, useRef } from "react";
import { options, listurl, filterDataByCategory } from "./data";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { toast } from "react-toastify";
import Spinner from './components/Spinner'
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [games, setGames] = useState('')
  const [FillteredItems, setFilteredItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(listurl)
  const [count,setCount] = useState(12)


  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setFilteredItems(result);
      setGames(result)
      if (result?.message == true) {
        throw result
      }

    } catch (error) {
      console.log(error);
      toast.error(error);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
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

      <Header Url={url} SetUrl={setUrl} getGames={getGames} SetFilteredItems={setFilteredItems} />


      <Filter Url={url} SetUrl={setUrl} getGames={getGames} SetFilteredItems={setFilteredItems}
       filterDataByCategory={filterDataByCategory} setCount={setCount}/>
      <div className="w-11/12 max-w-[1300px] mx-auto flex justify-center min-h-[50vh] flex-wrap">
        {
          loading ? (<Spinner />) :( <Cards Games={FillteredItems} setCount={setCount} Count={count} ></Cards>)
        }
      </div>
      <div>
          <Footer/>
      </div>
      
    </div>
  )
};

export default App;
