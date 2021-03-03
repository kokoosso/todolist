import React from 'react'
import { Col, Row, Card } from 'antd'
import ListItems from '../list/list'
import doneList from '../doneList/doneList'
import 'antd/dist/antd.css'
import './toDoCard.css'
import donelist from '../doneList/doneList'

function toDoCard(props){
    
    return(
      <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="coisas a fazer" bordered>
            <ListItems />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="coisas feitas" bordered>
            <doneList/>
          </Card>
        </Col>
      </Row>
    </div>  
    )
}

export default toDoCard