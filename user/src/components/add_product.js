import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class Add_product extends Component {
    render(){
        return (
            <section>
            <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
            <div className="container">
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                <div className="col-md-9  text-center">
                    <h1 className="mb-0 bread">add product </h1>
                    <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span>add product</span></p>
                </div>
                </div>
            </div>
        </div>
            <section className="ftco-section ">
                <div className="container-fluid"></div>
                    <div className="row">
                    <div className="col-lg-12 ">
                        <div className="card card-outline-primary bg-light">
                            <div className="card-body bg-light">
                                <form action="#" className="bg-white p-5 contact-form bg-light">
                                    <div className="form-body">
                                        <h3 className="card-title m-t-15 text-primary">product Info</h3>
                                        <hr/>
                                        <div className="row form-group">
                                            <div className="col-md-6">
                                                <img id="imgg" src="images/person_4.jpg" alt="your image" style={{width:"30%",paddingRight:"30px", paddingLeft:"0px"}} className="rounded" />
                                                <label for="btn_img" className="custom-file-upload btn btn-info py-1 px-2">
                                                            Custom Upload
                                                            </label>
                                                <input id="btn_img"  name="btn_img" accept="image/JPEG" style={{display: "none"}}   type="file" onchange="readURL(this); "  />
                                                

                                            </div>
                                        </div>
                                        <div className="row p-t-20">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="control-label text-info">product Name</label>
                                                    <input type="text" id="product Name" className="form-control" placeholder="product Name"/>
                                                    <small className="form-control-feedback"> This is inline help </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group has-danger">
                                                    <label className="control-label text-info"> Magasin designation </label>
                                                    <textarea className="form-control rounded-0 form-control-danger" id="exampleFormControlTextarea2" rows="3" placeholder="Magasin designation ..."></textarea>
                                                    <small className="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group has-danger">
                                                    <label className="control-label text-info"> Product Qte </label>
                                                    <input type="text" id="Product Qte" className="form-control" placeholder="Product Qte"/>
                                                    <small className="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group has-danger">
                                                    <label className="control-label text-info"> Product price </label>
                                                    <input type="text" id="Product price" className="form-control" placeholder="Product price"/>
                                                    <small className="form-control-feedback"> This field has error. </small> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="text-info">Category</label>
                                                    <select className="form-control custom-select">
                                                        <option>--category of product--</option>
                                                        <option>cat1</option>
                                                        <option>cat2</option>
                                                        <option>cat3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary py-2 px-3" onClick="" > <i className="fa fa-check"></i> Add</button>
                                        <button type="button" className="btn btn-inverse py-2 px-3" onClick="/" >Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                </section>
                    )
    }
}