import React, { Component } from 'react'
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap/'
import FavPageCard from './FavPageCard'
import FavPageModal from './FavPageModal'

export class FavPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayArray:[],
            show:false,
            image_url:"",
            title:"",
            ingredients:"",
            id:-1,
        }
    }

    componentDidMount=()=> {
        const URL=`http://localhost:3002/display`;
        axios.get(URL) 
        .then((reslut)=>{
            this.setState({
                displayArray:reslut.data 
            })
        })
        .catch((err)=>{
            console.log("error2",err)
        })
    }

    /////////////////////
    deleteFun=(id)=>{
        const URL=`http://localhost:3002/delete/${id}`;
        axios.delete(URL)
        .then((reslut)=>{
            this.setState({
                displayArray:reslut.data 
            })
        })
        .catch((err)=>{
            console.log("error2",err)
        })
    }
    /////////////close and showfun
showFun=async(obj)=>{
    await this.setState({
        show:true,
        image_url:obj.image_url,
        title:obj.title,
        ingredients:obj.ingredients,
        id:obj._id
    })
}

    closeHandler=()=>{
        this.setState({
            show:false,
        })
    }
    /////////////////////////update using put 
updateFun=async(event)=>{
    event.preventDefault();
    const obj={
        image_url:event.target.img.value,
        title:event.target.name.value,
        id:this.state.id,
    }
    const URL=`http://localhost:3002/update`;
    axios.put(URL,obj)
    .then((reslut)=>{
        this.setState({
            displayArray:reslut.data,
            show:false,

        })

        
    })
    .catch((err)=>{
        console.log("error2",err)
    })
}

    
    render() {
        return (
            <Container>
            <Row >
                {this.state.displayArray.map((item,idx)=>{
                    return (

                        <Col key={idx}>
                            <FavPageCard
                            item={item}
                            deleteFun={this.deleteFun}
                            showFun={this.showFun}
                            />
                        
                        </Col>
                    )
                })}
          
            </Row>

            <FavPageModal
            show={this.state.show}
            closeHandler={this.closeHandler}
            updateFun={this.updateFun}
            image_url={this.state.image_url}
            title={this.state.title}
            ingredients={this.state.ingredients}
            />
          </Container>
        )
    }
}

export default FavPage
