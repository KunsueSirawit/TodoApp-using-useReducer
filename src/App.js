import "./App.css";
import { createContext, useReducer } from "react";
import Todolist from "./component/Todolist";
import { v4 as uuidv4 } from 'uuid';

export const Context = createContext();

const appReducer = (state, action) => {


  switch (action.type) {
    case "setTodo" : {
      return {
        ...state ,
        todo : action.payload ,
        id : uuidv4()
      }
    }
    case "addTodo": {
      return {
        ...state,
        todos: [...state.todos , action.payload],
        todo : ""
      }
    }
    case "delete": {
      return state.filter((item) => item.id !== action.payload);
    }
    default: {
      return state;
    }
  }
  
};

const initState = {
  todo: '',
  todos: [],
  id: []
}

function App() {

  const [state, dispatch] = useReducer(appReducer, initState);

  const { todo, todos , id} = state;
  

  const Addtodo = (e) => {
    e.preventDefault();
    dispatch({ type: "addTodo", payload : todo  });
  };

  return (
    <Context.Provider value={dispatch}>
      <section className="Containner">
        <h1> Todos App </h1>
        <form onSubmit={Addtodo}>
          <div className="form-control">
          <input type="text" value={todo} onChange={ (e) => dispatch({ type : 'setTodo' , payload : e.target.value})}/>
          <button type="submit"> + </button>
          </div>
        </form>
        <section className="qwe">
          <Todolist items={state} />
        </section>
      </section>
    </Context.Provider>
  );
}

export default App;
