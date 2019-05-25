import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

export default class commands_celler extends Component {
    render(){
        return (
            <section>
                <div className="hero-wrap hero-bread" style={{backgroundImage: "url("+"images/bg_6.jpg"+")"}}>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <h1 className="mb-0 bread">Consult My commands </h1>
                            <p className="breadcrumbs"><span className="mr-2"><a href="/">Home</a></span> <span> commands</span></p>
                            
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
                                <h4 className="card-title text-info">My commands</h4>
                                <hr/>
                                <br/>
                                <table id="dtMaterialDesignExample" className="display table table-striped table-bordered " cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                    <th class="th-sm text-info">Id
                                    </th>
                                    <th class="th-sm text-info">Products
                                    </th>
                                    <th class="th-sm text-info">Date
                                    </th>
                                    <th class="th-sm text-info">Etat
                                    </th>
                                    <th class="th-sm text-info">Total
                                    </th>
                                    <th class="th-sm text-info">Options
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="image-prod" style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>1</td>
                                        <td>System Architect</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>10/11/2018</td>
                                        <td><span class="badge badge-success">done</span></td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>$320,800</td>
                                        <td>
                                            <a href="/show_product" class="btn btn-outline-primary"><span className="icon icon-eye"></span></a>
                                            <a href="/edit_product" class="btn btn-outline-warning"><span className="icon icon-edit"></span></a>
                                            <a href="/delet_product" class="btn btn-outline-danger"><span className="icon icon-trash"></span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="image-prod" style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>2</td>
                                        <td>System Architect</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>10/11/2018</td>
                                        <td><span class="badge badge-warning">waiting</span></td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>$170,750</td>
                                        <td>
                                            <a href="" class="btn btn-outline-primary"><span className="icon icon-eye"></span></a>
                                            <a href="" class="btn btn-outline-warning"><span className="icon icon-edit"></span></a>
                                            <a href="" class="btn btn-outline-danger"><span className="icon icon-trash"></span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="image-prod" style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>3</td>
                                        <td>System Architect</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>10/11/2018</td>
                                        <td><span class="badge badge-danger">refuse</span></td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>$86,000</td>
                                        <td>
                                            <a href="" class="btn btn-outline-primary"><span className="icon icon-eye"></span></a>
                                            <a href="" class="btn btn-outline-warning"><span className="icon icon-edit"></span></a>
                                            <a href="" class="btn btn-outline-danger"><span className="icon icon-trash"></span></a>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className="image-prod" style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>4</td>
                                        <td>System Architect</td>
                                        <td style={{backgroundImage: "url("+"images/product-3.jpg"+")"}}>10/11/2018</td>
                                        <td><span class="badge badge-secondary">In progress</span></td>
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