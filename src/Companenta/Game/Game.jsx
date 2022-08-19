import React, { useContext } from "react";
import "./Game.css";
import { useNavigate } from "react-router-dom";
import { games } from "../../datas/games";
import { StateContext } from "../../App";

function Game({ nomi, id, image }) {
  const { savatcha, setSavatcha } = useContext(StateContext)
  const navigate = useNavigate();
  const detailHandler = () => {
    navigate(`gameDetail/${id}`);
  };
  const addCardBtn = () => {
    const game = games.find((item) => item.id === id);
    const check = savatcha?.some((item) => item.id === id);
    if (check) {
      alert("Bu ilovani savatchaga qoshgansiz");
      return;
    }
    setSavatcha((prev) => [...prev, game]);
  };
  return (
    <div className="box">
    <div className="game">
      <img onClick={detailHandler} src={image} alt={nomi} />
      <h3>{nomi}</h3>
      <button onClick={addCardBtn}>Ilovani Qoshish</button>
    </div>
    </div>
  );
}

export default Game;