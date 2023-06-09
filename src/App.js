import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadAns, loadBackspace, loadButtons, loadClear } from "./Redux/action";
import { CALCULATOR_KEY } from "./Redux/reducer";
const App = () => {
  const dispatch = useDispatch();
  const viewCalculator = useSelector((state) => {
    return state[CALCULATOR_KEY];
  });

  return (
    <>
      {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}

      <div className="calc">
        <input
          type="text"
          onChange={(e) => e.target.value}
          // value={(viewCalculator.ans).lenght === 0 ? viewCalculator.number : viewCalculator.ans}/>
          value={
            viewCalculator.ans.length === 0
              ? viewCalculator.number
              : viewCalculator.ans
          }
        />
        <div className="btn">
          <button onClick={() => dispatch(loadClear())}>c</button>
          <button onClick={() => dispatch(loadButtons("%"))}>%</button>
          <button onClick={() => dispatch(loadBackspace())}>x</button>
          <button onClick={() => dispatch(loadButtons("/"))}>/</button>
        </div>
        <div className="btn">
          <button onClick={() => dispatch(loadButtons(7))}>7</button>
          <button onClick={() => dispatch(loadButtons(8))}>8</button>
          <button onClick={() => dispatch(loadButtons(9))}>9</button>
          <button onClick={() => dispatch(loadButtons("*"))}>*</button>
        </div>
        <div className="btn">
          <button onClick={() => dispatch(loadButtons(4))}>4</button>
          <button onClick={() => dispatch(loadButtons(5))}>5</button>
          <button onClick={() => dispatch(loadButtons(6))}>6</button>
          <button onClick={() => dispatch(loadButtons("-"))}>-</button>
        </div>
        <div className="btn">
          <button onClick={() => dispatch(loadButtons(1))}>1</button>
          <button onClick={() => dispatch(loadButtons(2))}>2</button>
          <button onClick={() => dispatch(loadButtons(3))}>3</button>
          <button onClick={() => dispatch(loadButtons("+"))}>+</button>
        </div>
        <div className="btn">
          <button onClick={() => dispatch(loadButtons(0))}>0</button>
          <button onClick={() => dispatch(loadButtons("00"))}>00</button>
          <button onClick={() => dispatch(loadButtons("."))}>.</button>
          <button onClick={() => dispatch(loadAns())}>=</button>
        </div>
      </div>
    </>
  );
};

export default App;
