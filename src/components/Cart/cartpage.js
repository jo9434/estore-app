import React, { Component } from "react";
import $ from 'jquery';
import WomenImage1 from '../../assets/women/WomenImage1.jpg';
import MenImage2 from '../../assets/men/MenImage1.jpg';
import './cartpage.css';

export default class Cartpage extends Component {
    componentDidMount = () => {
        $("#cpg1sizeXS").on("click", function(){
            $("#cpg1sizeXS").addClass("cpgactiveopt");
            $("#cpg1sizeS").removeClass("cpgactiveopt");
            $("#cpg1sizeM").removeClass("cpgactiveopt");
            $("#cpg1sizeL").removeClass("cpgactiveopt");
        })
        $("#cpg1sizeS").on("click", function(){
            $("#cpg1sizeXS").removeClass("cpgactiveopt");
            $("#cpg1sizeS").addClass("cpgactiveopt");
            $("#cpg1sizeM").removeClass("cpgactiveopt");
            $("#cpg1sizeL").removeClass("cpgactiveopt");
        })
        $("#cpg1sizeM").on("click", function(){
            $("#cpg1sizeXS").removeClass("cpgactiveopt");
            $("#cpg1sizeS").removeClass("cpgactiveopt");
            $("#cpg1sizeM").addClass("cpgactiveopt");
            $("#cpg1sizeL").removeClass("cpgactiveopt");
        })
        $("#cpg1sizeL").on("click", function(){
            $("#cpg1sizeXS").removeClass("cpgactiveopt");
            $("#cpg1sizeS").removeClass("cpgactiveopt");
            $("#cpg1sizeM").removeClass("cpgactiveopt");
            $("#cpg1sizeL").addClass("cpgactiveopt");
        })
        $("#cpg2sizeS").on("click", function(){
            $("#cpg2sizeS").addClass("cpgactiveopt");
            $("#cpg2sizeM").removeClass("cpgactiveopt");
        })
        $("#cpg2sizeM").on("click", function(){
            $("#cpg2sizeS").removeClass("cpgactiveopt");
            $("#cpg2sizeM").addClass("cpgactiveopt");
        })
        $("#cpg1clrgry").on("click", function(){
            $("#cpg1clrgry").addClass("cpgactivecolr");
            $("#cpg1clrblk").removeClass("cpgactivecolr");
            $("#cpg1clrdrkgrn").removeClass("cpgactivecolr");
        })
        $("#cpg1clrblk").on("click", function(){
            $("#cpg1clrgry").removeClass("cpgactivecolr");
            $("#cpg1clrblk").addClass("cpgactivecolr");
            $("#cpg1clrdrkgrn").removeClass("cpgactivecolr");
        })
        $("#cpg1clrdrkgrn").on("click", function(){
            $("#cpg1clrgry").removeClass("cpgactivecolr");
            $("#cpg1clrblk").removeClass("cpgactivecolr");
            $("#cpg1clrdrkgrn").addClass("cpgactivecolr");
        })
        $("#cpg2clrblk").on("click", function(){
            $("#cpg2clrblk").addClass("cpgactivecolr");
            $("#cpg2clrdgrblu").removeClass("cpgactivecolr");
            $("#cpg2clrorg").removeClass("cpgactivecolr");
        })
        $("#cpg2clrdgrblu").on("click", function(){
            $("#cpg2clrblk").removeClass("cpgactivecolr");
            $("#cpg2clrdgrblu").addClass("cpgactivecolr");
            $("#cpg2clrorg").removeClass("cpgactivecolr");
        })
        $("#cpg2clrorg").on("click", function(){
            $("#cpg2clrblk").removeClass("cpgactivecolr");
            $("#cpg2clrdgrblu").removeClass("cpgactivecolr");
            $("#cpg2clrorg").addClass("cpgactivecolr");
        })

        // Function to display the message for the products ordered successfully after adding it to the cart
        $("#cpgorderitem").on("click", function(){
            $("#cpgmsgSuccess").css("display","block");
            $("#cgpbtnClose").on("click",function(){
                $("#cpgmsgSuccess").css("display","none");
            })
        })

        var data1 = 1;
        var price1 = 50;
        var sprice1 = 50; // price of each shirt1
        document.getElementById("cpgqty1").innerText = data1;
        document.getElementById("cpg1price").innerText = "$"+price1+".00";
        // cpg1price cpgqty1 cpgbtnincr1 cpgbtndecr1 cpg2price cpgqty2 cpgbtnincr2 cpgbtndecr2 cpgtaxamt cpgtotamt
        var data2 = 2;
        var price2 = 150;
        var sprice2 = 75; // price of each shirt2
        document.getElementById("cpgqty2").innerText = data2;
        document.getElementById("cpg2price").innerText = "$"+price2+".00";

        var totalprice = price1 + price2;
        document.getElementById("cpgtotamt").innerText = "$"+totalprice+".00";

        $("#cpgbtnincr1").on("click", function() {
            if(data1<5) {
                data1 = data1 + 1;
                price1 = price1 + 50;
                totalprice = price1 + price2;
                document.getElementById("cpgqty1").innerText = data1;
                document.getElementById("cpg1price").innerText = "$"+price1+".00";
                document.getElementById("cpgtotamt").innerText = "$"+totalprice+".00";
            }
        });

        $("#cpgbtndecr1").on("click", function() {
            if(data1>1) {
                data1 = data1 - 1;
                price1 = price1 - 50;
                totalprice = totalprice - sprice1;
                document.getElementById("cpgqty1").innerText = data1;
                document.getElementById("cpg1price").innerText = "$"+price1+".00";
                document.getElementById("cpgtotamt").innerText = "$"+totalprice+".00";
            }
        });

        $("#cpgbtnincr2").on("click", function() {
            if(data2<5) {
                data2 = data2 + 1;
                price2 = price2 + sprice2;
                totalprice = price1 + price2;
                document.getElementById("cpgqty2").innerText = data2;
                document.getElementById("cpg2price").innerText = "$"+price2+".00";
                document.getElementById("cpgtotamt").innerText = "$"+totalprice+".00";
            }
        });

        $("#cpgbtndecr2").on("click", function() {
            if(data2>1) {
                data2 = data2 - 1;
                price2 = price2 - sprice2;
                totalprice = totalprice - sprice2;
                document.getElementById("cpgqty2").innerText = data2;
                document.getElementById("cpg2price").innerText = "$"+price2+".00";
                document.getElementById("cpgtotamt").innerText = "$"+totalprice+".00";
            }
        });
    }
    render() {
        const sizeXS = "XS", sizeS = "S", sizeM = "M", sizeL = "L";
        const qty1 = 1, qty2 = 2;
        const cardHeading3 = "Apollo T-Shirt & Pant";
        const msgSuccess = ""+cardHeading3+" Order Placed Successfully...!";

        return (
            <div className="cartgroup">
                <div className="cgpmodal modal fade" id="cartModal" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="cgpcontent modal-content">
                            <button type="button" className="cgpbtnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="cgpmodalbody modal-body">
                                <div id="cpgmsgSuccess" className="cgpmsgSuccess bg-success text-light toast" role="alert" aria-live="assertive" aria-atomic="true">
                                    <div className="toast-header">
                                        <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                        <strong className="me-auto">Message</strong>
                                        <small>Just now</small>
                                        <button type="button" id="cgpbtnClose" className="cgpbtnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                    </div>
                                    <div className="toast-body bg-light text-dark">
                                        {msgSuccess}
                                    </div>
                                </div>
                                <h1 className="cartheading">cart</h1>
                                <hr className="cartcolbar" />
                                <div id="cartproduct1" className="cartproduct">
                                    <h6 className="cpgheading"><b>apollo</b> <br/> running short</h6>
                                    <h6 id="cpg1price" className="cpgprice"></h6>
                                    <div className="cpgsizegrp">
                                        <p id="cpgsize" className="cpgsize">Size:</p>
                                        <div className="cpgsizeopt">
                                            <button type="button" id="cpg1sizeXS" className="sizeXS btn cpgoptn">{sizeXS}</button>
                                            <button type="button" id="cpg1sizeS" className="sizeS cpgactiveopt cpgoptn btn">{sizeS}</button>
                                            <button type="button" id="cpg1sizeM" className="sizeM cpgoptn btn">{sizeM}</button>
                                            <button type="button" id="cpg1sizeL" className="sizeL cpgoptn btn">{sizeL}</button>
                                        </div>
                                    </div>
                                    <div className="cpgcolorgrp">
                                        <p id="cpgcolor" className="cpgcolor">Color:</p>
                                        <div className="cpgcoloropt">
                                            <button type="button" id="cpg1clrgry" className="clrgry cpgactivecolr cpgcolr btn"></button>
                                            <button type="button" id="cpg1clrblk" className="clrblk cpgcolr btn"></button>
                                            <button type="button" id="cpg1clrdrkgrn" className="clrdrkgrn cpgcolr btn"></button>
                                        </div>
                                    </div>
                                    <div className="cpgbuttons">
                                        <button type="button" id="cpgbtnincr1" className="cpgbtnincr btn"><i className="iconadd fa-solid fa-plus"></i></button>
                                        <h2 id="cpgqty1" className="cpgqty"></h2>
                                        <button type="button" id="cpgbtndecr1" className="cpgbtndecr btn"><i className="iconsub fa-solid fa-minus"></i></button>
                                    </div>
                                    <div id="cpg1imglist" className="cpgimglist carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="true">
                                        <div>
                                            <div className="carousel-item active">
                                            <img src={WomenImage1} className="cpgimg d-block w-100" alt="Women's Clothing" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src={WomenImage1} className="cpgimg d-block w-100" alt="Women's Clothing" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src={WomenImage1} className="cpgimg d-block w-100" alt="Women's Clothing" />
                                            </div>
                                        </div>
                                        <button className="cpgbtnPrev carousel-control-prev" type="button" data-bs-target="#cpg1imglist" data-bs-slide="prev">
                                            <i className="cpgicon fa-solid fa-chevron-left"></i>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="cpgbtnNext carousel-control-next" type="button" data-bs-target="#cpg1imglist" data-bs-slide="next">
                                            <i className="cpgicon fa-solid fa-chevron-right"></i>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div id="cartproduct2" className="cartproduct">
                                    <h6 className="cpgheading"><b>apollo</b> <br/> running short</h6>
                                    <h6 id="cpg2price" className="cpgprice"></h6>
                                    <div className="cpgsizegrp">
                                        <p id="cpgsize" className="cpgsize">Size:</p>
                                        <div className="cpgsizeopt">
                                            <button type="button" id="cpg2sizeS" className="sizeS cpgactiveopt hgoptn btn">{sizeS}</button>
                                            <button type="button" id="cpg2sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                        </div>
                                    </div>
                                    <div className="cpgcolorgrp">
                                        <p id="cpgprodcolor" className="cpgcolor">Color:</p>
                                        <div className="cpgcoloropt">
                                            <button type="button" id="cpg2clrblk" className="clrblk cpgactivecolr cpgcolr btn"></button>
                                            <button type="button" id="cpg2clrdgrblu" className="clrdgrblu cpgcolr btn"></button>
                                            <button type="button" id="cpg2clrorg" className="clrorg cpgcolr btn"></button>
                                        </div>
                                    </div>
                                    <div className="cpgbuttons">
                                        <button type="button" id="cpgbtnincr2" className="cpgbtnincr btn"><i className="iconadd fa-solid fa-plus"></i></button>
                                        <h2 id="cpgqty2" className="cpgqty"></h2>
                                        <button type="button" id="cpgbtndecr2" className="cpgbtndecr btn"><i className="iconsub fa-solid fa-minus"></i></button>
                                    </div>
                                    <div id="cpg2imglist" className="cpgimglist carousel slide" data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="true">
                                        <div>
                                            <div className="carousel-item active">
                                            <img src={MenImage2} className="cpgimg d-block w-100" alt="Men's Clothing" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src={MenImage2} className="cpgimg d-block w-100" alt="Men's Clothing" />
                                            </div>
                                            <div className="carousel-item">
                                            <img src={MenImage2} className="cpgimg d-block w-100" alt="Men's Clothing" />
                                            </div>
                                        </div>
                                        <button className="cpgbtnPrev carousel-control-prev" type="button" data-bs-target="#cpg2imglist" data-bs-slide="prev">
                                            <i className="cpgicon fa-solid fa-chevron-left"></i>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="cpgbtnNext carousel-control-next" type="button" data-bs-target="#cpg2imglist" data-bs-slide="next">
                                            <i className="cpgicon fa-solid fa-chevron-right"></i>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <section className="cpgcalcgroup">
                                    <p className="cpglabel">tax 21%: <b id="cpgtaxamt">$42.00</b></p>
                                    <p>quantity: <b id="cpgtotqty">3</b></p>
                                    <p>Total: <b id="cpgtotamt" className="cpgtotamt"></b></p>
                                    <button id="cpgorderitem" type="button" className="btnorderitem">order</button>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}