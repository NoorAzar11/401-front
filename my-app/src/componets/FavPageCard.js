import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'
export class FavPageCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.item.image_url} />
            <Card.Body>
              <Card.Title>{this.props.item.title}</Card.Title>
              <Card.Text>
           {this.props.item.ingredients}
              </Card.Text>
              <Button variant="primary" onClick={() =>this.props.deleteFun(this.props.item._id)}>Delete</Button>
              <Button variant="primary" onClick={() =>this.props.showFun(this.props.item)}> Update</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default FavPageCard
