import React from "react";
import useApi from "../hooks/useApi";
import LoaderBar from "../assets/img/bars.svg";
import "../styles/navbar.css";

const Navbar = () => {
  const { data, error, loading } = useApi("/menu-items/all");

  const menuItems = data?.data;

  const fetchMenuItems = (menuItem) => {
    if (menuItem.children.length) {
      return (
        <li key={menuItem._id} className="dropdown">
          <a href="/">
            <span>{menuItem.title}</span>
            <i className="bi bi-chevron-down dropdown-indicator"></i>
          </a>
          <ul>
            {menuItem.children.map((dpMenuItem) => {
              if (dpMenuItem.children.length) {
                return (
                  <li key={dpMenuItem._id} className="dropdown">
                    <a href="/">
                      <span>{dpMenuItem.title}</span>
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      {dpMenuItem.children.map((dpDpMenuItem) => {
                        if (dpDpMenuItem.children.length) {
                          return (
                            <li key={dpDpMenuItem._id} className="dropdown">
                              <a href="/">
                                <span>{dpDpMenuItem.title}</span>
                                <i className="bi bi-chevron-down dropdown-indicator"></i>
                              </a>
                              <ul>
                                {dpDpMenuItem.children.map((dpDpDpMenuItem) => (
                                  <li key={dpDpDpMenuItem._id}>
                                    <a href="/">{dpDpDpMenuItem.title}</a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        } else {
                          return (
                            <li key={dpDpMenuItem._id}>
                              <a href="/">{dpDpMenuItem.title}</a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li key={dpMenuItem._id}>
                    <a href="/">{dpMenuItem.title}</a>
                  </li>
                );
              }
            })}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={menuItem._id}>
          <a href="/">{menuItem.title}</a>
        </li>
      );
    }
  };

  return (
    <nav id="navbar" className="navbar">
      {loading && (
        <img src={LoaderBar} alt="loading menu..." style={{ height: "4vh" }} />
      )}
      {!loading && error && (
        <div className="alert alert-danger">Menu failed to load!</div>
      )}
      {!loading && data && (
        <ul>{menuItems.map((mItem) => fetchMenuItems(mItem))}</ul>
      )}
    </nav>
  );
};

export default Navbar;
