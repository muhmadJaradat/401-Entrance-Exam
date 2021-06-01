import axios from 'axios';
import React, { Component } from 'react'
import HomePageRendering from '../utilities/HomePageRendering';
import { Row, Container, Col } from 'react-bootstrap'
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homePageData: []
        }
    }
    componentDidMount = async () => {
        // const url=`${process.env.REACT_API_SERVER}/get-characters`
        const requestedApiData = await axios.get('http://localhost:3001/get-characters')
        console.log(requestedApiData.data);
        this.setState({
            homePageData: requestedApiData.data
        })
    }

    addToFavorite = async(data)=>{
await axios.post('http://localhost:3001/favorite',data)
    }
    render() {
        return (
            <>
                <Container>

                    <Row className='md-4'>
                        {this.state.homePageData !== [] && <HomePageRendering
                            homePageData={this.state.homePageData}
                            addToFavorite={this.addToFavorite}
                        />
                        }
                    </Row>
                </Container>

            </>
        )
    }
}

export default Home
