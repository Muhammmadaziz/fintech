import React from 'react'
import "./Home.css"
import { games } from "../../datas/games";
import Game from '../../Companenta/Game/Game';
function Home() {
  return (
    <div className='mmmm'>
      <h1>O'yinlar</h1>
      <div className="all_games">
        {games.map((item) => (
          <Game key={item.id} {...item} />
        ))}

      </div>
    </div>
  )
}

export default Home