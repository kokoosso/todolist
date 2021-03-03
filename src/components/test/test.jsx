import React from 'react';
import 'antd/dist/antd.css';
import './test.css';
import { Card, Col, Row } from 'antd';


function test(){
    return (
        <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title=" a fazer" bordered={false}>
              a fazer
            </Card>
          </Col>
          <Col span={8}>
            <Card title="fazendo" bordered={false}>
              fazendo
            </Card>
          </Col>
          <Col span={8}>
            <Card title="feito" bordered={false}>
              feito
            </Card>
          </Col>
        </Row>
      </div>  
    )
}

export default test