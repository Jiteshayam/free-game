import React from 'react'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const Navbar = (props) => {
  let setIsLogedin = props.setIsLogedin
  let isLogedin = props.isLogedin

  function searchgame(e) {
    var fillGame = []
    const value = e.target.value
    props.getGames().map(items =>
      {if(items.title.toLowerCase().includes(value.toLowerCase())){
        fillGame.push(items)
      }}
      );
    props.SetFilteredItems(fillGame)
    props.setGerne('All')
    props.Filtercards.current.scrollIntoView({ behavior: "smooth"})
  }

  return(
      <div className="Searchmain">
        <div><Toaster/></div>
        <div className="head">

          <div className='flex gap-8'>
            <Link to="/">
              <h1 className="text-red flex">Free <p className="text-primary ml-1">Games</p></h1>
            </Link>

            <form role="search">
              <input type="search" onChange={searchgame}  placeholder="Search for game"/>
            </form>   
          </div>


        <div className='flex gap-4 log items-center '>
          {isLogedin&&
          <Link to="/bookmarked">
            <h2 className='font-medium text-xl text-white opacity-60 hover:opacity-90 tracking-normal'>Bookmarked</h2>
          </Link>  
          }

          {!isLogedin&&
          <Link to="/login">
            <button className='text-primary Login hover:text-white bg-[#323946]'>Log In</button>
          </Link>  
          }
          {!isLogedin &&
          <Link to="/signup">
            <button className='text-primary Login hover:text-white bg-[#323946]'
            >Signup</button>
          </Link>  
          }

          {isLogedin &&
          <Link to="/">
            <button className='text-white bg-red bg-opacity-60 hover:bg-opacity-100'
            onClick={()=>{
              setIsLogedin(false)
              toast.success("Loged Out")
            }}>Logout</button>
          </Link>  
          }
        </div>



        </div>
      </div>
  )
}

export default Navbar