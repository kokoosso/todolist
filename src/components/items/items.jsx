import React from 'react'
import { List } from 'antd';

function Itens(props){

    
    return (
        <>
            <List.Item
                onClick={props.checkItem}
                key={props.id}
            >
               {/* <Checkbox>{props.children}</Checkbox> */}
                {props.children}
            </List.Item>
        </>
    )
}



export default Itens;