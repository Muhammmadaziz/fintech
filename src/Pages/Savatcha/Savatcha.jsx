import React,{ useContext} from 'react'
import {StateContext} from '../../App'
import"./Savatcha.css"
function Basket() {
const { savatcha, setSavatcha } = useContext(StateContext);
const deleteBtn = (id) => {
 let filteredSavatcha = savatcha.filter((item) => item.id !==id)
  setSavatcha(filteredSavatcha);
};
  return (
    <div className="savat"> 
      <h1>Savatcha sahifasi</h1>
      {savatcha.length > 0 ? (
        <div className="basket_list">
          {savatcha.map((item, index) => (
        <div className='basket_item' key={index}>
          <img width={"150px"} src={item.image} alt="" />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <button onClick={() => deleteBtn(item.id)}>Delete</button>
          </div>
          ))}
      </div>
      ) :( 
<h1>Bu ilovalar Savatchaga qoshilgan</h1>
      )}
      </div>
  );
}

export default Basket;