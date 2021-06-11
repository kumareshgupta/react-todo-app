import React from "react"

class TodoContainer extends React.Component{
    state = {
        todos: [
            {
                id: 1,
                title: "Setup Development Environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live",
                completed: false
            }
        ]
    }
    render(){
        return(
            <div>
                <h1>React Container </h1>
                <p>One of the component</p>
                <ul>
                    {
                        this.state.todos.map(todo => (<li>{todo.title} {todo.id} {todo.completed}</li>))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoContainer