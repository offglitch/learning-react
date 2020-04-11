import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        // access todosData by creating a new array map -> verify id -> verify state -> change state -> replace old array with new array
        this.setState(prevState => {
            const updateTodos = prevState.todos.map(todo => {
                if (todo.id == id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updateTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
        handleChange = {this.handleChange}/>)

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App