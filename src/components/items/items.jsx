import React from 'react'
import { Checkbox, List } from 'antd';

function Itens(props,id,checkItem){

    // return <Checkbox>{props.children|| 'To-do'}</Checkbox>
    return (
        <>
            <List.Item
                onClick={() => {checkItem(id)}}
                key={id}
            >
                {props.children}
            </List.Item>
        </>
    )
}



export default Itens;