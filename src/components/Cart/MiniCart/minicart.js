import React, { Component } from "react";
import $ from 'jquery';
import WomenImage1 from '../../../assets/women/WomenImage1.jpg';
import MenImage2 from '../../../assets/men/MenImage1.jpg';
import './minicart.css';

export default class MiniCart extends Component {
    componentDidMount = () => {
        $("#p1sizeXS").on("click", function(){
            $("#p1sizeXS").addClass("activeopt");
            $("#p1sizeS").removeClass("activeopt");
            $("#p1sizeM").removeClass("activeopt");
            $("#p1sizeL").removeClass("activeopt");
        })
        $("#p1sizeS").on("click", function(){
            $("#p1sizeXS").removeClass("activeopt");
            $("#p1sizeS").addClass("activeopt");
            $("#p1sizeM").removeClass("activeopt");
            $("#p1sizeL").removeClass("activeopt");
        })
        $("#p1sizeM").on("click", function(){
            $("#p1sizeXS").removeClass("activeopt");
            $("#p1sizeS").removeClass("activeopt");
            $("#p1sizeM").addClass("activeopt");
            $("#p1sizeL").removeClass("activeopt");
        })
        $("#p1sizeL").on("click", function(){
            $("#p1sizeXS").removeClass("activeopt");
            $("#p1sizeS").removeClass("activeopt");
            $("#p1sizeM").removeClass("activeopt");
            $("#p1sizeL").addClass("activeopt");
        })
        $("#p2sizeS").on("click", function(){
            $("#p2sizeS").addClass("activeopt");
            $("#p2sizeM").removeClass("activeopt");
        })
        $("#p2sizeM").on("click", function(){
            $("#p2sizeS").removeClass("activeopt");
            $("#p2sizeM").addClass("activeopt");
        })
        $("#p1clrgry").on("click", function(){
            $("#p1clrgry").addClass("activecolr");
            $("#p1clrblk").removeClass("activecolr");
            $("#p1clrdrkgrn").removeClass("activecolr");
        })
        $("#p1clrblk").on("click", function(){
            $("#p1clrgry").removeClass("activecolr");
            $("#p1clrblk").addClass("activecolr");
            $("#p1clrdrkgrn").removeClass("activecolr");
        })
        $("#p1clrdrkgrn").on("click", function(){
            $("#p1clrgry").removeClass("activecolr");
            $("#p1clrblk").removeClass("activecolr");
            $("#p1clrdrkgrn").addClass("activecolr");
        })
        $("#p2clrblk").on("click", function(){
            $("#p2clrblk").addClass("activecolr");
            $("#p2clrdgrblu").removeClass("activecolr");
            $("#p2clrorg").removeClass("activecolr");
        })
        $("#p2clrdgrblu").on("click", function(){
            $("#p2clrblk").removeClass("activecolr");
            $("#p2clrdgrblu").addClass("activecolr");
            $("#p2clrorg").removeClass("activecolr");
        })
        $("#p2clrorg").on("click", function(){
            $("#p2clrblk").removeClass("activecolr");
            $("#p2clrdgrblu").removeClass("activecolr");
            $("#p2clrorg").addClass("activecolr");
        })

        var data1 = 1;
        var price1 = 50;
        var sprice1 = 50; // price of each shirt1
        document.getElementById("prodqty1").innerText = data1;
        document.getElementById("prodprice1").innerText = "$"+price1+".00";

        var data2 = 2;
        var price2 = 150;
        var sprice2 = 75; // price of each shirt2
        document.getElementById("prodqty2").innerText = data2;
        document.getElementById("prodprice2").innerText = "$"+price2+".00";

        var totalprice = price1 + price2;
        document.getElementById("subtotalprice").innerText = "$"+totalprice+".00";

        $("#btnincr1").on("click", function() {
            if(data1<5) {
                data1 = data1 + 1;
                price1 = price1 + 50;
                totalprice = price1 + price2;
                document.getElementById("prodqty1").innerText = data1;
                document.getElementById("prodprice1").innerText = "$"+price1+".00";
                document.getElementById("subtotalprice").innerText = "$"+totalprice+".00";
            }
        });

        $("#btndecr1").on("click", function() {
            if(data1>1) {
                data1 = data1 - 1;
                price1 = price1 - 50;
                totalprice = totalprice - sprice1;
                document.getElementById("prodqty1").innerText = data1;
                document.getElementById("prodprice1").innerText = "$"+price1+".00";
                document.getElementById("subtotalprice").innerText = "$"+totalprice+".00";
            }
        });

        $("#btnincr2").on("click", function() {
            if(data2<5) {
                data2 = data2 + 1;
                price2 = price2 + sprice2;
                totalprice = price1 + price2;
                document.getElementById("prodqty2").innerText = data2;
                document.getElementById("prodprice2").innerText = "$"+price2+".00";
                document.getElementById("subtotalprice").innerText = "$"+totalprice+".00";
            }
        });

        $("#btndecr2").on("click", function() {
            if(data2>1) {
                data2 = data2 - 1;
                price2 = price2 - sprice2;
                totalprice = totalprice - sprice2;
                document.getElementById("prodqty2").innerText = data2;
                document.getElementById("prodprice2").innerText = "$"+price2+".00";
                document.getElementById("subtotalprice").innerText = "$"+totalprice+".00";
            }
        });
    }

