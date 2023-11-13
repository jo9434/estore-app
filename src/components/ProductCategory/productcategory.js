import React, { Component } from 'react';
import $ from 'jquery';
import './productcategory.css';

export default class ProductCategory extends Component {
    componentDidMount = () => {
        $("#prodCategory1").on("click",function(){
            $("#prodCategory1").css("color","rgb(161, 255, 68)");
            $("#prodCategory1").css("text-underline-offset","1.2rem");
            $("#prodCategory1").css("text-decoration","underline rgb(161, 255, 68) 0.2rem");
            $("#prodCategory2").css("color","black");
            $("#prodCategory2").css("text-underline-offset","0");
            $("#prodCategory2").css("text-decoration","none");
            $("#prodCategory3").css("color","black");
            $("#prodCategory3").css("text-underline-offset","0");
            $("#prodCategory3").css("text-decoration","none");
            $("#prodCategory4").css("color","black");
            $("#prodCategory4").css("text-underline-offset","0");
            $("#prodCategory4").css("text-decoration","none");
        })
        $("#prodCategory2").on("click",function(){
            $("#prodCategory1").css("color","black");
            $("#prodCategory1").css("text-underline-offset","0");
            $("#prodCategory1").css("text-decoration","none");
            $("#prodCategory2").css("color","rgb(161, 255, 68)");
            $("#prodCategory2").css("text-underline-offset","1.2rem");
            $("#prodCategory2").css("text-decoration","underline rgb(161, 255, 68) 0.2rem");
            $("#prodCategory3").css("color","black");
            $("#prodCategory3").css("text-underline-offset","0");
            $("#prodCategory3").css("text-decoration","none");
            $("#prodCategory4").css("color","black");
            $("#prodCategory4").css("text-underline-offset","0");
            $("#prodCategory4").css("text-decoration","none");
        })
        $("#prodCategory3").on("click",function(){
            $("#prodCategory1").css("color","black");
            $("#prodCategory1").css("text-underline-offset","0");
            $("#prodCategory1").css("text-decoration","none");
            $("#prodCategory2").css("color","black");
            $("#prodCategory2").css("text-underline-offset","0");
            $("#prodCategory2").css("text-decoration","none");
            $("#prodCategory3").css("color","rgb(161, 255, 68)");
            $("#prodCategory3").css("text-underline-offset","1.2rem");
            $("#prodCategory3").css("text-decoration","underline rgb(161, 255, 68) 0.2rem");
            $("#prodCategory4").css("color","black");
            $("#prodCategory4").css("text-underline-offset","0");
            $("#prodCategory4").css("text-decoration","none");
        })
        $("#prodCategory4").on("click",function(){
            $("#prodCategory1").css("color","black");
            $("#prodCategory1").css("text-underline-offset","0");
            $("#prodCategory1").css("text-decoration","none");
            $("#prodCategory2").css("color","black");
            $("#prodCategory2").css("text-underline-offset","0");
            $("#prodCategory2").css("text-decoration","none");
            $("#prodCategory3").css("color","black");
            $("#prodCategory3").css("text-underline-offset","0");
            $("#prodCategory3").css("text-decoration","none");
            $("#prodCategory4").css("color","rgb(161, 255, 68)");
            $("#prodCategory4").css("text-underline-offset","1.2rem");
            $("#prodCategory4").css("text-decoration","underline rgb(161, 255, 68) 0.2rem");
        })
    }

    render() {
        return (
            <div className='prodCategory'>
                <button id='prodCategory1' className='default'>home</button>
                <button id="prodCategory2">women</button>
                <button id="prodCategory3">men</button>
                <button id="prodCategory4">kids</button>
            </div>
        );
    };
}