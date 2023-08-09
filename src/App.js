import { React, useState, useEffect, useRef } from "react";
import { options, listurl, filterDataByCategory } from "./data";
import Cards from "./components/Cards"
import Filter from "./components/Filter"
import { toast } from "react-toastify";
import Spinner from './components/Spinner'
import { FiSearch } from 'react-icons/fi'

const App = () => {
  const [games, setGames] = useState('')
  const [FillteredItems, setFilteredItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(listurl, options);
        const result = await response.json();
        setFilteredItems(result);
        setGames(result)
        if (result?.message==true){
          throw result
        }

      } catch (error) {
        console.log(error);
        toast.error(error);
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  let allGames = []

  const getGames = () => {
    Object.values(games).forEach((game) => {
      allGames.push(game)
    })
    return allGames
  }

  function searchgame(e) {
    var fillGame = []
    const value = e.target.value
    getGames().map(items =>
      {if(items.title.toLowerCase().includes(value.toLowerCase())){
        fillGame.push(items)
      }}
      );
    setFilteredItems(fillGame)
    // if(value.length==0){
    //   setFilteredItems(games)
    // }
  }
  

  return (
    <div className="Wrapper">

      <div className="Searchmain">
        <div className="head">
          <h1 className="text-[red]">Free Games</h1>

          <form role="search">
            <input type="search" onChange={searchgame} placeholder="Search..." />
          </form>


        </div>
      </div>


      <Filter filterDataByCategory={filterDataByCategory} />
      <div className="w-11/12 max-w-[1300px] mx-auto flex justify-center min-h-[50vh] flex-wrap">
        {
          loading ? (<Spinner />) : <Cards Games={FillteredItems}></Cards>
        }
      </div>
    </div>
  )
};

export default App;
