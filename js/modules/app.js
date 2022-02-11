import {navBarElements} from './initialData.js';
import {Header} from './Header.js';

const React = window.React;
const ReactDOM = window.ReactDOM;
const e = React.createElement;
const Button = ReactBootstrap.Button;

const Footer = () => {
  /*
  return e(
    Button,
    null,
    'test'
  );
  */
  return e(
    "div",
    {
      className: "footer mt-5"
    },
    e(
      "div",
      {
        className: "text-center"
      },
      e(
        "h3",
        null,
        "Rejoignez-nous !"
      ),
      e(
        "a",
        {
          href: "https://www.facebook.com/MoiCitoyenLambda"
        },
        e(
          "img",
          {
            src: "img/logo_facebook.png",
            width: "100px",
            alt: "Logo Facebook"
          }
        )
      ),
      e(
        "a",
        {
          href: "https://www.youtube.com/channel/UCQvc3gFmN9PKcogaCv3sobw"
        },
        e(
          "img",
          {
            src: "img/logo_youtube.png",
            width: "100px",
            alt: "Logo Youtube"
          }
        )
      ),
      e(
        "a",
        {
          href: "mailto:contact@moicitoyenlambda.fr"
        },
        e(
          "img",
          {
            src: "img/logo_message.png",
            width: "100px",
            alt: "Logo Message"
          }
        )
      ),
      e(
        "a",
        {
          href: "https://discord.gg/vpZzdzZ"
        },
        e(
          "img",
          {
            src: "img/logo_discord.png",
            width: "100px",
            alt: "Logo Discord"
          }
        )
      ),
      e(
        "a",
        {
          href: "https://twitter.com/moi_citoyen"
        },
        e(
          "img",
          {
            src: "img/logo_twitter.png",
            width: "100px",
            alt: "Logo Twitter"
          }
        )
      ),
      e(
        "p",
        null,
        "contact@moicitoyenlambda.fr"
      )
    )
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
