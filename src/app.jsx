import React from 'react'
import ListItems from './components/list/list'
import ToDoCard from './components/toDoCard/toDoCard'
import Test from './components/test/test'

function app(props) {
    return (
        <>
            <ListItems />
            <ToDoCard></ToDoCard>
            <Test></Test>
        </>
    );
}
export default app
