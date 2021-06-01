import React, { Component } from 'react'
import {Col,Card,Button,Row} from'react-bootstrap'
export class HomePageRendering extends Component {
    render() {
        return (
           this.props.homePageData.map((data,idx)=> <Col md={4}>
           
           <Card style={{ width: '18rem' }} key={idx}>
 <Card.Header>
 <Card.Title>{data.name}</Card.Title>
 </Card.Header>
  <Card.Body>
  <Card.Text>
    {data.gender}
    </Card.Text>
    <Card.Img variant="top" src={data.image} style={{height:'200px',width:'150px'}} />
   <Card.Text>
     <Row>
       {data.psipowers.map(data=><Col md={6} ><img src={data.img} style={{width:'60px'}}/></Col>)}
     </Row>
    
   </Card.Text>
    <Button variant="primary" onClick={()=>this.props.addToFavorite(data)}>Add to favorite</Button>
  </Card.Body>
</Card>
           </Col>)
            
        )
    }
}

export default HomePageRendering
