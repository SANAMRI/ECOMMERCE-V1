import React, { Component } from 'react'
import NavBar from './layout/NavBar'
import Products from './component/Products'
import Border from './layout/Border'
import Button from 'react-bootstrap/Button';
import { FaBeer } from 'react-icons/fa';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './data.json'
import Cart from './component/Cart';
import ProductDetails from './component/ProductDetails';
import Panier from './component/Panier'
import { Card } from 'react-bootstrap';

export default class App extends Component {
  constructor() {
    super()
    this.state= {
      data:[],
      view:"products",
      item:{},
      searchQuerry:"",
      cart:[]
    }
    this.changeView=this.changeView.bind(this)
    this.setState=this.setState.bind(this)
  }
  changeView(str){
    this.setState({view:str})

  }
  componentDidMount(){
    this.setState({
      data:products
    })
  }
  render() {
    return (
      <div>
      
        <NavBar changeView={this.changeView} setState={this.setState}/> 
       {this.state.view==="products" && <Products changeView={this.changeView} data={this.state.data} setState={this.setState} cart={this.state.cart} searchQuerry={this.state.searchQuerry} />}
       {this.state.view==="Panier" && <Panier/>}
       <Panier cart={this.state.cart}/>
       {this.state.view==="productDetails" && <ProductDetails product={this.state.item}/>}
        <Border/>

      </div>
    )
  }
}

