Import React from "react";
Import './header.css';
Import smallRight from '../assets/icons/small-right.png';
Import smallLeft from '../assets/icons/small-left.png'
Import search from '../assets/icons/search.png'


const Header = () => {
    return(
        <nav className="header__navigation">
        <div className="main-container">    
            <div className="navigation">
                <button className="arrow-left">
                    <img src= "{smallLeft}" alt="" />
                </button>
                <button className="arrow-right">
                     <img src="{smallRight}" alt="" />
                </button>
                </div>

                <div className="header__search">
                    <img src={search} alt="" />
                    <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?"/>
                </div>
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </div>
        </nav>
    )
};

export default Header;