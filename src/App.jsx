import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount, decrementByAmount } from "./redux/counterSlice";

function App() {
  // dispatch uzgaruvchi olish 
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="text-center">
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment()) }>Oshirish</button>    
      <button onClick={() => dispatch(decrement()) }>Kamaytirish</button>    
      <button onClick={() => dispatch(incrementByAmount(10)) }>incrementByAmount</button>    
      <button onClick={() => dispatch(decrementByAmount(10)) }>decrementByAmount</button>    
    </div>
  )
}

export default App
