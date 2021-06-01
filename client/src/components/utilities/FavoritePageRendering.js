import React, { Component } from 'react'
import {Col,Card,Button,Row} from'react-bootstrap'

export class FavoritePageRendering extends Component {
    render() {
        return (
            this.props.favoritePageData.map((data,idx)=> <Col md={4}>
           
                <Card style={{ width: '18rem' }} key={idx}>
      <Card.Header>
      <Button variant="primary" onClick={()=>this.props.deleteItem(data.slug)} style={{width:'100px',marginRight:'10px'}}>Delete Item</Button>
         <Button variant="primary" onClick={()=>this.props.showUpdateForm(data)} style={{width:'100px'}}>Update Item</Button>
      
      </Card.Header>
       <Card.Body>
       <Card.Title style={{fontSize:'30px',fontWeight:'bold'}}>{data.name}</Card.Title>
       <Card.Text>
         {data.gender}
         </Card.Text>
        <Card.Text>
           {data.psipowers.map(data=><Row>{data}</Row>)}
        </Card.Text>
         
       </Card.Body>
     </Card>
                </Col>)
        )
    }
}

export default FavoritePageRendering
