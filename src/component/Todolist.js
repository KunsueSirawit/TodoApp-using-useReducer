import { Context } from "../App";
import { useContext } from "react";

import { RiDeleteBin5Line } from "react-icons/ri";

const Todolist = ({ items }) => {

  const dispatch  = useContext(Context)
  console.log(items.todos)
  return (
    <>
      {(items.todos).map((item,index) => {
        return (
          <div key={index} className="todo-list">
            {/* <h3> {index}</h3> */}
            <h3> {item}</h3>
            <div className="button-contianer">
              <RiDeleteBin5Line onClick={()=> dispatch({ type : 'delete' , payload : index})}> Delete </RiDeleteBin5Line>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todolist;
