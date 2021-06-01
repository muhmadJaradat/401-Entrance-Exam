import React, { Component } from 'react'
import axios from 'axios'
import { Row, Container,Form,Button } from 'react-bootstrap'
import FavoritePageRendering from '../utilities/FavoritePageRendering';

export class Favorite extends Component {
    constructor(props){
        super(props);
        this.state={
favoritePageData:[],
showUpdateForm:false,
name:'',
gender:'',
slug:'',
        }
    }
    componentDidMount=async()=>{
         // const url=`${process.env.REACT_API_SERVER}/get-characters`
         const requestedFavoriteData = await axios.get('http://localhost:3001/favorite')
         this.setState({
             favoritePageData: requestedFavoriteData.data
         })
     }

     deleteItem =async(slug)=>{
         await axios.delete(`http://localhost:3001/favorite/${slug}`)
         const requestedFavoriteData = await axios.get('http://localhost:3001/favorite')
         this.setState({
             favoritePageData: requestedFavoriteData.data,
             
         })
     }

updateName=(e)=>{
    this.setState({
        name:e.target.value
    })
}
updateGender=(e)=>{
    this.setState({
        gender:e.target.value
    })
}

     showUpdateForm =(data)=>{
         this.setState({
             showUpdateForm:true,
             name:data.name,
             gender:data.gender,
             slug:data.slug
         })
     }

     updateItem=async(e)=>{
         e.preventDefault();
         console.log(this.state.slug);
         const sendedData={
             name:this.state.name,
             gender:this.state.gender
         }
         await axios.put(`http://localhost:3001/favorite/${this.state.slug}`,sendedData)
         const requestedFavoriteData = await axios.get('http://localhost:3001/favorite')
         this.setState({
             favoritePageData: requestedFavoriteData.data
         })
     }
    
    render() {
        return (
            <>
              {this.state.showUpdateForm===true && <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={this.state.name} onChange={(e)=>this.updateName(e)} />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Gender</Form.Label>
    <Form.Control type="text" value={this.state.gender} onChange={(e)=>this.updateGender(e)}/>
    
  </Form.Group>

  
  <Button variant="primary" type="submit" onClick={(e)=>this.updateItem(e)}>
    Submit
  </Button>
</Form>}
            <Container>

            <Row >
                {this.state.favoritePageData !== [] && <FavoritePageRendering
                    favoritePageData={this.state.favoritePageData}
                    deleteItem={this.deleteItem}
                    showUpdateForm={this.showUpdateForm}
                    
                />
                }
            </Row>
        </Container>
      

        </>
        )
    }
}

export default Favorite
