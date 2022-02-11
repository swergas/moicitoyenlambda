import {navBarElements} from './initialData.js';
import {Header} from './Header.js';

const React = window.React;
const ReactDOM = window.ReactDOM;
const e = React.createElement;
const Button = ReactBootstrap.Button;

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
  ReactDOM.render(e(Header, {navBarElements: navBarElements}), headerContainer);
  ReactDOM.render(e(Footer), footerContainer);
}

main();
