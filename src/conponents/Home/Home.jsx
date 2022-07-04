import React, { Component } from 'react'
import axios from "axios"
export default class Home extends Component {
    state = {
        products: [],
        books:[],
        furniture:[],
        dvd:[],
        selectedProducts:[]
    }
     x;
    getProduct = async (type) => {
        let { data } = await axios.get(`http://127.0.0.1:8000/api/products/get-all-products/${type}`);
        this.setState({ [type]: data.child })
    }

    componentDidMount() {
        this.getProduct('DVD')
        this.getProduct('Furniture')
        this.getProduct('Book')
    }
    selectItem=(event,item)=>{
        if (event.target.checked) {
            this.state.selectedProducts.push(item);
            console.log(this.state.selectedProducts);
          } else{
            console.log(this.state.selectedProducts.indexOf(item))
            this.state.selectedProducts.splice(this.state.selectedProducts.indexOf(item),1)
            console.log(this.state.selectedProducts);
          }
    }
    massDelete=async()=>{
        console.log(this.state.selectedProducts);
        await axios.delete(`http://localhost:8000//${this.state.selectedProducts[0]}`);
        this.getProduct();

    }
    render() {
        return (
            <>
                <div className="container">
                    <div className='row'>

                    <div className=" d-flex justify-content-between "  >
                        <h1 className=" py-1">Products  </h1>
                        <div className='btns'>
                        <button className='m-1'onClick={()=>{
                             this.props.history.replace("/addProduct")
                        }}>Add</button>
                        <button onClick={this.massDelete}>MASS DELETE</button>
                        </div>
                        
                    </div>
                    </div>
                    <ul className="row">
                                    {this.state.books.map((val, index) => {
                                        console.log(val);
                                    return (
                                        <li key={index} className="col-md-4 item">
                                            <div className="chek  mr-auto" >

                                            <input id='kkk' type="checkbox" className='checck'  name="this.translate.currentLang==='ar' ? item.name : item.nameEn"  onChange={(e)=>{this.selectItem(e,val.id)}} />
                                            </div>
                                            <div className="itemDetails">
                                           
                                                <h6>{val.sku}</h6>
                                                <h5>{val.name} </h5>
                                                <h6>{val.price}</h6>
                                                <h6>{val.weight}</h6>
                                            
                                            </div>
                                        </li>
                                    )
                                    })
                                    }   
                                     {this.state.dvd.map((val, index) => {
                                    return (
                                        <li key={index} className="col-md-4 item">
                                            <div className="chek  mr-auto" >

                                            <input id='kkk' type="checkbox" className='checck'  name="this.translate.currentLang==='ar' ? item.name : item.nameEn"  onChange={(e)=>{this.selectItem(e,val.id)}} />
                                            </div>
                                            <div className="itemDetails">
                                           
                                                <h6>{val.sku}</h6>
                                                <h5>{val.name} </h5>
                                                <h6>{val.price}</h6>
                                                <h6>{val.size}</h6>
                                            
                                            </div>
                                        </li>
                                    )
                                    })
                                    }   
                                     {this.state.furniture.map((val, index) => {
                                    return (
                                        <li key={index} className="col-md-4 item">
                                            <div className="chek  mr-auto" >

                                            <input id='kkk' type="checkbox" className='checck'  name="this.translate.currentLang==='ar' ? item.name : item.nameEn"  onChange={(e)=>{this.selectItem(e,val.id)}} />
                                            </div>
                                            <div className="itemDetails">
                                                <h6>{val.sku}</h6>
                                                <h5>{val.name} </h5>
                                                <h6>{val.price}</h6>
                                                <h6>{val.height} x {val.height} x {val.length}</h6>
                                            </div>
                                        </li>
                                    )
                                    })
                                    }         
                    </ul>
                </div>
            </>
        )
    }
}
