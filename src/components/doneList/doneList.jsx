import React, { useState, useEffect } from 'react'
import { List,  Menu, Dropdown } from 'antd';
import Items from '../items/items';
import {  DeleteOutlined, EditOutlined, CheckOutlined  } from "@ant-design/icons";

const donelist=() =>{
    return(
        <List>
            <Items>
                
            </Items>
        </List>
    )
}

export default donelist