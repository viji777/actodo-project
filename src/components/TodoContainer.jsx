import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"
import { useState } from "react"
function TodoContainer() {
  const [activityArr, setActivityArr] = useState([
    {
      id: 1,
      activity: "Go for a walk"
    },
    {
      id: 2,
      activity: "Have Breakfast"
    }])
  return (<div>
    <div className="flex gap-5 flex-wrap">
      <AddTodoForm activityArr ={activityArr} setActivityArr = {setActivityArr} />
      <TodoList activityArr ={activityArr} setActivityArr = {setActivityArr}/>
    </div>
  </div>)
}
export default TodoContainer