    render() {
        const sizeXS = "XS", sizeS = "S", sizeM = "M", sizeL = "L";

        return (
            <div>
                <div class="minicartgrp dropdown">
                    <button className="mainButton dropdown-toggle" type="button" id="minicartbtn" data-bs-toggle="dropdown" aria-expanded="false" style={{display:"flex", border:"none", background:"none", position:"relative", marginLeft:"70.6rem", marginTop:"-1.68rem"}}>
                        <i className="appCart fa-solid fa-cart-shopping"></i>
                        <span id="cartSize">3</span>
                    </button>
                    <div className="miniCart dropdown-menu dropdown-menu-end" aria-labelledby="minicartbtn">
                        <h1>my bag</h1><p>, 3 items</p>
                        <div id="prodcard1" className="prodcard1">
                            <p id="prodname" className="prodname">apollo <br/> t-shirt & pant</p>
                            <p id="prodprice1" className="prodprice1"></p>
                            <div className="prodsizegrp">
                                <p id="prodsize" className="prodsize">Size:</p>
                                <div className="prodsizeopt">
                                    <button type="button" id="p1sizeXS" className="mcsizeXS btn optn">{sizeXS}</button>
                                    <button type="button" id="p1sizeS" className="mcsizeS activeopt optn btn">{sizeS}</button>
                                    <button type="button" id="p1sizeM" className="mcsizeM optn btn">{sizeM}</button>
                                    <button type="button" id="p1sizeL" className="mcsizeL optn btn">{sizeL}</button>
                                </div>
                            </div>
                            <div className="prodcolorgrp">
                                <p id="prodcolor" className="prodcolor">Color:</p>
                                <div className="prodcoloropt">
                                    <button type="button" id="p1clrgry" className="mcclrgry activecolr colr btn"></button>
                                    <button type="button" id="p1clrblk" className="mcclrblk colr btn"></button>
                                    <button type="button" id="p1clrdrkgrn" className="mcclrdrkgrn colr btn"></button>
                                </div>
                            </div>

                            <div className="buttons">
                                <button type="button" id="btnincr1" className="btnincr1 btn"><i className="iconadd fa-solid fa-plus"></i></button>
                                <h2 id="prodqty1" className="prodqty1"></h2>
                                <button type="button" id="btndecr1" className="btndecr1 btn"><i className="iconsub fa-solid fa-minus"></i></button>
                            </div>
                            <img className="prodimg" src={WomenImage1} alt="Women Image"></img>
                        </div>

                        <div id="prodcard2" className="prodcard2">
                            <p id="prodname" className="prodname">apollo <br/> t-shirt & pant</p>
                            <p id="prodprice2" className="prodprice2"></p>
                            <div className="prodsizegrp">
                                <p id="prodsize" className="prodsize">Size:</p>
                                <div className="prodsizeopt">
                                    <button type="button" id="p2sizeS" className="mcsizeS activeopt optn btn">{sizeS}</button>
                                    <button type="button" id="p2sizeM" className="mcsizeM optn btn">{sizeM}</button>
                                </div>
                            </div>
                            <div className="prodcolorgrp">
                                <p id="prodcolor" className="prodcolor">Color:</p>
                                <div className="prodcoloropt">
                                    <button type="button" id="p2clrblk" className="mcclrblk activecolr colr btn"></button>
                                    <button type="button" id="p2clrdgrblu" className="mcclrdgrblu colr btn"></button>
                                    <button type="button" id="p2clrorg" className="mcclrorg colr btn"></button>
                                </div>
                            </div>

                            <div className="buttons">
                                <button type="button" id="btnincr2" className="btnincr2 btn"><i className="iconadd fa-solid fa-plus"></i></button>
                                <h2 id="prodqty2" className="prodqty2"></h2>
                                <button type="button" id="btndecr2" className="btndecr2 btn"><i className="iconsub fa-solid fa-minus"></i></button>
                            </div>
                            <img className="prodimg" src={MenImage2} alt="Men Image"></img>
                        </div>

                        <div className="subtotal">
                            <h2 className="subtotalheading">Total</h2><h2 id="subtotalprice" className="subtotalprice"></h2>
                        </div>
                        <div className="btngroups">
                            <button type="button" id="btnviewbag" className="btnviewbag btn" data-bs-toggle="modal" data-bs-target="#cartModal">view bag</button>
                            <button type="button" id="btnchckout" className="btnchckout btn">check out</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}