import "./App.css";
import { createContext, useReducer } from "react";
import Todolist from "./component/Todolist";
import Status from "./component/Status";
import Hole from "./component/Hole";

export const Context = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "setTodo": {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case "addTodo": {
      if (action.payload == "") {
        return {
          ...state,
          todos: [...state.todos],
          todo: "",
          showstatus: true,
          showmassege: "Add Todo...",
        };
      } else {
        return {
          ...state,
          todos: [...state.todos, action.payload],
          todo: "",
          showstatus: false,
        };
      }
    }
    case "statustimeout": {
      return {
        ...state,
        showstatus: false,
      };
    }
    case "delete": {
      const newtodos = [...state.todos];

      newtodos.splice(action.payload, 1);
      return {
        ...state,
        todos: newtodos,
      };
    }
    default: {
      return state;
    }
  }
};

const initState = {
  todo: "",
  todos: [],
  showstatus: false,
  showmassege: "",
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initState);

  const { todo, todos, status } = state;

  const Addtodo = (e) => {
    e.preventDefault();
    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <Context.Provider value={dispatch}>
      <section className="Containner">
        <span className="hole-container">
          <Hole />
        </span>
        <h1> Todos App </h1>
        <form onSubmit={Addtodo}>
          <div className="form-control">
            {state.showstatus && <Status items={state} />}
            <input
              type="text"
              value={todo}
              onChange={(e) =>
                dispatch({ type: "setTodo", payload: e.target.value })
              }
            />
            <button type="submit"> + </button>
          </div>
        </form>
        <section>
          <Todolist items={state} />
        </section>
      </section>
    </Context.Provider>
  );
}

export default App;
