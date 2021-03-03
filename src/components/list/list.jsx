import React, { useState, useEffect } from 'react'
import { List,  Menu, Dropdown } from 'antd';
import Items from '../items/items';
import {  DeleteOutlined, EditOutlined, CheckOutlined  } from "@ant-design/icons";



const ListItems = () => {
    const [todo, setTodo] = useState([])
    const [todoName, setTodoName] = useState('')
    

    function addTodo() {
        if(todoName!==""){
            setTodo(prevData => {
            return [
                    ...prevData,
                    todoName                   
                ]
            })
            setTodoName("")
        }
    }
    function editTodo(id){
       setTodo(todo.map((item, index, array) => {
           console.log(item)
            if (index === id) {
                ((item = todoName))                  
            }
            setTodoName('')
            return item
        }))
    }
    function removeTodo (id) {
        setTodo(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    const handleOnChange = (event) => {
        setTodoName(event.target.value);
      };
    
      useEffect(() => {
        const timeoutId = setTimeout(() => console.log(`I can see you're not typing. I can use "${todoName}" now!`), 1000);
        return () => clearTimeout(timeoutId);
      }, [todoName]);
  
    return (
        <>  
            <div>
                <input 
                    type="text"
                    value={todoName}
                    onChange={handleOnChange}
                    onKeyPress={event => {if(event.key === 'Enter'){addTodo()}}}
                />
                <button onClick={addTodo} >add</button>
            </div>
            <List>
                {todo.map((item, index) => (
                    <Items 
                        id={index}
                        key={index}
                        item={item}>
                        {item}
                        <Dropdown.Button overlay={        
                            <Menu>
                                <Menu.Item key="1" icon={<EditOutlined />} onClick={todoName? () => editTodo(index):null}>
                                    alterar
                                </Menu.Item>
                                <Menu.Item key="2" icon={<DeleteOutlined />} onClick={()=> removeTodo(index)}>
                                    deletar
                                </Menu.Item>
                                <Menu.Item key="3" icon={<CheckOutlined />}>
                                    feito
                                </Menu.Item>
                            </Menu>}/>
                    </Items>
                ))}
            </List>
            
        </>
    )
}

export default ListItems