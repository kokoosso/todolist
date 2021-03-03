import React from 'react'
import { List, } from 'antd';

function Itens(props){   
    return (
        <>
            <List.Item key={props.id}>     
                {props.children}
            </List.Item>
        </>
    )
}



export default Itens;