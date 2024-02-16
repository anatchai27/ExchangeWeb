import React from "react";
import { ListMenu } from "./ListMenu";

export const SideMenu = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar sidebar-collapse" id="sidebar">
          <div className="sidebar__menu-group">
            <ul className="sidebar_nav">
              {ListMenu.map((obj, index) => (
                <li className="" key={index}>
                  <a href="terms.html">
                    <span className="nav-icon uil uil-question-circle" />
                    <span className="menu-text">
                      {obj.menuName.toUpperCase()}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
