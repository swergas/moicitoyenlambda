import {navBarElements} from './initialData.js';
import {CustomNavBar} from './CustomNavBar.js';

const React = window.React;
const ReactDOM = window.ReactDOM;
const e = React.createElement;
const Button = ReactBootstrap.Button;

const Logo = () => {
  return e(
    'div',
    {
      className: "logo"
    },
    e(
      'a',
      {
        href: "/"
      },
      e(
        'img',
        {
          src: "img/mcl_logo.png",
          width: "354px",
          height: "82px",
          alt: "Logo de Moi Citoyen Lambda"
        }
      )
    )
  );
};

const Header = () => {
  return e(
    React.StrictMode,
    null,
    e(
      'header',
      {
        className: "header noselect"
      },
      e(Logo),
      e(
        CustomNavBar,
        {
          elements: navBarElements
        }
      ),
      e(
        'div', {className: "line--yellow"}
      ),
    )
  );
};

const Footer = () => {
  return e(
    Button,
    null,
    'test'
  );
};


function main(){
  const headerContainer = document.querySelector("#header");
  const footerContainer = document.querySelector("#footer");
  if(!headerContainer){
    document.getElementsByTagName("body")[0].innerHTML = "Error: Could not find header container HTML element.";
  }
  if(!footerContainer){
    document.getElementsByTagName("body")[0].innerHTML = "Error: Could not find footer container HTML element.";
  }
  headerContainer.innerHTML = "Chargement...";
  footerContainer.innerHTML = "Chargement...";
  ReactDOM.render(e(Header), headerContainer);
  ReactDOM.render(e(Footer), footerContainer);
}

main();
