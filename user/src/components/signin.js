import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state = { value: 'client'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }

    handleChange(event){
        this.setState({value : event.target.value})
    } 

    handleSubmit(event){
      // alert('selected value: ' + this.state.value);
        var vl ;
         if (this.state.value == 'seller'){
             
            let path = `/sign_celler`;
            this.props.history.push(path);
          
           
         }else 
         {
            let path = `/sign_client`;
            this.props.history.push(path);
         }
        
        

    }
  


    render(){
        return (
            <section>
                <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9  text-center">
                        <h1 className="mb-0 bread">Sign In</h1>
                        <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>Sign In</span></p>
                    </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section contact-section">
                <div className="container">
                    <div className="row block-9 " >
                        <div className="col-md-3 order-md-last d-flex"></div>
                        <div className="col-md-6 order-md-last d-flex">
                            <form action="#" className="bg-white p-5 contact-form" onSubmit={this.handleSubmit}>
                                <div class="form-group form-control-lg">
                                    <label for="choix_cnx">sign in as :</label>
                                    <select class="form-control" id="choix_cnx" value={this.state.selectValue} onChange={this.handleChange}>
                                    <option id="client">Client</option>
                                    <option id="celler">celler</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Next" className="btn btn-primary py-3 px-5"/>
                                 </div>
                             </form>
                        </div>
                    </div>
                   
                </div>
            </section>  
            
        </section>
        )
    }
}
