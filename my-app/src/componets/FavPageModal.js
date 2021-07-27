import React, { Component } from 'react'
import {Form,Modal,Button} from 'react-bootstrap/'
export class FavPageModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeHandler}>
            <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Update Modal</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name Update </Form.Label>
    <Form.Control type="text" defaultValue={this.props.title} name="name" />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Img Updat </Form.Label>
    <Form.Control type="text" defaultValue={this.props.image_url} name="img" />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>ingredients Updat </Form.Label>
    <Form.Control type="text" defaultValue={this.props.ingredients} name="name" />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>

  <Button variant="secondary" type="submit">Updat</Button>
</Form>
            </Modal.Body>
          
            <Modal.Footer>
             
              <Button variant="primary" onClick={this.props.closeHandler}>Close </Button>
            </Modal.Footer>
          </Modal.Dialog>
          </Modal>
        )
    }
}

export default FavPageModal
