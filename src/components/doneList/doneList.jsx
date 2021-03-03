import React from 'react'
import { List } from 'antd';
import Items from '../items/items';

const donelist=({doneItems}) =>{
    return(
        <List>
            {doneItems.map((items,index) => (
                <Items
                key={index}
                item={items}>
                    {items}
                </Items>
            ))}
            
        </List>
    )
}

export default donelist