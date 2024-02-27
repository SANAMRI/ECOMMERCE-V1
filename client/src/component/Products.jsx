import React, { Component } from 'react'
import OneProduct from './OneProduct';

export default class Products extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props, "props from App");
    return (
      <div className='d-flex justify-content-center flex-wrap gap-3'>
    {this.props.data.filter((e,i)=>e.productName.toLowerCase().includes(this.props.searchQuerry.toLowerCase())).map((e,i)=>{
      return (
       <OneProduct product={e} key={i} changeView={this.props.changeView} setState={this.props.setState}/>
      )
    })
    } 
      </div>
    )
  }
}
