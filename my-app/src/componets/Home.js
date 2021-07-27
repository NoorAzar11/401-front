import React, { Component } from 'react'
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap/'
import HomeCard from './HomeCard'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataArray:[],
        }
    }

   componentDidMount=()=>{
    //    const URL=`${process.env.REACT_APP_URL}/getdata`;
    const URL=`http://localhost:3002/getdata`;
       axios.get(URL) 
       .then((reslut)=>{
        //  console.log(URL)
           this.setState({
            dataArray:reslut.data
           });
       })
       .catch((err)=>{
        console.log("error2",err)
    });

   };

    addToFav=(obj)=>{
        const URL=`http://localhost:3002/addToFav`;
        axios.post(URL,obj) 
        .then((reslut)=>{
            console.log(reslut.data)
        })
        .catch((err)=>{
            console.log("error2",err)
        })
    
    }
    render() {
        return (
            <Container>
            <Row>
                {this.state.dataArray.map((item,idx)=>{
                    return (

                        <Col key={idx}> 
                        <HomeCard
                        item={item}
                        addToFav={this.addToFav}
                        />
                        </Col>
                    )
                })}
          
            </Row>
          </Container>
        )
    }
}

export default Home
