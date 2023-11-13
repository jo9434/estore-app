import React, { Component } from "react";
import $ from 'jquery';
import WomenImage1 from '../../assets/women/WomenImage1.jpg';
import WomenImage4 from '../../assets/women/WomenImage4.jpg';
import MenImage1 from '../../assets/men/MenImage8.jpg';
import MenImage2 from '../../assets/men/MenImage1.jpg';
import KidsImage1 from '../../assets/kids/KidsImage2.jpg';
import KidsImage2 from '../../assets/kids/KidsImage5.jpg';
import './productpage.css';

export default class ProductPage extends Component {
    componentDidMount = () => {
        // Home Group 1 & 2
        $("#hg1sizeXS").on("click", function(){
            $("#hg1sizeXS").addClass("pgactiveopt");
            $("#hg1sizeS").removeClass("pgactiveopt");
            $("#hg1sizeM").removeClass("pgactiveopt");
            $("#hg1sizeL").removeClass("pgactiveopt");
        })
        $("#hg1sizeS").on("click", function(){
            $("#hg1sizeXS").removeClass("pgactiveopt");
            $("#hg1sizeS").addClass("pgactiveopt");
            $("#hg1sizeM").removeClass("pgactiveopt");
            $("#hg1sizeL").removeClass("pgactiveopt");
        })
        $("#hg1sizeM").on("click", function(){
            $("#hg1sizeXS").removeClass("pgactiveopt");
            $("#hg1sizeS").removeClass("pgactiveopt");
            $("#hg1sizeM").addClass("pgactiveopt");
            $("#hg1sizeL").removeClass("pgactiveopt");
        })
        $("#hg1sizeL").on("click", function(){
            $("#hg1sizeXS").removeClass("pgactiveopt");
            $("#hg1sizeS").removeClass("pgactiveopt");
            $("#hg1sizeM").removeClass("pgactiveopt");
            $("#hg1sizeL").addClass("pgactiveopt");
        })
        $("#hg2sizeS").on("click", function(){
            $("#hg2sizeS").addClass("pgactiveopt");
            $("#hg2sizeM").removeClass("pgactiveopt");
        })
        $("#hg2sizeM").on("click", function(){
            $("#hg2sizeS").removeClass("pgactiveopt");
            $("#hg2sizeM").addClass("pgactiveopt");
        })
        $("#hg1clrgry").on("click", function(){
            $("#hg1clrgry").addClass("pgactivecolr");
            $("#hg1clrblk").removeClass("pgactivecolr");
            $("#hg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#hg1clrblk").on("click", function(){
            $("#hg1clrgry").removeClass("pgactivecolr");
            $("#hg1clrblk").addClass("pgactivecolr");
            $("#hg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#hg1clrdrkgrn").on("click", function(){
            $("#hg1clrgry").removeClass("pgactivecolr");
            $("#hg1clrblk").removeClass("pgactivecolr");
            $("#hg1clrdrkgrn").addClass("pgactivecolr");
        })
        $("#hg2clrblk").on("click", function(){
            $("#hg2clrblk").addClass("pgactivecolr");
            $("#hg2clrdgrblu").removeClass("pgactivecolr");
            $("#hg2clrorg").removeClass("pgactivecolr");
        })
        $("#hg2clrdgrblu").on("click", function(){
            $("#hg2clrblk").removeClass("pgactivecolr");
            $("#hg2clrdgrblu").addClass("pgactivecolr");
            $("#hg2clrorg").removeClass("pgactivecolr");
        })
        $("#hg2clrorg").on("click", function(){
            $("#hg2clrblk").removeClass("pgactivecolr");
            $("#hg2clrdgrblu").removeClass("pgactivecolr");
            $("#hg2clrorg").addClass("pgactivecolr");
        })
        // Home Group 3 & 4
        $("#hg3sizeXS").on("click", function(){
            $("#hg3sizeXS").addClass("pgactiveopt");
            $("#hg3sizeS").removeClass("pgactiveopt");
            $("#hg3sizeM").removeClass("pgactiveopt");
            $("#hg3sizeL").removeClass("pgactiveopt");
        })
        $("#hg3sizeS").on("click", function(){
            $("#hg3sizeXS").removeClass("pgactiveopt");
            $("#hg3sizeS").addClass("pgactiveopt");
            $("#hg3sizeM").removeClass("pgactiveopt");
            $("#hg3sizeL").removeClass("pgactiveopt");
        })
        $("#hg3sizeM").on("click", function(){
            $("#hg3sizeXS").removeClass("pgactiveopt");
            $("#hg3sizeS").removeClass("pgactiveopt");
            $("#hg3sizeM").addClass("pgactiveopt");
            $("#hg3sizeL").removeClass("pgactiveopt");
        })
        $("#hg3sizeL").on("click", function(){
            $("#hg3sizeXS").removeClass("pgactiveopt");
            $("#hg3sizeS").removeClass("pgactiveopt");
            $("#hg3sizeM").removeClass("pgactiveopt");
            $("#hg3sizeL").addClass("pgactiveopt");
        })
        $("#hg4sizeS").on("click", function(){
            $("#hg4sizeS").addClass("pgactiveopt");
            $("#hg4sizeM").removeClass("pgactiveopt");
        })
        $("#hg4sizeM").on("click", function(){
            $("#hg4sizeS").removeClass("pgactiveopt");
            $("#hg4sizeM").addClass("pgactiveopt");
        })
        $("#hg3clrgry").on("click", function(){
            $("#hg3clrgry").addClass("pgactivecolr");
            $("#hg3clrblk").removeClass("pgactivecolr");
            $("#hg3clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#hg3clrblk").on("click", function(){
            $("#hg3clrgry").removeClass("pgactivecolr");
            $("#hg3clrblk").addClass("pgactivecolr");
            $("#hg3clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#hg3clrdrkgrn").on("click", function(){
            $("#hg3clrgry").removeClass("pgactivecolr");
            $("#hg3clrblk").removeClass("pgactivecolr");
            $("#hg3clrdrkgrn").addClass("pgactivecolr");
        })
        $("#hg4clrblk").on("click", function(){
            $("#hg4clrblk").addClass("pgactivecolr");
            $("#hg4clrdgrblu").removeClass("pgactivecolr");
            $("#hg4clrorg").removeClass("pgactivecolr");
        })
        $("#hg4clrdgrblu").on("click", function(){
            $("#hg4clrblk").removeClass("pgactivecolr");
            $("#hg4clrdgrblu").addClass("pgactivecolr");
            $("#hg4clrorg").removeClass("pgactivecolr");
        })
        $("#hg4clrorg").on("click", function(){
            $("#hg4clrblk").removeClass("pgactivecolr");
            $("#hg4clrdgrblu").removeClass("pgactivecolr");
            $("#hg4clrorg").addClass("pgactivecolr");
        })
        // Home Group 5 & 6
        $("#hg5sizeXS").on("click", function(){
            $("#hg5sizeXS").addClass("pgactiveopt");
            $("#hg5sizeS").removeClass("pgactiveopt");
            $("#hg5sizeM").removeClass("pgactiveopt");
            $("#hg5sizeL").removeClass("pgactiveopt");
        })
        $("#hg5sizeS").on("click", function(){
            $("#hg5sizeXS").removeClass("pgactiveopt");
            $("#hg5sizeS").addClass("pgactiveopt");
            $("#hg5sizeM").removeClass("pgactiveopt");
            $("#hg5sizeL").removeClass("pgactiveopt");
        })
        $("#hg5sizeM").on("click", function(){
            $("#hg5sizeXS").removeClass("pgactiveopt");
            $("#hg5sizeS").removeClass("pgactiveopt");
            $("#hg5sizeM").addClass("pgactiveopt");
            $("#hg5sizeL").removeClass("pgactiveopt");
        })
        $("#hg5sizeL").on("click", function(){
            $("#hg5sizeXS").removeClass("pgactiveopt");
            $("#hg5sizeS").removeClass("pgactiveopt");
            $("#hg5sizeM").removeClass("pgactiveopt");
            $("#hg5sizeL").addClass("pgactiveopt");
        })
        $("#hg6sizeS").on("click", function(){
            $("#hg6sizeS").addClass("pgactiveopt");
            $("#hg6sizeM").removeClass("pgactiveopt");
        })
        $("#hg6sizeM").on("click", function(){
            $("#hg6sizeS").removeClass("pgactiveopt");
            $("#hg6sizeM").addClass("pgactiveopt");
        })
        $("#hg5clrgry").on("click", function(){
            $("#hg5clrgry").addClass("pgactivecolr");
            $("#hg5clrblk").removeClass("pgactivecolr");
            $("#hg5clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#hg5clrblk").on("click", function(){
            $("#hg5clrgry").removeClass("pgactivecolr");
            $("#hg5clrblk").addClass("pgactivecolr");
            $("#hg5clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#hg5clrdrkgrn").on("click", function(){
            $("#hg5clrgry").removeClass("pgactivecolr");
            $("#hg5clrblk").removeClass("pgactivecolr");
            $("#hg5clrdrkgrn").addClass("pgactivecolr");
        })
        $("#hg6clrblk").on("click", function(){
            $("#hg6clrblk").addClass("pgactivecolr");
            $("#hg6clrdgrblu").removeClass("pgactivecolr");
            $("#hg6clrorg").removeClass("pgactivecolr");
        })
        $("#hg6clrdgrblu").on("click", function(){
            $("#hg6clrblk").removeClass("pgactivecolr");
            $("#hg6clrdgrblu").addClass("pgactivecolr");
            $("#hg6clrorg").removeClass("pgactivecolr");
        })
        $("#hg6clrorg").on("click", function(){
            $("#hg6clrblk").removeClass("pgactivecolr");
            $("#hg6clrdgrblu").removeClass("pgactivecolr");
            $("#hg6clrorg").addClass("pgactivecolr");
        })
        // Women Group
        $("#wg1sizeXS").on("click", function(){
            $("#wg1sizeXS").addClass("pgactiveopt");
            $("#wg1sizeS").removeClass("pgactiveopt");
            $("#wg1sizeM").removeClass("pgactiveopt");
            $("#wg1sizeL").removeClass("pgactiveopt");
        })
        $("#wg1sizeS").on("click", function(){
            $("#wg1sizeXS").removeClass("pgactiveopt");
            $("#wg1sizeS").addClass("pgactiveopt");
            $("#wg1sizeM").removeClass("pgactiveopt");
            $("#wg1sizeL").removeClass("pgactiveopt");
        })
        $("#wg1sizeM").on("click", function(){
            $("#wg1sizeXS").removeClass("pgactiveopt");
            $("#wg1sizeS").removeClass("pgactiveopt");
            $("#wg1sizeM").addClass("pgactiveopt");
            $("#wg1sizeL").removeClass("pgactiveopt");
        })
        $("#wg1sizeL").on("click", function(){
            $("#wg1sizeXS").removeClass("pgactiveopt");
            $("#wg1sizeS").removeClass("pgactiveopt");
            $("#wg1sizeM").removeClass("pgactiveopt");
            $("#wg1sizeL").addClass("pgactiveopt");
        })
        $("#wg2sizeS").on("click", function(){
            $("#wg2sizeS").addClass("pgactiveopt");
            $("#wg2sizeM").removeClass("pgactiveopt");
        })
        $("#wg2sizeM").on("click", function(){
            $("#wg2sizeS").removeClass("pgactiveopt");
            $("#wg2sizeM").addClass("pgactiveopt");
        })
        $("#wg1clrgry").on("click", function(){
            $("#wg1clrgry").addClass("pgactivecolr");
            $("#wg1clrblk").removeClass("pgactivecolr");
            $("#wg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#wg1clrblk").on("click", function(){
            $("#wg1clrgry").removeClass("pgactivecolr");
            $("#wg1clrblk").addClass("pgactivecolr");
            $("#wg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#wg1clrdrkgrn").on("click", function(){
            $("#wg1clrgry").removeClass("pgactivecolr");
            $("#wg1clrblk").removeClass("pgactivecolr");
            $("#wg1clrdrkgrn").addClass("pgactivecolr");
        })
        $("#wg2clrblk").on("click", function(){
            $("#wg2clrblk").addClass("pgactivecolr");
            $("#wg2clrdgrblu").removeClass("pgactivecolr");
            $("#wg2clrorg").removeClass("pgactivecolr");
        })
        $("#wg2clrdgrblu").on("click", function(){
            $("#wg2clrblk").removeClass("pgactivecolr");
            $("#wg2clrdgrblu").addClass("pgactivecolr");
            $("#wg2clrorg").removeClass("pgactivecolr");
        })
        $("#wg2clrorg").on("click", function(){
            $("#wg2clrblk").removeClass("pgactivecolr");
            $("#wg2clrdgrblu").removeClass("pgactivecolr");
            $("#wg2clrorg").addClass("pgactivecolr");
        })

        // Men Group
        $("#mg1sizeXS").on("click", function(){
            $("#mg1sizeXS").addClass("pgactiveopt");
            $("#mg1sizeS").removeClass("pgactiveopt");
            $("#mg1sizeM").removeClass("pgactiveopt");
            $("#mg1sizeL").removeClass("pgactiveopt");
        })
        $("#mg1sizeS").on("click", function(){
            $("#mg1sizeXS").removeClass("pgactiveopt");
            $("#mg1sizeS").addClass("pgactiveopt");
            $("#mg1sizeM").removeClass("pgactiveopt");
            $("#mg1sizeL").removeClass("pgactiveopt");
        })
        $("#mg1sizeM").on("click", function(){
            $("#mg1sizeXS").removeClass("pgactiveopt");
            $("#mg1sizeS").removeClass("pgactiveopt");
            $("#mg1sizeM").addClass("pgactiveopt");
            $("#mg1sizeL").removeClass("pgactiveopt");
        })
        $("#mg1sizeL").on("click", function(){
            $("#mg1sizeXS").removeClass("pgactiveopt");
            $("#mg1sizeS").removeClass("pgactiveopt");
            $("#mg1sizeM").removeClass("pgactiveopt");
            $("#mg1sizeL").addClass("pgactiveopt");
        })
        $("#mg2sizeS").on("click", function(){
            $("#mg2sizeS").addClass("pgactiveopt");
            $("#mg2sizeM").removeClass("pgactiveopt");
        })
        $("#mg2sizeM").on("click", function(){
            $("#mg2sizeS").removeClass("pgactiveopt");
            $("#mg2sizeM").addClass("pgactiveopt");
        })
        $("#mg1clrgry").on("click", function(){
            $("#mg1clrgry").addClass("pgactivecolr");
            $("#mg1clrblk").removeClass("pgactivecolr");
            $("#mg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#mg1clrblk").on("click", function(){
            $("#mg1clrgry").removeClass("pgactivecolr");
            $("#mg1clrblk").addClass("pgactivecolr");
            $("#mg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#mg1clrdrkgrn").on("click", function(){
            $("#mg1clrgry").removeClass("pgactivecolr");
            $("#mg1clrblk").removeClass("pgactivecolr");
            $("#mg1clrdrkgrn").addClass("pgactivecolr");
        })
        $("#mg2clrblk").on("click", function(){
            $("#mg2clrblk").addClass("pgactivecolr");
            $("#mg2clrdgrblu").removeClass("pgactivecolr");
            $("#mg2clrorg").removeClass("pgactivecolr");
        })
        $("#mg2clrdgrblu").on("click", function(){
            $("#mg2clrblk").removeClass("pgactivecolr");
            $("#mg2clrdgrblu").addClass("pgactivecolr");
            $("#mg2clrorg").removeClass("pgactivecolr");
        })
        $("#mg2clrorg").on("click", function(){
            $("#mg2clrblk").removeClass("pgactivecolr");
            $("#mg2clrdgrblu").removeClass("pgactivecolr");
            $("#mg2clrorg").addClass("pgactivecolr");
        })

        // Kids Group
        $("#kg1sizeXS").on("click", function(){
            $("#kg1sizeXS").addClass("pgactiveopt");
            $("#kg1sizeS").removeClass("pgactiveopt");
            $("#kg1sizeM").removeClass("pgactiveopt");
            $("#kg1sizeL").removeClass("pgactiveopt");
        })
        $("#kg1sizeS").on("click", function(){
            $("#kg1sizeXS").removeClass("pgactiveopt");
            $("#kg1sizeS").addClass("pgactiveopt");
            $("#kg1sizeM").removeClass("pgactiveopt");
            $("#kg1sizeL").removeClass("pgactiveopt");
        })
        $("#kg1sizeM").on("click", function(){
            $("#kg1sizeXS").removeClass("pgactiveopt");
            $("#kg1sizeS").removeClass("pgactiveopt");
            $("#kg1sizeM").addClass("pgactiveopt");
            $("#kg1sizeL").removeClass("pgactiveopt");
        })
        $("#kg1sizeL").on("click", function(){
            $("#kg1sizeXS").removeClass("pgactiveopt");
            $("#kg1sizeS").removeClass("pgactiveopt");
            $("#kg1sizeM").removeClass("pgactiveopt");
            $("#kg1sizeL").addClass("pgactiveopt");
        })
        $("#kg2sizeS").on("click", function(){
            $("#kg2sizeS").addClass("pgactiveopt");
            $("#kg2sizeM").removeClass("pgactiveopt");
        })
        $("#kg2sizeM").on("click", function(){
            $("#kg2sizeS").removeClass("pgactiveopt");
            $("#kg2sizeM").addClass("pgactiveopt");
        })
        $("#kg1clrgry").on("click", function(){
            $("#kg1clrgry").addClass("pgactivecolr");
            $("#kg1clrblk").removeClass("pgactivecolr");
            $("#kg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#kg1clrblk").on("click", function(){
            $("#kg1clrgry").removeClass("pgactivecolr");
            $("#kg1clrblk").addClass("pgactivecolr");
            $("#kg1clrdrkgrn").removeClass("pgactivecolr");
        })
        $("#kg1clrdrkgrn").on("click", function(){
            $("#kg1clrgry").removeClass("pgactivecolr");
            $("#kg1clrblk").removeClass("pgactivecolr");
            $("#kg1clrdrkgrn").addClass("pgactivecolr");
        })
        $("#kg2clrblk").on("click", function(){
            $("#kg2clrblk").addClass("pgactivecolr");
            $("#kg2clrdgrblu").removeClass("pgactivecolr");
            $("#kg2clrorg").removeClass("pgactivecolr");
        })
        $("#kg2clrdgrblu").on("click", function(){
            $("#kg2clrblk").removeClass("pgactivecolr");
            $("#kg2clrdgrblu").addClass("pgactivecolr");
            $("#kg2clrorg").removeClass("pgactivecolr");
        })
        $("#kg2clrorg").on("click", function(){
            $("#kg2clrblk").removeClass("pgactivecolr");
            $("#kg2clrdgrblu").removeClass("pgactivecolr");
            $("#kg2clrorg").addClass("pgactivecolr");
        })

        // Function To Add the Product to the cart
        $("#hg1addcart").on("click", function(){
            $("#hg1msgSuccess").css("display","block");
            $("#hg1btnClose").on("click",function(){
                $("#hg1msgSuccess").css("display","none");
            })
        })
        $("#hg2addcart").on("click", function(){
            $("#hg2msgSuccess").css("display","block");
            $("#hg2btnClose").on("click",function(){
                $("#hg2msgSuccess").css("display","none");
            })
        })
        $("#hg3addcart").on("click", function(){
            $("#hg3msgSuccess").css("display","block");
            $("#hg3btnClose").on("click",function(){
                $("#hg3msgSuccess").css("display","none");
            })
        })
        $("#hg4addcart").on("click", function(){
            $("#hg4msgSuccess").css("display","block");
            $("#hg4btnClose").on("click",function(){
                $("#hg4msgSuccess").css("display","none");
            })
        })
        $("#hg5addcart").on("click", function(){
            $("#hg5msgSuccess").css("display","block");
            $("#hg5btnClose").on("click",function(){
                $("#hg5msgSuccess").css("display","none");
            })
        })
        $("#hg6addcart").on("click", function(){
            $("#hg6msgSuccess").css("display","block");
            $("#hg6btnClose").on("click",function(){
                $("#hg6msgSuccess").css("display","none");
            })
        })
        $("#wg1addcart").on("click", function(){
            $("#wg1msgSuccess").css("display","block");
            $("#wg1btnClose").on("click",function(){
                $("#wg1msgSuccess").css("display","none");
            })
        })
        $("#wg2addcart").on("click", function(){
            $("#wg2msgSuccess").css("display","block");
            $("#wg2btnClose").on("click",function(){
                $("#wg2msgSuccess").css("display","none");
            })
        })
        $("#mg1addcart").on("click", function(){
            $("#mg1msgSuccess").css("display","block");
            $("#mg1btnClose").on("click",function(){
                $("#mg1msgSuccess").css("display","none");
            })
        })
        $("#mg2addcart").on("click", function(){
            $("#mg2msgSuccess").css("display","block");
            $("#mg2btnClose").on("click",function(){
                $("#mg2msgSuccess").css("display","none");
            })
        })
        $("#kg1addcart").on("click", function(){
            $("#kg1msgSuccess").css("display","block");
            $("#kg1btnClose").on("click",function(){
                $("#kg1msgSuccess").css("display","none");
            })
        })
        $("#kg2addcart").on("click", function(){
            $("#kg2msgSuccess").css("display","block");
            $("#kg2btnClose").on("click",function(){
                $("#kg2msgSuccess").css("display","none");
            })
        })
    }
    
    render() {
        const sizeXS = "XS", sizeS = "S", sizeM = "M", sizeL = "L";
        const cardHeading = "apollo t-shirt & pant";
        const cardHeading3 = "Apollo T-Shirt & Pant";
        const brandname = "apollo";
        const cardHeading2 = " t-shirt & pant";
        const cardPrice = "$50.00";
        const noStockText = "out of stock";
        const msgSuccess = ""+cardHeading3+" Added to Cart Successfully...!";

        return (
            <div className="mainCardGroup">
                <div id="homeGroup">
                    <h1 className="homeCardHeading">Home</h1>
                    <hr className="colbar1 bg-warning" />
                    <div className="homeSubGroup">
                        {/* Womens Card Group */}
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage1} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card noStock">
                            <p className="noStockText">{noStockText}</p>
                            <img className="cardImage" src={WomenImage4} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="homeCardButton btn" disabled><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage1} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage4} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage1} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                             <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage4} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        {/* Mens Card Group */}
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage1} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup3"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage2} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup4"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card noStock">
                            <p className="noStockText">{noStockText}</p>
                            <img className="cardImage" src={MenImage1} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" disabled><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage2} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup4"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage1} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup3"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage2} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup4"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        {/* Kids Card Group */}
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage1} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup5"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage2} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup6"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage1} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup5"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage2} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup6"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage1} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" data-bs-toggle="modal" data-bs-target="#homegroup5"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="homeCardGroup" className="cardGroup card noStock">
                            <p className="noStockText">{noStockText}</p>
                            <img className="cardImage" src={KidsImage2} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="homeCardButton btn" disabled><i class="fa-solid fa-cart-shopping" /></button>
                        </div>

                        {/* Home Group Modal */}
                        {/* Women */}
                        <div className="homegroupmodal modal fade" id="homegroup1" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="hg1msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="hg1btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="womenCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={WomenImage1} alt="Women Clothing" />
                                                <img className="img2 imgcard" src={WomenImage1} alt="Women Clothing" />
                                                <img className="img3 imgcard" src={WomenImage1} alt="Women Clothing" />
                                                <img className="img4 mainimgcard" src={WomenImage1} alt="Women Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="hg1sizeXS" className="sizeXS btn hgoptn">{sizeXS}</button>
                                                        <button type="button" id="hg1sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="hg1sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                        <button type="button" id="hg1sizeL" className="sizeL hgoptn btn">{sizeL}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="hg1clrgry" className="clrgry pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="hg1clrblk" className="clrblk hgcolr btn"></button>
                                                        <button type="button" id="hg1clrdrkgrn" className="clrdrkgrn hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="hg1addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning women's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="homegroupmodal modal fade" id="homegroup2" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="hg2msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="hg2btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="womenCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={WomenImage4} alt="Women Clothing" />
                                                <img className="img2 imgcard" src={WomenImage4} alt="Women Clothing" />
                                                <img className="img3 imgcard" src={WomenImage4} alt="Women Clothing" />
                                                <img className="img4 mainimgcard" src={WomenImage4} alt="Women Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="hg2sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="hg2sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="hg2clrblk" className="clrblk pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="hg2clrdgrblu" className="clrdgrblu hgcolr btn"></button>
                                                        <button type="button" id="hg2clrorg" className="clrorg hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="hg2addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning women's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Men */}
                        <div className="homegroupmodal modal fade" id="homegroup3" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="hg3msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="hg3btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="menCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={MenImage1} alt="Men Clothing" />
                                                <img className="img2 imgcard" src={MenImage1} alt="Men Clothing" />
                                                <img className="img3 imgcard" src={MenImage1} alt="Men Clothing" />
                                                <img className="img4 mainimgcard" src={MenImage1} alt="Men Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="hg3sizeXS" className="sizeXS btn hgoptn">{sizeXS}</button>
                                                        <button type="button" id="hg3sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="hg3sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                        <button type="button" id="hg3sizeL" className="sizeL hgoptn btn">{sizeL}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="hg3clrgry" className="clrgry pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="hg3clrblk" className="clrblk hgcolr btn"></button>
                                                        <button type="button" id="hg3clrdrkgrn" className="clrdrkgrn hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="hg3addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homegroupmodal modal fade" id="homegroup4" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="hg4msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="hg4btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="menCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={MenImage2} alt="Men Clothing" />
                                                <img className="img2 imgcard" src={MenImage2} alt="Men Clothing" />
                                                <img className="img3 imgcard" src={MenImage2} alt="Men Clothing" />
                                                <img className="img4 mainimgcard" src={MenImage2} alt="Men Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="hg4sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="hg4sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="hg4clrblk" className="clrblk pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="hg4clrdgrblu" className="clrdgrblu hgcolr btn"></button>
                                                        <button type="button" id="hg4clrorg" className="clrorg hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="hg4addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Kids */}
                        <div className="homegroupmodal modal fade" id="homegroup5" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="hg5msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="hg5btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="kidsCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={KidsImage1} alt="Kids Clothing" />
                                                <img className="img2 imgcard" src={KidsImage1} alt="Kids Clothing" />
                                                <img className="img3 imgcard" src={KidsImage1} alt="Kids Clothing" />
                                                <img className="img4 mainimgcard" src={KidsImage1} alt="Kids Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="hg5sizeXS" className="sizeXS btn hgoptn">{sizeXS}</button>
                                                        <button type="button" id="hg5sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="hg5sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                        <button type="button" id="hg5sizeL" className="sizeL hgoptn btn">{sizeL}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="hg5clrgry" className="clrgry pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="hg5clrblk" className="clrblk hgcolr btn"></button>
                                                        <button type="button" id="hg5clrdrkgrn" className="clrdrkgrn hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="hg5addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homegroupmodal modal fade" id="homegroup6" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="hg6msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="hg6btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="kidsCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={KidsImage2} alt="Kids Clothing" />
                                                <img className="img2 imgcard" src={KidsImage2} alt="Kids Clothing" />
                                                <img className="img3 imgcard" src={KidsImage2} alt="Kids Clothing" />
                                                <img className="img4 mainimgcard" src={KidsImage2} alt="Kids Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="hg6sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="hg6sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="hg6clrblk" className="clrblk pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="hg6clrdgrblu" className="clrdgrblu hgcolr btn"></button>
                                                        <button type="button" id="hg6clrorg" className="clrorg hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="hg6addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="colbar2 bg-warning" />
                </div>

                <div id="womenGroup">
                    <h1 className="womenCardHeading">Women</h1>
                    <hr className="colbar1 bg-warning" />
                    <div className="womenSubGroup">
                        <div id="womenCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage1} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="cardButton btn" data-bs-toggle="modal" data-bs-target="#womengroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="womenCardGroup" className="cardGroup card noStock">
                            <p className="noStockText">{noStockText}</p>
                            <img className="cardImage" src={WomenImage4} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="cardButton btn" disabled><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="womenCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage1} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="cardButton btn" data-bs-toggle="modal" data-bs-target="#womengroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="womenCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage4} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="cardButton btn" data-bs-toggle="modal" data-bs-target="#womengroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="womenCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage1} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                             <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="cardButton btn" data-bs-toggle="modal" data-bs-target="#womengroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="womenCardGroup" className="cardGroup card">
                            <img className="cardImage" src={WomenImage4} alt="Women Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button id="addProd" className="cardButton btn" data-bs-toggle="modal" data-bs-target="#womengroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                    </div>

                    {/* Women Modal Group */}
                    <div className="homegroupmodal modal fade" id="womengroup1" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="wg1msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="wg1btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="womenCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={WomenImage1} alt="Women Clothing" />
                                                <img className="img2 imgcard" src={WomenImage1} alt="Women Clothing" />
                                                <img className="img3 imgcard" src={WomenImage1} alt="Women Clothing" />
                                                <img className="img4 mainimgcard" src={WomenImage1} alt="Women Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="wg1sizeXS" className="sizeXS btn hgoptn">{sizeXS}</button>
                                                        <button type="button" id="wg1sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="wg1sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                        <button type="button" id="wg1sizeL" className="sizeL hgoptn btn">{sizeL}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="wg1clrgry" className="clrgry pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="wg1clrblk" className="clrblk hgcolr btn"></button>
                                                        <button type="button" id="wg1clrdrkgrn" className="clrdrkgrn hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="wg1addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning women's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="homegroupmodal modal fade" id="womengroup2" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="wg2msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="wg2btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="womenCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={WomenImage4} alt="Women Clothing" />
                                                <img className="img2 imgcard" src={WomenImage4} alt="Women Clothing" />
                                                <img className="img3 imgcard" src={WomenImage4} alt="Women Clothing" />
                                                <img className="img4 mainimgcard" src={WomenImage4} alt="Women Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="wg2sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="wg2sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="wg2clrblk" className="clrblk pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="wg2clrdgrblu" className="clrdgrblu hgcolr btn"></button>
                                                        <button type="button" id="wg2clrorg" className="clrorg hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="wg2addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning women's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <hr className="colbar2 bg-warning" />
                </div>
                
                <div id="menGroup">
                    <h1 className="menCardHeading">Men</h1>
                    <hr className="colbar1 bg-warning" />
                    <div className="menSubGroup">
                        <div id="menCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage1} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#mengroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="menCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage2} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#mengroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="menCardGroup" className="cardGroup card noStock">
                            <p className="noStockText">{noStockText}</p>
                            <img className="cardImage" src={MenImage1} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" disabled><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="menCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage2} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#mengroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="menCardGroup" className="cardGroup card">

                            <img className="cardImage" src={MenImage1} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#mengroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="menCardGroup" className="cardGroup card">
                            <img className="cardImage" src={MenImage2} alt="Men Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#mengroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                    </div>

                    {/* Men Modal Group */}
                    <div className="homegroupmodal modal fade" id="mengroup1" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="mg1msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="mg1btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="menCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={MenImage1} alt="Men Clothing" />
                                                <img className="img2 imgcard" src={MenImage1} alt="Men Clothing" />
                                                <img className="img3 imgcard" src={MenImage1} alt="Men Clothing" />
                                                <img className="img4 mainimgcard" src={MenImage1} alt="Men Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="mg1sizeXS" className="sizeXS btn hgoptn">{sizeXS}</button>
                                                        <button type="button" id="mg1sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="mg1sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                        <button type="button" id="mg1sizeL" className="sizeL hgoptn btn">{sizeL}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="mg1clrgry" className="clrgry pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="mg1clrblk" className="clrblk hgcolr btn"></button>
                                                        <button type="button" id="mg1clrdrkgrn" className="clrdrkgrn hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="mg1addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homegroupmodal modal fade" id="mengroup2" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="mg2msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="mg2btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="menCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={MenImage2} alt="Men Clothing" />
                                                <img className="img2 imgcard" src={MenImage2} alt="Men Clothing" />
                                                <img className="img3 imgcard" src={MenImage2} alt="Men Clothing" />
                                                <img className="img4 mainimgcard" src={MenImage2} alt="Men Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="mg2sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="mg2sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="mg2clrblk" className="clrblk pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="mg2clrdgrblu" className="clrdgrblu hgcolr btn"></button>
                                                        <button type="button" id="mg2clrorg" className="clrorg hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="mg2addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <hr className="colbar2 bg-warning" />
                </div>

                <div id="kidsGroup">
                    <h1 className="kidsCardHeading">Kids</h1>
                    <hr className="colbar1 bg-warning" />
                    <div className="kidsSubGroup">
                        <div id="kidsCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage1} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#kidsgroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="kidsCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage2} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#kidsgroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="kidsCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage1} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#kidsgroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="kidsCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage2} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#kidsgroup2"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="kidsCardGroup" className="cardGroup card">
                            <img className="cardImage" src={KidsImage1} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" data-bs-toggle="modal" data-bs-target="#kidsgroup1"><i class="fa-solid fa-cart-shopping" /></button>
                        </div>
                        <div id="kidsCardGroup" className="cardGroup card noStock">
                            <p className="noStockText">{noStockText}</p>
                            <img className="cardImage" src={KidsImage2} alt="Kids Clothing" />
                            <p className="cardHeading">{cardHeading}</p>
                            <p className="cardPrice"><b>{cardPrice}</b></p>
                            <button className="cardButton btn" disabled><i class="fa-solid fa-cart-shopping" /></button>
                        </div>

                        {/* Kids Model Group*/}
                        <div className="homegroupmodal modal fade" id="kidsgroup1" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="kg1msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="kg1btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="kidsCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={KidsImage1} alt="Kids Clothing" />
                                                <img className="img2 imgcard" src={KidsImage1} alt="Kids Clothing" />
                                                <img className="img3 imgcard" src={KidsImage1} alt="Kids Clothing" />
                                                <img className="img4 mainimgcard" src={KidsImage1} alt="Kids Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="kg1sizeXS" className="sizeXS btn hgoptn">{sizeXS}</button>
                                                        <button type="button" id="kg1sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="kg1sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                        <button type="button" id="kg1sizeL" className="sizeL hgoptn btn">{sizeL}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="kg1clrgry" className="clrgry pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="kg1clrblk" className="clrblk hgcolr btn"></button>
                                                        <button type="button" id="kg1clrdrkgrn" className="clrdrkgrn hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="kg1addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="homegroupmodal modal fade" id="kidsgroup2" tabindex="-1" aria-labelledby="homegrouplabel" aria-hidden="true">
                            <div className="modal-dialog modal-fullscreen">
                                <div className="modal-content">
                                    <button type="button" className="btnclose fa-solid fa-xmark" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <hr className="colbar3" />
                                    <div className="modalbody modal-body">
                                        <div id="kg2msgSuccess" className="msgSuccess bg-success text-light toast " role="alert" aria-live="assertive" aria-atomic="true">
                                            <div class="toast-header">
                                                <i className="rounded me-2 fa-solid fa-circle-check text-success"></i>
                                                <strong className="me-auto">Message</strong>
                                                <small>Just now</small>
                                                <button type="button" id="kg2btnClose" className="btnClose fa-solid fa-xmark"  data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                            <div className="toast-body bg-light text-dark">
                                                {msgSuccess}
                                            </div>
                                        </div>
                                        <div id="kidsCardGroup" className="productinfo">
                                            <div className="img-group">
                                                <img className="img1 imgcard" src={KidsImage2} alt="Kids Clothing" />
                                                <img className="img2 imgcard" src={KidsImage2} alt="Kids Clothing" />
                                                <img className="img3 imgcard" src={KidsImage2} alt="Kids Clothing" />
                                                <img className="img4 mainimgcard" src={KidsImage2} alt="Kids Clothing" />
                                            </div>
                                            <div className="subsection">
                                                <p className="hgpageheading"><b>{brandname}</b><br/>{cardHeading2}</p>
                                                <div className="hgprodsizegrp">
                                                    <p id="hgprodsize" className="hgprodsize">Size:</p>
                                                    <div className="hgprodsizeopt">
                                                        <button type="button" id="kg2sizeS" className="sizeS pgactiveopt hgoptn btn">{sizeS}</button>
                                                        <button type="button" id="kg2sizeM" className="sizeM hgoptn btn">{sizeM}</button>
                                                    </div>
                                                </div>
                                                <div className="hgprodcolorgrp">
                                                    <p id="hgprodcolor" className="hgprodcolor">Color:</p>
                                                    <div className="hgprodcoloropt">
                                                        <button type="button" id="kg2clrblk" className="clrblk pgactivecolr hgcolr btn"></button>
                                                        <button type="button" id="kg2clrdgrblu" className="clrdgrblu hgcolr btn"></button>
                                                        <button type="button" id="kg2clrorg" className="clrorg hgcolr btn"></button>
                                                    </div>
                                                </div>
                                                <p className="pricegroup"><b>Price:<br/><div className="hg1price">{cardPrice}</div></b></p>
                                                <button id="kg2addcart" className="addcartbtn btn col">add to cart</button>
                                                <p className="txtdesc">Find stunning men's cocktail dresses and party dresses. Stand out in lace and 
                                                    metallic cocktail dresses and party dresses from all your favorite brands.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <hr className="colbar2 bg-warning" />
                </div>
            </div>
        );
    }
}