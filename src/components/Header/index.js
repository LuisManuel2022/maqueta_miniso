import React from "react";
import "./header.css";
import Log from "./assets/logo.jpg";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  return (
    <div className="container-header">
      <div className="welcome">
        <div className="container-welcome">
          <img className="logo-welcome" src={Log} alt="bienvenido" />
        </div>
      </div>
      <div className="search">
        <div className="content-search">
          <input
            className="bar-search"
            type="text"
            placeholder="¿Qué estás buscando hoy?"
          />
          <div className="icon-search">
            <div className="content-icon">
              <FiSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="minlove">
        <div className="content-minlove">
          <img
            className="logo_love"
            src="https://minisomx.vtexassets.com/arquivos/miniso-love1.png"
            alt="xx"
          />
        </div>
      </div>
      <div className="space-blank"></div>
      <div className="container-minisolover">
        <div className="minisolover">
          <div className="button-miniso">
            <div className="content-text">
              <span>MinisoLover</span>
            </div>
          </div>
          <img className="cat" src="https://minisomx.vtexassets.com/arquivos/profile-icon@2x.png" alt="cat"/>          
        </div>
      </div>
      <div className="heart">
        <div className="content-heart">
          <img
            className="logo_heart"
            src="https://minisomx.vtexassets.com/assets/vtex/assets-builder/minisomx.store-theme/0.17.8/wishlist-icon-2___84fc304ad3ba9d6be1432c2c36c85f07.svg"
            alt="heart"
          />
        </div>
      </div>
      <div className="symbol">
        <div className="content-symbol">
          <img
            className="logo_symbol"
            src="https://minisomx.vteximg.com.br/arquivos/bag-empty-icon@2x.png"
            alt="symb"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
