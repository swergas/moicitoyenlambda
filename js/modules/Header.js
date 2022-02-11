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

const Header = ({navBarElements}) => {
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

export {Header, Logo};
export default Header;
