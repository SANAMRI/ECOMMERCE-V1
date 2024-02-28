import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class OneProduct extends Component {
    constructor(props){
        super(props)
    }
    addToCard(element){
      this.props.setState({
            cart:[...this.props.cart,element]

      })
    }
  render() {
    return (
      <div>
      <Card style={{ width: '18rem', height:'450px' }}>
      <Card.Img variant="top" src={this.props.product?.imageURL} alt="top" loading='lazy' width={200} height={200}/>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{this.props.product?.productName}</Card.Title>
        <Card.Text>
      {this.props.product?.description}
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button variant="danger" onClick={()=>{
          this.props.setState({item:this.props.product})
          this.props.changeView("productDetails")
        }}>View more</Button>
        <Button variant="primary"
        onClick={(e)=>{
        this.addToCard(this.props.element)

        }}
        >Add to Cart</Button>
        </div>
      </Card.Body>
    </Card>  
      </div>
    )
  }
}
