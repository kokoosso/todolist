import React, { useState } from 'react'
import { List } from 'antd';
import Items from '../items/items';


const ListItems = () => {
    const [todo, setTodo] = useState([])
    const [todoName, setTodoName] = useState([])

    function addTodo(event) {
        
        setTodo([
            ...todo,
            {
              id: todo.length,
              name: todoName
            }
        ])
        console.log(todo)
    }

    return (
        <>  
            <div>
                <input 
                    type="text"
                />
                <button onClick={event => setTodo('teste')} >add</button>
            </div>
            
            <List>
                {/* {todo.map((item, index) => (
                    <Items 
                        id={index}
                        key={index}
                        oncheck={console.log('teste')}
                    >{item}</Items>
                ))} */}
                {
                    todo
                }
            </List>
        </>
    )
}

export default ListItems