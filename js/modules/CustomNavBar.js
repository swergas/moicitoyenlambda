const React = window.React;
const e = React.createElement;

const NavLink = ({label, href, isSelected = false, ...props}) => {
  let cssClasses = "menu__item nav-link";
  if (isSelected){
    cssClasses += " active";
  }
  return e(
    'a',
    {
      className: cssClasses,
      'aria-current': "page",
      href: href,
      ...props
    },
    label
  );
};

const NavItemDropDown = ({label, href="#", isSelected=false, children}) => {
  let cssClasses = "submenu__label nav-link dropdown-toggle";
  if (isSelected){
    cssClasses += " active";
  }
  let renderedChildren = null;
  if (children){
    renderedChildren = children.map(child => {
      return e(
        'li',
        null,
        child
      )
    });
  }
  return e(
    'div',
    {
      className: 'menu__item submenu nav-item dropdown'
    },
    e(
      'a',
      {
        className: cssClasses,
        "data-bs-toggle": "dropdown",
        href: href,
        role: "button",
        "aria-expanded": "false"
      },
      label,
    ),
    e(
      'ul',
      {
        className: "dropdown-menu"
      },
      ...renderedChildren
    )
  );
};

// This is not a functional component, but a utility fonction which maps a Data Transfer Object (representing navigation menu elements and optional sub-menu elements) to an array of rendered components.
const renderNavBarElements = (elementsStructure) => {
  return elementsStructure.map(navBarElement => {
    let isSelected = false;
    if (navBarElement.hasOwnProperty('href') && navBarElement.href != "#"){
      if(window.location.href.includes(navBarElement.href)){
        isSelected = true;
      }
    }
    if (navBarElement.hasOwnProperty('children') && navBarElement.children.length > 0){
      const {children, ...mainProps} = navBarElement;
      const renderedChildren = children.map(child => {
        if (child.hasOwnProperty('type') && child.type == 'divider'){
          return e(
            'hr',
            {
              className: "dropdown-divider",
            }
          );
        }
        return e(
          'a',
          {
            className: "submenu__item dropdown-item",
            href: child.href,
          },
          child.label
        );
      });
      if ( navBarElement.hasOwnProperty('href')){
        mainProps.label = e(
          'span',
          {
            onClick: () => {location.href = navBarElement.href;}
          },
          mainProps.label
        );
      }
      return e(
        NavItemDropDown,
        {
          ...mainProps,
          isSelected: isSelected
        },
        ...renderedChildren
      );
    }
    else {
      return e(
        NavLink,
        {
          ...navBarElement,
          isSelected: isSelected
        }
      );
    }
  });
};

const CustomNavBar = ({elements}) => {
  const menuItems = renderNavBarElements(elements);
  return e(
    'div',
    {
      className: "custom-nav-bar menu"
    },
    e(
      'nav',
      {
        className: "navbar navbar-expand-lg navbar-dark"
      },
      e(
        'div',
        {
          className: "container-fluid"
        },
        e(
          'button',
          {
            className: "navbar-toggler",
            type: "button",
            'data-bs-toggle': "collapse",
            'data-bs-target': '#navbarSupportedContent',
            'aria-controls': "navbarSupportedContent",
            'aria-expanded': 'false',
            'aria-label': 'Toggle navigation'
          },
          e(
            'span',
            {
              className: "navbar-toggler-icon"
            }
          )
        ),
        e(
          "div",
          {
            className: "collapse navbar-collapse",
            id: "navbarSupportedContent"
          },
          e(
            'div',
            {
              className: "d-flex justify-content-evenly flex-column flex-lg-row flex-grow-1"
            },
            ...menuItems
          )
        )
      )
    )
  );
};


export {CustomNavBar, renderNavBarElements, NavItemDropDown, NavLink}
export default CustomNavBar;
