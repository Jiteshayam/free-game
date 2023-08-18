import { useEffect, useRef, useState } from 'react'
import './App.css'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import {Bookmarked, Home,Login,Signup} from './Pages/index'
import Navbar from './components/Navbar'
import { options, listurl, filterDataByCategory,popularity } from "./constant/index";


function App() {
  const [games, setGames] = useState('')
  const [FillteredItems, setFilteredItems] = useState([])
  const [topgames, settopgames] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState(listurl)
  const [count,setCount] = useState(12)
  // const filtercards = useRef()
  let [genre,setGerne] = useState('All')

  const [isLogedin, setIsLogedin] = useState(false)


  const fetchData = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result?.message == true) {
        throw result
      }
      
      setLoading(false)
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
    
    <div className="w-screen h-screen">
        <Navbar Url={url} SetUrl={setUrl} getGames={getGames} 
        SetFilteredItems={setFilteredItems} setGerne={setGerne} 
        setIsLogedin={setIsLogedin} isLogedin={isLogedin}/>

        <div className='h-36'></div>
        <Routes>
          <Route path='/' element={<Home
          topgames={topgames}
          Url={url} SetUrl={setUrl} genre={genre} 
          setGerne={setGerne} getGames={getGames} SetFilteredItems={setFilteredItems} 
          filterDataByCategory={filterDataByCategory} setCount={setCount}
          loading={loading} FillteredItems={FillteredItems} count={count}/>}/>

          <Route path='/login' element={<Login setIsLogedin={setIsLogedin}/>}/>
          <Route path='/signup' element={<Signup setIsLogedin={setIsLogedin}/>}/>
          <Route path='/bookmarked' element={<Bookmarked/>}/>
        </Routes>
    </div>

  )
}

export default App
