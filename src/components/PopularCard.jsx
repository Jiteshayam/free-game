

const PopularCard= (props) => {
  let topgame = props.topGame
  return(
    <div className="topgamecard">

      <div className="relative topgamecard">
        <a href={topgame.game_url} target="_blank" rel="noreferrer">
          <img className="w-40" src={topgame.thumbnail} alt="" ></img>
        </a>
        <p className="font-semibold leading-6 text-2xl px-4 pt-4 tracking-wide">{topgame.title}</p>
      </div>

    </div>
  )
}

export default PopularCard