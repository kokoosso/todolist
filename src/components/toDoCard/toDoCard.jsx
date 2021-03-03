import React, { useState } from 'react'
import { Col, Row, Card } from 'antd'
import ListItems from '../list/list'
import DoneList from '../doneList/doneList'
import 'antd/dist/antd.css'
import './toDoCard.css'


const  ToDoCard = () =>{
    const [doneItems, setDoneItems] = useState([])

    const getlistOfDoneItems = (item) =>{
        setDoneItems(prevData => {
          return [...prevData, item] 
        })          
    }
    return(
      <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="coisas a fazer" bordered>
            <ListItems doneItems={getlistOfDoneItems}/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="coisas feitas" bordered>
            <DoneList doneItems={doneItems}/>
          </Card>
        </Col>
      </Row>
    </div>  
    )
}

export default ToDoCard