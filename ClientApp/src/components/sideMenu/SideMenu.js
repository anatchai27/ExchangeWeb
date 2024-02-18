import React, { useMemo } from "react";
import { ListMenu } from "./ListMenu";
import { NavLink, useLocation } from "react-router-dom";

export const SideMenu = () => {
  const location = useLocation();

  const CustomNavLink = ({ to, children }) => {
    const isActive =
      location.pathname === `/${to !== "/" ? to : ""}` ? "active" : "";
    return (
      <li className={isActive}>
        <NavLink to={to}>{children}</NavLink>
      </li>
    );
  };

  const CustomChildNavLink = ({ name, listChild }) => {
    const location = useLocation();
    return (
      <li className="has-child">
        <a href={void 0} className="">
          <span className="nav-icon uil uil-at" />
          <span className="menu-text">{name.toUpperCase()}</span>
          <span className="toggle-icon" />
        </a>
        <ul style={{ top: "255.797px", left: 220 }}>
          {listChild.map((childObj, i) => (
            <li
              className={
                location.pathname.toUpperCase() ===
                `/${childObj.path.toUpperCase()}`
                  ? "active"
                  : ""
              }
              key={i}
            >
              <NavLink to={childObj.path}>
                {childObj.menuName.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar sidebar-collapse" id="sidebar">
          <div className="sidebar__menu-group">
            <ul className="sidebar_nav">
              {ListMenu.map((obj, index) => (
                <>
                  {obj.child.length > 0 ? (
                    <>
                      <CustomChildNavLink
                        name={obj.menuName}
                        listChild={obj.child}
                      />
                      {/* <li className="has-child">
                        <a href={void 0} className="">
                          <span className="nav-icon uil uil-at" />
                          <span className="menu-text">
                            {obj.menuName.toUpperCase()}
                          </span>
                          <span className="toggle-icon" />
                        </a>
                        <ul style={{ top: "255.797px", left: 220 }}>
                          {obj.child.map((childObj, i) => (
                            <li className={""} key={i}>
                              <NavLink to={childObj.path}>
                                {childObj.menuName.toUpperCase()}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li> */}
                    </>
                  ) : (
                    <CustomNavLink to={obj.path} key={index}>
                      <span className="nav-icon uil uil-question-circle" />
                      <span className="menu-text">
                        {obj.menuName.toUpperCase()}
                      </span>
                    </CustomNavLink>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
