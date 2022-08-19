import React from 'react'
import "./GameDetail.css"
import { useParams } from 'react-router-dom';
import { games } from "../../datas/games"
function GameDatail() {
  const { id } = useParams()
  const game = games.find((item) => item.id === Number(id))
  console.log(game)
  return (

    <div className="game_detail">
      <h1>Bu O'yin haqida</h1>
      <div className='game_info'>
        <img width={"100%"} src={game.image} alt={game.nomi} />
        <div>
          <h1>{game.nomi}</h1>
          <h4>{game.desk}</h4>
          <h2>{game.matn}</h2>
        </div>
      </div>
    </div>

  )
}

export default GameDatail