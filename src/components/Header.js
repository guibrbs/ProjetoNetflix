import React from "react";
import './Header.css';

export default ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className={"header--logo"}>
                <a href={"/"}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"} alt={"Netflix"}/>
                </a>
            </div>
            <div className={"header--inicio"}>
                <a href={"/"}>Início</a>
            </div>
            <div className={"header--series"}>
                <a href={"/"}>Séries</a>
            </div>
            <div className={"header--filmes"}>
                <a href={"/"}>Filmes</a>
            </div>
            <div className={"header--bombando"}>
                <a href={"/"}>Bombando</a>
            </div>
            <div className={"header--mylist"}>
                <a href={"/"}>Minha lista</a>
            </div>
            <div className={"header--user"}>
                <a href={"/"}>
                    <img src={"https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"} alt={"Usuario"}/>
                </a>
            </div>
        </header>
    )
}