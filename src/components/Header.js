

const Header=(props)=>{

  function searchgame(e) {
    var fillGame = []
    const value = e.target.value
    props.getGames().map(items =>
      {if(items.title.toLowerCase().includes(value.toLowerCase())){
        fillGame.push(items)
      }}
      );
    props.SetFilteredItems(fillGame)
  }

  return(
      <div className="Searchmain">
        <div className="head">
          <h1 className="text-red flex text-4xl">Free <p className="text-primary ml-1">Games</p></h1>

          <form role="search">
            <input type="search" onChange={searchgame}  placeholder="Search..." />
          </form>


        </div>
      </div>
  )
}

export default Header