import React, { Component } from 'react'
import axios from 'axios'
export default class AddProduct extends Component {
    state={
        value:'DVD',
    }
    product={
     }
    
    


    getFormData=(e)=>{
       this.product[e.target.name] =e.target.value
    }

    handleChange=(event) =>{    
        this.setState({value:event.target.value})

    }

    sendData= async (e)=>{
        this.product.type=this.state.value
        e.preventDefault()
        console.log(this.product);
        await axios.post(`http://localhost:8000/api/products/add-product}`,this.product);
         this.props.history.replace("/home")
    }

    render() {

        return (
            <>
                    <div className="w-75 mx-auto my-5">
                        <form onSubmit={this.sendData} >
                            <input type="text" name="name" onChange={this.getFormData} className="form-control mt-3" placeholder=" Name" />
                            <input type="text" name="price" onChange={this.getFormData} className="form-control mt-3" placeholder="price" />
                            <label>
                                Pick your favorite flavor:
                                <select  onChange={this.handleChange} >       
                                    <option value="DVD">DVD</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Book">Book</option>
                                </select>
                                </label>
                            {this.state.value==='DVD'?<input type="number" name="size" onChange={this.getFormData} className="form-control mt-3" placeholder="size" />:''}
                            {this.state.value==="Furniture"?<> <input type="number" name="height" onChange={this.getFormData} className="form-control mt-3" placeholder="height" />
                            <input type="number" name="weight" onChange={this.getFormData} className="form-control mt-3" placeholder="weight" />
                            <input type="number" name="length" onChange={this.getFormData} className="form-control mt-3" placeholder="length" /></>:''}
                            {this.state.value==='Book'?<input type="number" name="weight" onChange={this.getFormData} className="form-control mt-3" placeholder="weight" />:''}

                           
                            <button className="btn mt-3 btn-info float-end ">Save Product</button>
                        </form>
                    </div>
            </>
        )
    }
}
