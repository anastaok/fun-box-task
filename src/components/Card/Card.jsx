import { useState } from "react";
import "./CardStyles.css";

function Card({ catFood }) {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const hoverHandler = () => {
    setHover(!hover);
  };
  const selectHandler = () => {
    setSelected(!selected);
  };
  const disableHandler = () => {
    setDisabled(!disabled);
  };

  const classStyles =
    (disabled ? " disabled" : "") ||
    (selected && hover ? " selectedHover" : "") ||
    (selected ? " selected" : "") ||
    (hover ? " hover" : "");

  return (
    <div className="cardWrap">
      <div className={"cardBorder" + classStyles}>
        <div
          className={disabled ? "card cardDisabled" : "card"}
          onClick={selectHandler}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
          onDoubleClick={disableHandler}
        >
          <p
            className={
              hover && selected && !disabled
                ? "cardDiscription cardDiscriptionHover"
                : "cardDiscription "
            }
          >
            {hover && selected && !disabled
              ? "Котэ не одобряет?"
              : catFood.discription}
          </p>
          <h1 className="cardName">{catFood.name}</h1>
          <h2 className="cardTaste">{catFood.taste}</h2>
          <p className="cardText">
            {catFood.amount}
            <br />
            {catFood.gift}
          </p>
          <div className={"cardCircle" + classStyles}>
            <p className="cardWeight">{catFood.weight}</p>
            <p className="cardUnit">кг</p>
          </div>
        </div>
      </div>
      {(disabled && (
        <p className="cardSelectedText cardSelectedTextDisabled">
          Печалька, {catFood.taste} закончился
        </p>
      )) ||
        (selected ? (
          <p className="cardSelectedText">{catFood.composition}</p>
        ) : (
          <p className="cardSelectedText">
            Чего сидишь? Порадуй котэ,
            <span className="cardSelectedButton" onClick={selectHandler}>
              купи.
            </span>
          </p>
        ))}
    </div>
  );
}

export default Card;
