import React, { Component } from "react";
import $ from 'jquery';
import ProductCategory from "../../components/ProductCategory/productcategory";
import ProductPage from '../../components/ProductPage/productpage';
import MiniCart from '../../components/Cart/MiniCart/minicart';
import './navbar.css';
import Cart from "../Cart/cartpage";

export default class Navbar extends Component {
    componentDidMount = () => {
        $(ProductCategory.id="#prodCategory1").on("click", function(){
            $(ProductPage.id="#homeGroup").css("display","block");
            $(ProductPage.id="#womenGroup").css("display","none");
            $(ProductPage.id="#menGroup").css("display","none");
            $(ProductPage.id="#kidsGroup").css("display","none");
        })
        $(ProductCategory.id="#prodCategory2").on("click", function(){
            $(ProductPage.id="#homeGroup").css("display","none");
            $(ProductPage.id="#womenGroup").css("display","block");
            $(ProductPage.id="#menGroup").css("display","none");
            $(ProductPage.id="#kidsGroup").css("display","none");
        })
        $(ProductCategory.id="#prodCategory3").on("click", function(){
            $(ProductPage.id="#homeGroup").css("display","none");
            $(ProductPage.id="#womenGroup").css("display","none");
            $(ProductPage.id="#menGroup").css("display","block");
            $(ProductPage.id="#kidsGroup").css("display","none");
        })
        $(ProductCategory.id="#prodCategory4").on("click", function(){
            $(ProductPage.id="#homeGroup").css("display","none");
            $(ProductPage.id="#womenGroup").css("display","none");
            $(ProductPage.id="#menGroup").css("display","none");
            $(ProductPage.id="#kidsGroup").css("display","block");
        })
        $(".usdopt").on("click", function(){
            var opt =  $(".usdopt").val();
            $(".displayselopt").html(opt);
        })
        $(".europt").on("click", function(){
            var opt =  $(".europt").val();
            $(".displayselopt").html(opt);
        })
        $(".jpyopt").on("click", function(){
            var opt =  $(".jpyopt").val();
            $(".displayselopt").html(opt);
        })
    }
    
    render() {
        return (
            <div>
                <ProductCategory />
                <i className="appLogo fa-solid fa-bag-shopping "></i>
                <div className="currencyChanger dropdown" style={{marginLeft:"65.2rem",marginTop:"-2.2rem"}}>
                    <button className="displayselopt btn dropdown-toggle" type="button" id="currencychangelist" data-bs-toggle="dropdown" aria-expanded="false" style={{border:"none", background:"none"}}>
                        <i className="fa-solid fa-dollar-sign"></i>
                    </button>

                    <ul className="currencychangermenu dropdown-menu dropdown-menu-end" aria-labelledby="timeperiodlist">
                        <li><option id="usd" className="usdopt dropdown-item" type="button">&#36; <p className="text">USD</p></option></li>
                        <li><option id="eur" className="europt dropdown-item" type="button">&#8364; <p className="text">EUR</p></option></li>
                        <li><option id="jpy" className="jpyopt dropdown-item" type="button">&#165; <p className="text">JPY</p></option></li>
                    </ul>
                </div>
                <MiniCart />
                <ProductPage />
                <Cart />
            </div>
        );
    }
}