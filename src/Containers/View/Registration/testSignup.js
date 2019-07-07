import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component{
    state={
        email: '',
        password:'',
    }
    formInputChange = this.formInputChange.bind(this);
    formSubmit = this.formSubmit.bind(this);

    formInputChange (e){
        this.setState({ [e.target.name]:e.target.value })
    }
    formSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios.post('http://52.47.181.47:3000/api/v1/users/signup', {data: this.state })
        .then(res => {
            console.log(res.data)
            return res.data;
        })
        .catch(err => { console.log(err.message) });
    }
    render(){
        return (
            <div className="container">
                <form action="" onSubmit={this.formSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input type="email" id="email" className="form-control" 
                            name="email"                            
                            onChange={this.formInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input type="password" id="password" name="password" className="form-control" onChange={this.formInputChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-md btn-primary"> Register</button>
                        
                    </div>
                </form>
                
            </div>
        );
    }
}    


export default Test;