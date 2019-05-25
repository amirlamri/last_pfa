import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class My_products extends Component {
    render(){
        return (
            <section>
                <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <h1 className="mb-0 bread">Consult My products </h1>
                            <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span> product</span></p>
                            
                        </div>
                    </div>
                </div>
                </div>
            <section className="ftco-section">
                <div className="container-fluid" ></div>
                    <div className="row ">
                    <div className="col-lg-12  ">
                        <div className="card card-outline-primary bg-light">
                            <div className="card-body ">
                                <h4 className="card-title text-info">My Product</h4>
                                <hr/>
                                <div className="col-md-3 offset-md-10">
                                <a href="/add_product" className="  btn btn-primary py-2 px-3"><span className="icon icon-plus"></span></a>
                                </div>
                                <br/>
                                <table id="dtMaterialDesignExample" className="display table table-striped table-bordered " cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                    <th class="th-sm text-info">pice
                                    </th>
                                    <th class="th-sm text-info">Name
                                    </th>
                                    <th class="th-sm text-info">Designation
                                    </th>
                                    <th class="th-sm text-info">Qte
                                    </th>
                                    <th class="th-sm text-info">Price
                                    </th>
                                    <th class="th-sm text-info">options
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="image-prod"><div className="img" style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}></div></td>
                                        <td>System Architect</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>Edinburgh</td>
                                        <td>61</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>$320,800</td>
                                        <td>
                                            <a href="/show_product" class="btn btn-outline-primary"><span className="icon icon-eye"></span></a>
                                            <a href="/edit_product" class="btn btn-outline-warning"><span className="icon icon-edit"></span></a>
                                            <a href="/delet_product" class="btn btn-outline-danger"><span className="icon icon-trash"></span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="image-prod"><div className="img" style={{backgroundImage: "url("+"images/product-4.jpg"+")"}}></div></td>
                                        <td>Accountant</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>Tokyo</td>
                                        <td>63</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>$170,750</td>
                                        <td>
                                            <a href="" class="btn btn-outline-primary"><span className="icon icon-eye"></span></a>
                                            <a href="" class="btn btn-outline-warning"><span className="icon icon-edit"></span></a>
                                            <a href="" class="btn btn-outline-danger"><span className="icon icon-trash"></span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="image-prod"><div className="img" style={{backgroundImage: "url("+"images/product-2.jpg"+")"}}></div></td>
                                        <td>Junior Technical Author</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>San Francisco</td>
                                        <td>66</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>$86,000</td>
                                        <td>
                                            <a href="" class="btn btn-outline-primary"><span className="icon icon-eye"></span></a>
                                            <a href="" class="btn btn-outline-warning"><span className="icon icon-edit"></span></a>
                                            <a href="" class="btn btn-outline-danger"><span className="icon icon-trash"></span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="image-prod"><div className="img" style={{backgroundImage: "url("+"images/product-1.jpg"+")"}}></div></td>
                                        <td>Senior Javascript Developer</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>Edinburgh</td>
                                        <td>22</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>$433,060</td>
                                        <td>
                                            <a href="" class="btn btn-outline-primary"><span className="icon icon-eye"></span></a>
                                            <a href="" class="btn btn-outline-warning"><span className="icon icon-edit"></span></a>
                                            <a href="" class="btn btn-outline-danger"><span className="icon icon-trash"></span></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
            </section>
            </section>
              )
            }
        }