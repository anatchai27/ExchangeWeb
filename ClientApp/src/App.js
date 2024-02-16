import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/Layout";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      // <Layout>
      //   <Routes>
      //     {AppRoutes.map((route, index) => {
      //       const { element, ...rest } = route;
      //       return <Route key={index} {...rest} element={element} />;
      //     })}
      //   </Routes>
      // </Layout>
      <>
        <div className="mobile-search">
          <form action="/" className="search-form">
            <img src="img/svg/search.svg" alt="search" className="svg" />
            <input
              className="form-control me-sm-2 box-shadow-none"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
        <div className="mobile-author-actions" />
        <header className="header-top">
          <nav className="navbar navbar-light">
            <div className="navbar-left">
              <div className="logo-area">
                <a className="navbar-brand" href="index.html">
                  <img className="dark" src="img/logo-dark.png" alt="logo" />
                  <img className="light" src="img/logo-white.png" alt="logo" />
                </a>
                <a href="#" className="sidebar-toggle">
                  <img
                    className="svg"
                    src="img/svg/align-center-alt.svg"
                    alt="img"
                  />
                </a>
              </div>
              <div className="top-menu"></div>
            </div>
            {/* ends: navbar-left */}
            <div className="navbar-right">
              <ul className="navbar-right__menu">
                <li className="nav-search">
                  <a href="#" className="search-toggle">
                    <i className="uil uil-search" />
                    <i className="uil uil-times" />
                  </a>
                  <form action="/" className="search-form-topMenu">
                    <span className="search-icon uil uil-search" />
                    <input
                      className="form-control me-sm-2 box-shadow-none"
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                  </form>
                </li>
                <li className="nav-message">
                  <div className="dropdown-custom">
                    <a
                      href="javascript:;"
                      className="nav-item-toggle icon-active"
                    >
                      <img
                        className="svg"
                        src="img/svg/message.svg"
                        alt="img"
                      />
                    </a>
                    <div className="dropdown-parent-wrapper">
                      <div className="dropdown-wrapper">
                        <h2 className="dropdown-wrapper__title">
                          Messages{" "}
                          <span className="badge-circle badge-success ms-1">
                            2
                          </span>
                        </h2>
                        <ul>
                          <li className="author-online has-new-message">
                            <div className="user-avater">
                              <img src="img/team-1.png" alt="" />
                            </div>
                            <div className="user-message">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  Web Design
                                </a>
                                <span className="time-posted">3 hrs ago</span>
                              </p>
                              <p>
                                <span
                                  className="desc text-truncate"
                                  style={{ maxWidth: 215 }}
                                >
                                  Lorem ipsum dolor amet cosec Lorem ipsum
                                </span>
                                <span className="msg-count badge-circle badge-success badge-sm">
                                  1
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="author-offline has-new-message">
                            <div className="user-avater">
                              <img src="img/team-1.png" alt="" />
                            </div>
                            <div className="user-message">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  Web Design
                                </a>
                                <span className="time-posted">3 hrs ago</span>
                              </p>
                              <p>
                                <span
                                  className="desc text-truncate"
                                  style={{ maxWidth: 215 }}
                                >
                                  Lorem ipsum dolor amet cosec Lorem ipsum
                                </span>
                                <span className="msg-count badge-circle badge-success badge-sm">
                                  1
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="author-online has-new-message">
                            <div className="user-avater">
                              <img src="img/team-1.png" alt="" />
                            </div>
                            <div className="user-message">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  Web Design
                                </a>
                                <span className="time-posted">3 hrs ago</span>
                              </p>
                              <p>
                                <span
                                  className="desc text-truncate"
                                  style={{ maxWidth: 215 }}
                                >
                                  Lorem ipsum dolor amet cosec Lorem ipsum
                                </span>
                                <span className="msg-count badge-circle badge-success badge-sm">
                                  1
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="author-offline">
                            <div className="user-avater">
                              <img src="img/team-1.png" alt="" />
                            </div>
                            <div className="user-message">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  Web Design
                                </a>
                                <span className="time-posted">3 hrs ago</span>
                              </p>
                              <p>
                                <span
                                  className="desc text-truncate"
                                  style={{ maxWidth: 215 }}
                                >
                                  Lorem ipsum dolor amet cosec Lorem ipsum
                                </span>
                              </p>
                            </div>
                          </li>
                          <li className="author-offline">
                            <div className="user-avater">
                              <img src="img/team-1.png" alt="" />
                            </div>
                            <div className="user-message">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  Web Design
                                </a>
                                <span className="time-posted">3 hrs ago</span>
                              </p>
                              <p>
                                <span
                                  className="desc text-truncate"
                                  style={{ maxWidth: 215 }}
                                >
                                  Lorem ipsum dolor amet cosec Lorem ipsum
                                </span>
                              </p>
                            </div>
                          </li>
                        </ul>
                        <a href="" className="dropdown-wrapper__more">
                          See All Message
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ends: nav-message */}
                <li className="nav-notification">
                  <div className="dropdown-custom">
                    <a
                      href="javascript:;"
                      className="nav-item-toggle icon-active"
                    >
                      <img className="svg" src="img/svg/alarm.svg" alt="img" />
                    </a>
                    <div className="dropdown-parent-wrapper">
                      <div className="dropdown-wrapper">
                        <h2 className="dropdown-wrapper__title">
                          Notifications{" "}
                          <span className="badge-circle badge-warning ms-1">
                            4
                          </span>
                        </h2>
                        <ul>
                          <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                            <div className="nav-notification__type nav-notification__type--primary">
                              <img
                                className="svg"
                                src="img/svg/inbox.svg"
                                alt="inbox"
                              />
                            </div>
                            <div className="nav-notification__details">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  James
                                </a>
                                <span>sent you a message</span>
                              </p>
                              <p>
                                <span className="time-posted">5 hours ago</span>
                              </p>
                            </div>
                          </li>
                          <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                            <div className="nav-notification__type nav-notification__type--secondary">
                              <img
                                className="svg"
                                src="img/svg/upload.svg"
                                alt="upload"
                              />
                            </div>
                            <div className="nav-notification__details">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  James
                                </a>
                                <span>sent you a message</span>
                              </p>
                              <p>
                                <span className="time-posted">5 hours ago</span>
                              </p>
                            </div>
                          </li>
                          <li className="nav-notification__single nav-notification__single--unread d-flex flex-wrap">
                            <div className="nav-notification__type nav-notification__type--success">
                              <img
                                className="svg"
                                src="img/svg/log-in.svg"
                                alt="log-in"
                              />
                            </div>
                            <div className="nav-notification__details">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  James
                                </a>
                                <span>sent you a message</span>
                              </p>
                              <p>
                                <span className="time-posted">5 hours ago</span>
                              </p>
                            </div>
                          </li>
                          <li className="nav-notification__single nav-notification__single d-flex flex-wrap">
                            <div className="nav-notification__type nav-notification__type--info">
                              <img
                                className="svg"
                                src="img/svg/at-sign.svg"
                                alt="at-sign"
                              />
                            </div>
                            <div className="nav-notification__details">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  James
                                </a>
                                <span>sent you a message</span>
                              </p>
                              <p>
                                <span className="time-posted">5 hours ago</span>
                              </p>
                            </div>
                          </li>
                          <li className="nav-notification__single nav-notification__single d-flex flex-wrap">
                            <div className="nav-notification__type nav-notification__type--danger">
                              <img
                                src="img/svg/heart.svg"
                                alt="heart"
                                className="svg"
                              />
                            </div>
                            <div className="nav-notification__details">
                              <p>
                                <a
                                  href=""
                                  className="subject stretched-link text-truncate"
                                  style={{ maxWidth: 180 }}
                                >
                                  James
                                </a>
                                <span>sent you a message</span>
                              </p>
                              <p>
                                <span className="time-posted">5 hours ago</span>
                              </p>
                            </div>
                          </li>
                        </ul>
                        <a href="" className="dropdown-wrapper__more">
                          See all incoming activity
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ends: .nav-notification */}
                <li className="nav-settings">
                  <div className="dropdown-custom">
                    <a href="javascript:;" className="nav-item-toggle">
                      <img src="img/setting.png" alt="setting" />
                    </a>
                    <div className="dropdown-parent-wrapper">
                      <div className="dropdown-wrapper dropdown-wrapper--large">
                        <ul className="list-settings">
                          <li className="d-flex">
                            <div className="me-3">
                              <img src="img/mail.png" alt="" />
                            </div>
                            <div className="flex-grow-1">
                              <h6>
                                <a href="" className="stretched-link">
                                  All Features
                                </a>
                              </h6>
                              <p>Introducing Increment subscriptions </p>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="me-3">
                              <img src="img/color-palette.png" alt="" />
                            </div>
                            <div className="flex-grow-1">
                              <h6>
                                <a href="" className="stretched-link">
                                  Themes
                                </a>
                              </h6>
                              <p>Third party themes that are compatible</p>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="me-3">
                              <img src="img/home.png" alt="" />
                            </div>
                            <div className="flex-grow-1">
                              <h6>
                                <a href="" className="stretched-link">
                                  Payments
                                </a>
                              </h6>
                              <p>We handle billions of dollars</p>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="me-3">
                              <img src="img/video-camera.png" alt="" />
                            </div>
                            <div className="flex-grow-1">
                              <h6>
                                <a href="" className="stretched-link">
                                  Design Mockups
                                </a>
                              </h6>
                              <p>Share planning visuals with clients</p>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="me-3">
                              <img src="img/document.png" alt="" />
                            </div>
                            <div className="flex-grow-1">
                              <h6>
                                <a href="" className="stretched-link">
                                  Content Planner
                                </a>
                              </h6>
                              <p>Centralize content gethering and editing</p>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="me-3">
                              <img src="img/microphone.png" alt="" />
                            </div>
                            <div className="flex-grow-1">
                              <h6>
                                <a href="" className="stretched-link">
                                  Diagram Maker
                                </a>
                              </h6>
                              <p>Plan user flows &amp; test scenarios</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ends: .nav-support */}
                <li className="nav-flag-select">
                  <div className="dropdown-custom">
                    <a href="javascript:;" className="nav-item-toggle">
                      <img
                        src="img/flag.png"
                        alt=""
                        className="rounded-circle"
                      />
                    </a>
                    <div className="dropdown-parent-wrapper">
                      <div className="dropdown-wrapper dropdown-wrapper--small">
                        <a href="">
                          <img src="img/eng.png" alt="" /> English
                        </a>
                        <a href="">
                          <img src="img/ger.png" alt="" /> German
                        </a>
                        <a href="">
                          <img src="img/spa.png" alt="" /> Spanish
                        </a>
                        <a href="">
                          <img src="img/tur.png" alt="" /> Turkish
                        </a>
                        <a href="">
                          <img src="img/iraq.png" alt="" /> Arabic
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                {/* ends: .nav-flag-select */}
                <li className="nav-author">
                  <div className="dropdown-custom">
                    <a href="javascript:;" className="nav-item-toggle">
                      <img
                        src="img/author-nav.jpg"
                        alt=""
                        className="rounded-circle"
                      />
                      <span className="nav-item__title">
                        Danial
                        <i className="las la-angle-down nav-item__arrow" />
                      </span>
                    </a>
                    <div className="dropdown-parent-wrapper">
                      <div className="dropdown-wrapper">
                        <div className="nav-author__info">
                          <div className="author-img">
                            <img
                              src="img/author-nav.jpg"
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                          <div>
                            <h6>Rabbi Islam Rony</h6>
                            <span>UI Designer</span>
                          </div>
                        </div>
                        <div className="nav-author__options">
                          <ul>
                            <li>
                              <a href="">
                                <i className="uil uil-user" /> Profile
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i className="uil uil-setting" />
                                Settings
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i className="uil uil-key-skeleton" /> Billing
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i className="uil uil-users-alt" /> Activity
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <i className="uil uil-bell" /> Help
                              </a>
                            </li>
                          </ul>
                          <a href="" className="nav-author__signout">
                            <i className="uil uil-sign-out-alt" /> Sign Out
                          </a>
                        </div>
                      </div>
                      {/* ends: .dropdown-wrapper */}
                    </div>
                  </div>
                </li>
                {/* ends: .nav-author */}
              </ul>
              {/* ends: .navbar-right__menu */}
              <div className="navbar-right__mobileAction d-md-none">
                <a href="#" className="btn-search">
                  <img
                    src="img/svg/search.svg"
                    alt="search"
                    className="svg feather-search"
                  />
                  <img src="img/svg/x.svg" alt="x" className="svg feather-x" />
                </a>
                <a href="#" className="btn-author-action">
                  <img
                    className="svg"
                    src="img/svg/more-vertical.svg"
                    alt="more-vertical"
                  />
                </a>
              </div>
            </div>
            {/* ends: .navbar-right */}
          </nav>
        </header>
        <main className="main-content">
          <div className="sidebar-wrapper">
            <div className="sidebar sidebar-collapse" id="sidebar">
              <div className="sidebar__menu-group">
                <ul className="sidebar_nav">
                  <li className="has-child open">
                    <a href="#" className="active">
                      <span className="nav-icon uil uil-create-dashboard" />
                      <span className="menu-text">Dashboard</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="index.html">Demo 1</a>
                      </li>
                      <li className="">
                        <a href="demo2.html">Demo 2</a>
                      </li>
                      <li className="active">
                        <a href="demo3.html">Demo 3</a>
                      </li>
                      <li className="">
                        <a href="demo4.html">Demo 4</a>
                      </li>
                      <li className="">
                        <a href="demo5.html">Demo 5</a>
                      </li>
                      <li className="">
                        <a href="demo6.html">Demo 6</a>
                      </li>
                      <li className="">
                        <a href="demo7.html">Demo 7</a>
                      </li>
                      <li className="">
                        <a href="demo8.html">Demo 8</a>
                      </li>
                      <li className="">
                        <a href="demo9.html">Demo 9</a>
                      </li>
                      <li className="">
                        <a href="demo10.html">Demo 10</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-window-section" />
                      <span className="menu-text">Layouts</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="l_sidebar">
                        <a href="#" data-layout="light">
                          Light Mode
                        </a>
                      </li>
                      <li className="l_sidebar">
                        <a href="#" data-layout="dark">
                          Dark Mode
                        </a>
                      </li>
                      <li className="l_navbar">
                        <a href="#" data-layout="top">
                          Top Menu
                        </a>
                      </li>
                      <li className="layout">
                        <a href="../rtl">RTL</a>
                      </li>
                      <li className="layout">
                        <a href="../ltr">LTR</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="changelog.html" className="">
                      <span className="nav-icon uil uil-arrow-growth" />
                      <span className="menu-text">Changelog</span>
                      <span className="badge badge-info-10 menuItem rounded-pill">
                        1.1.6
                      </span>
                    </a>
                  </li>
                  <li className="menu-title mt-30">
                    <span>Applications</span>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-envelope" />
                      <span className="menu-text">Email</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="inbox.html">Inbox</a>
                      </li>
                      <li className="">
                        <a href="read-email.html">Read Email</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="chat.html" className="">
                      <span className="nav-icon uil uil-chat" />
                      <span className="menu-text">Chat</span>
                      <span className="badge badge-success menuItem rounded-circle">
                        3
                      </span>
                    </a>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-bag" />
                      <span className="menu-text text-initial">eCommerce</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="products.html">Products</a>
                      </li>
                      <li className="">
                        <a href="product-details.html">Product Details</a>
                      </li>
                      <li className="">
                        <a href="add-product.html">Product Add</a>
                      </li>
                      <li className="">
                        <a href="add-product.html">Product Edit</a>
                      </li>
                      <li className="">
                        <a href="cart.html">Cart</a>
                      </li>
                      <li className="">
                        <a href="order.html">Orders</a>
                      </li>
                      <li className="">
                        <a href="sellers.html">Sellers</a>
                      </li>
                      <li className="">
                        <a href="invoice.html">Invoices</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-folder" />
                      <span className="menu-text">Project</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="projects.html">Project</a>
                      </li>
                      <li className="">
                        <a href="application-ui.html">Project Details</a>
                      </li>
                      <li className="">
                        <a href="create.html">Create Project</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="calendar.html" className="">
                      <span className="nav-icon uil uil-calendar-alt" />
                      <span className="menu-text">Calendar</span>
                    </a>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-users-alt" />
                      <span className="menu-text">Users</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="users-membar.html">Team</a>
                      </li>
                      <li className="">
                        <a href="users-card.html">Users Grid</a>
                      </li>
                      <li className="">
                        <a href="users-list.html">Users List</a>
                      </li>
                      <li className="">
                        <a href="users-card2.html">Users Grid style</a>
                      </li>
                      <li className="">
                        <a href="users-group.html">Users Group</a>
                      </li>
                      <li className="">
                        <a href="user-info.html">Add User</a>
                      </li>
                      <li className="">
                        <a href="users-datatable.html">Users Table</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-at" />
                      <span className="menu-text">Contact</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="contact-2.html">Contact Grid</a>
                      </li>
                      <li className="">
                        <a href="contact-1.html">Contact List</a>
                      </li>
                      <li className="">
                        <a href="contact-3.html">Contact Create</a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a href="note.html">
                      <span className="nav-icon uil uil-clipboard-notes" />
                      <span className="menu-text">Note</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="to-do.html">
                      <span className="nav-icon uil uil-check-square" />
                      <span className="menu-text">To-Do</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="kanban.html">
                      <span className="nav-icon uil uil-expand-arrows" />
                      <span className="menu-text">Kanban Board</span>
                    </a>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-exchange" />
                      <span className="menu-text">Import &amp; Export</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="import.html">Import</a>
                      </li>
                      <li className="">
                        <a href="export.html">Export</a>
                      </li>
                      <li className="">
                        <a href="export-selected.html">Export Selected</a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a href="file-manager.html">
                      <span className="nav-icon uil uil-file" />
                      <span className="menu-text">File Manager</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="task-app.html">
                      <span className="nav-icon uil uil-lightbulb-alt" />
                      <span className="menu-text">Task App</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="bookmarks.html">
                      <span className="nav-icon uil uil-bookmark" />
                      <span className="menu-text">Bookmarks</span>
                    </a>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-apps" />
                      <span className="menu-text">Social App</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="profile.html">My Profile</a>
                      </li>
                      <li className="">
                        <a href="profile-setting.html">Profile Settings</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-books" />
                      <span className="menu-text">Learning App</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="course.html">Course</a>
                      </li>
                      <li className="">
                        <a href="course-details.html">Course Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-user" />
                      <span className="menu-text">Support</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="support-ticket.html">Support Ticket</a>
                      </li>
                      <li className="">
                        <a href="support-details.html">Ticket Details</a>
                      </li>
                      <li className="">
                        <a href="new-ticket.html">New Ticket</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-search" />
                      <span className="menu-text">JobSearch</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="jobSearch.html">Grid view</a>
                      </li>
                      <li className="">
                        <a href="jobSearchList.html">List view</a>
                      </li>
                      <li className="">
                        <a href="jobDetails.html">Details</a>
                      </li>
                      <li className="">
                        <a href="job-apply.html">Apply</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-table" />
                      <span className="menu-text">Table</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="basic-table.html">Basic Table</a>
                      </li>
                      <li className="">
                        <a href="datatable.html">Data Table</a>
                      </li>
                      <li className="">
                        <a href="dynamic-table.html">Dynamic Table</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title mt-30">
                    <span>CRUD</span>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-database" />
                      <span className="menu-text">Firestore Crud</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="firestore.html">View All</a>
                      </li>
                      <li className="">
                        <a href="firestore-add.html">Add New</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title mt-30">
                    <span>Features</span>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-layers" />
                      <span className="menu-text">UI Elements</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="alert.html">Alert</a>
                      </li>
                      <li className="">
                        <a href="avatar.html">Avatar</a>
                      </li>
                      <li className="">
                        <a href="badge.html">Badge</a>
                      </li>
                      <li className="">
                        <a href="breadcrumbs.html">Breadcrumb</a>
                      </li>
                      <li className="">
                        <a href="buttons.html">Button</a>
                      </li>
                      <li className="">
                        <a href="cards.html">Cards</a>
                      </li>
                      <li className="">
                        <a href="carousel.html">Carousel</a>
                      </li>
                      <li className="">
                        <a href="checkbox.html">Checkbox</a>
                      </li>
                      <li className="">
                        <a href="collapse.html">Collapse</a>
                      </li>
                      <li className="">
                        <a href="comments.html">Comments</a>
                      </li>
                      <li className="">
                        <a href="date-picker.html">DatePicker</a>
                      </li>
                      <li className="">
                        <a href="drawer.html">Drawer</a>
                      </li>
                      <li className="">
                        <a href="drag-drop.html">Drag &amp; Drop</a>
                      </li>
                      <li className="">
                        <a href="dropdown.html">Dropdown</a>
                      </li>
                      <li className="">
                        <a href="empty.html">Empty</a>
                      </li>
                      <li className="">
                        <a href="grid.html">Grid</a>
                      </li>
                      <li className="">
                        <a href="input.html">Input</a>
                      </li>
                      <li className="">
                        <a href="list.html">List</a>
                      </li>
                      <li className="">
                        <a href="menu.html">Menu</a>
                      </li>
                      <li className="">
                        <a href="message.html">Message</a>
                      </li>
                      <li className="">
                        <a href="modal.html">Modals</a>
                      </li>
                      <li className="">
                        <a href="notifications.html">Notification</a>
                      </li>
                      <li className="">
                        <a href="page-header.html">Page Headers</a>
                      </li>
                      <li className="">
                        <a href="pagination.html">Paginations</a>
                      </li>
                      <li className="">
                        <a href="progressbar.html">Progress</a>
                      </li>
                      <li className="">
                        <a href="radio.html">Radio</a>
                      </li>
                      <li className="">
                        <a href="rate.html">Rate</a>
                      </li>
                      <li className="">
                        <a href="result.html">Result</a>
                      </li>
                      <li className="">
                        <a href="select.html">Select</a>
                      </li>
                      <li className="">
                        <a href="skeleton.html">Skeleton</a>
                      </li>
                      <li className="">
                        <a href="slider.html">Slider</a>
                      </li>
                      <li className="">
                        <a href="spin.html">Spinner</a>
                      </li>
                      <li className="">
                        <a href="statistics.html">Statistic</a>
                      </li>
                      <li className="">
                        <a href="steps.html">Steps</a>
                      </li>
                      <li className="">
                        <a href="switch.html">Switch</a>
                      </li>
                      <li className="">
                        <a href="tab.html">Tabs</a>
                      </li>
                      <li className="">
                        <a href="tag.html">Tags</a>
                      </li>
                      <li className="">
                        <a href="timeline.html">Timeline</a>
                      </li>
                      <li className="">
                        <a href="timeline-2.html">Timeline 2</a>
                      </li>
                      <li className="">
                        <a href="timeline-3.html">Timeline 3</a>
                      </li>
                      <li className="">
                        <a href="time-picker.html">Timepicker</a>
                      </li>
                      <li className="">
                        <a href="dashboard-base.html">Typography</a>
                      </li>
                      <li className="">
                        <a href="uploads.html">Upload</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-chart" />
                      <span className="menu-text">Charts</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="charts.html">Chart JS</a>
                      </li>
                      <li className="">
                        <a href="apexchart.html">
                          <span className="menu-text">Apexchart</span>
                          <span className="badge badge-success menuItem">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="">
                        <a href="google-chart.html">Google Charts</a>
                      </li>
                      <li className="">
                        <a href="peity-chart.html">Peity Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-keyhole-circle" />
                      <span className="menu-text">Froms</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="form.html">Basics</a>
                      </li>
                      <li className="">
                        <a href="form-layouts.html">Layouts</a>
                      </li>
                      <li className="">
                        <a href="form-elements.html">Elements</a>
                      </li>
                      <li className="">
                        <a href="form-components.html">Components</a>
                      </li>
                      <li className="">
                        <a href="form-validations.html">Validations</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-server" />
                      <span className="menu-text">Widget</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="widget-charts.html">Chart</a>
                      </li>
                      <li className="">
                        <a href="widget-mixed.html">Mixed</a>
                      </li>
                      <li className="">
                        <a href="widget-card.html">Card</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-square" />
                      <span className="menu-text">Wizards</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="checkout-wizard6.html">Wizard 1</a>
                      </li>
                      <li className="">
                        <a href="checkout-wizard7.html">Wizard 2</a>
                      </li>
                      <li className="">
                        <a href="checkout-wizard8.html">Wizard 3</a>
                      </li>
                      <li className="">
                        <a href="checkout-wizard9.html">Wizard 4</a>
                      </li>
                      <li className="">
                        <a href="checkout-wizard10.html">Wizard 5</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-grid" />
                      <span className="menu-text">Icons</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="unicon-icons.html">Unicon Icons</a>
                      </li>
                      <li className="">
                        <a href="fontawesome.html">Font Awesome</a>
                      </li>
                      <li className="">
                        <a href="lineawesome.html">Line Awesome</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="editors.html" className="">
                      <span className="nav-icon uil uil-edit" />
                      <span className="menu-text">Editors</span>
                    </a>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-map" />
                      <span className="menu-text">Maps</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="google-map.html">Google Maps</a>
                      </li>
                      <li className="">
                        <a href="leaflet-map.html">Leaflet Maps</a>
                      </li>
                      <li className="">
                        <a href="vector-map.html">Vector Maps</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-title mt-30">
                    <span>Pages</span>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-images" />
                      <span className="menu-text">Gallery</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="gallery.html">Gallery 1</a>
                      </li>
                      <li className="">
                        <a href="gallery2.html">Gallery 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="pricing.html" className="">
                      <span className="nav-icon uil uil-bill" />
                      <span className="menu-text">Pricing</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="banner.html">
                      <span className="nav-icon uil uil-thumbs-up" />
                      <span className="menu-text">Banners</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="testimonial.html">
                      <span className="nav-icon uil uil-book-open" />
                      <span className="menu-text">Testimonial</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="faq.html">
                      <span className="nav-icon uil uil-question-circle" />
                      <span className="menu-text">FAQ's</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="search.html">
                      <span className="nav-icon uil uil-credit-card-search" />
                      <span className="menu-text">Search Results</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="blank.html">
                      <span className="nav-icon uil uil-circle" />
                      <span className="menu-text">Blank Page</span>
                    </a>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-window" />
                      <span className="menu-text">Knowledge Base</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="knowledgebase.html">Knowledge Base</a>
                      </li>
                      <li className="">
                        <a href="knowledgebase-2.html">All Article</a>
                      </li>
                      <li className="">
                        <a href="knowledgebase-3.html">Single Article</a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a href="support.html">
                      <span className="nav-icon uil uil-headphones" />
                      <span className="menu-text">Support Center</span>
                    </a>
                  </li>
                  <li className="has-child">
                    <a href="#" className="">
                      <span className="nav-icon uil uil-images" />
                      <span className="menu-text">Blog</span>
                      <span className="toggle-icon" />
                    </a>
                    <ul>
                      <li className="">
                        <a href="blog.html">style 1</a>
                      </li>
                      <li className="">
                        <a href="blog2.html">Style 2</a>
                      </li>
                      <li className="">
                        <a href="blog3.html">Style 3</a>
                      </li>
                      <li className="">
                        <a href="blog-details.html">Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a href="terms.html">
                      <span className="nav-icon uil uil-question-circle" />
                      <span className="menu-text">Terms &amp; Conditions</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="maintenance.html">
                      <span className="nav-icon uil uil-airplay" />
                      <span className="menu-text">Maintenance</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="404.html">
                      <span className="nav-icon uil uil-exclamation-triangle" />
                      <span className="menu-text">404</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="coming-soon.html">
                      <span className="nav-icon uil uil-sync" />
                      <span className="menu-text">Coming Soon</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="login.html">
                      <span className="nav-icon uil uil-signin" />
                      <span className="menu-text">Log In</span>
                    </a>
                  </li>
                  <li className="">
                    <a href="sign-up.html">
                      <span className="nav-icon uil uil-sign-out-alt" />
                      <span className="menu-text">Sign Up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contents">
            <div className="demo3 mb-25 t-thead-bg">
              <div className="container-fluid">
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="breadcrumb-main">
                      <h4 className="text-capitalize breadcrumb-title">
                        Dashboard
                      </h4>
                      <div className="breadcrumb-action justify-content-center flex-wrap">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="#">
                                <i className="uil uil-estate" />
                                Dashboard
                              </a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Demo 3
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-7 mb-25">
                    <div className="card revenueChartTwo border-0">
                      <div className="card-header border-0">
                        <h6>Monthly Earning</h6>
                        <div className="card-extra">
                          <ul
                            className="card-tab-links nav-tabs nav"
                            role="tablist"
                          >
                            <li>
                              <a
                                className="active"
                                href="#tl_revenue-today"
                                data-bs-toggle="tab"
                                id="tl_revenue-today-tab"
                                role="tab"
                                aria-selected="false"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                href="#tl_revenue-week"
                                data-bs-toggle="tab"
                                id="tl_revenue-week-tab"
                                role="tab"
                                aria-selected="false"
                              >
                                Week
                              </a>
                            </li>
                            <li>
                              <a
                                href="#tl_revenue-month"
                                data-bs-toggle="tab"
                                id="tl_revenue-month-tab"
                                role="tab"
                                aria-selected="false"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* ends: .card-header */}
                      <div className="card-body pt-0 px-20">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade active show"
                            id="tl_revenue-today"
                            role="tabpanel"
                            aria-labelledby="tl_revenue-today-tab"
                          >
                            <div className="cashflow-display cashflow-display2 d-flex"></div>
                            {/* ends: .performance-stats */}
                            <div className="wp-chart">
                              <div className="parentContainer">
                                <div>
                                  <canvas id="earningRevenueToday" />
                                </div>
                              </div>
                            </div>
                            {/* ends: .performance-stats */}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tl_revenue-week"
                            role="tabpanel"
                            aria-labelledby="tl_revenue-week-tab"
                          >
                            <div className="cashflow-display cashflow-display2 d-flex"></div>
                            {/* ends: .performance-stats */}
                            <div className="wp-chart">
                              <div className="parentContainer">
                                <div>
                                  <canvas id="earningRevenueWeek" />
                                </div>
                              </div>
                            </div>
                            {/* ends: .performance-stats */}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tl_revenue-month"
                            role="tabpanel"
                            aria-labelledby="tl_revenue-month-tab"
                          >
                            <div className="cashflow-display cashflow-display2 d-flex"></div>
                            {/* ends: .performance-stats */}
                            <div className="wp-chart">
                              <div className="parentContainer">
                                <div>
                                  <canvas id="earningRevenueMonth" />
                                </div>
                              </div>
                            </div>
                            {/* ends: .performance-stats */}
                          </div>
                        </div>
                      </div>
                      {/* ends: .card-body */}
                    </div>
                  </div>
                  <div className="col-xxl-5 mb-25">
                    <div className="card border-0 cashflowChart2">
                      <div className="card-header border-0 px-25 pt-25 pb-15">
                        <div className="chartLine-po-details__overview-content w-100">
                          <div className=" chartLine-po-details__content d-flex flex-wrap justify-content-between">
                            <div className="chartLine-po-details__titlebar">
                              <h1>Profit Growth</h1>
                            </div>
                          </div>
                          <div className="chartLine-po-details__time">
                            <h5>$8,550</h5>
                            <span className="color-success">
                              <i className="fas fa-arrow-up" />
                              <strong>25.36%</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* ends: .card-header */}
                      <div className="card-body pt-0 ">
                        <div className="cashflow-chart">
                          <ul className="legend-static mb-30 mt-1 d-flex justify-content-center">
                            <li className="custom-label">
                              <span className="bg-primary" />
                              Order
                            </li>
                            <li className="custom-label">
                              <span className="bg-secondary" />
                              Sale
                            </li>
                          </ul>
                          <div className="parentContainer">
                            <div>
                              <canvas id="profitGrowthToday" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ends: .card-body */}
                    </div>
                  </div>
                  <div className="col-12 mb-25">
                    {/* Card 1  */}
                    <div className="ap-po-details ap-po-details--3 radius-xl d-flex py-25">
                      <div className="overview-content overview-content3 b-none bg-none mb-lg-0 mb-20">
                        <div className="d-flex">
                          <div className="revenue-chart-box__Icon me-20 bg-primary color-white rounded-circle">
                            <img
                              src="img/svg/profit2.svg"
                              alt="img"
                              className="svg"
                            />
                          </div>
                          <div className="d-flex align-items-start flex-wrap">
                            <div className="me-10">
                              <h1>$70K</h1>
                              <p className="mt-1 mb-0">Revenue</p>
                            </div>
                            <div className="ap-po-details bg-none">
                              <span className="color-success fs-14  d-inline-block mt-2">
                                <i className="las la-arrow-up" />
                                <strong>25.36%</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overview-content overview-content3 bg-none b-none mb-lg-0 mb-20">
                        <div className="d-flex">
                          <div className="revenue-chart-box__Icon me-20 bg-info color-white rounded-circle">
                            <i className="uil uil-arrow-growth" />
                          </div>
                          <div className="d-flex align-items-start flex-wrap">
                            <div className="me-10">
                              <h1>28.50%</h1>
                              <p className="mt-1 mb-0">Growth</p>
                            </div>
                            <div className="ap-po-details bg-none">
                              <span className="color-success fs-14 d-inline-block mt-2">
                                <i className="las la-arrow-up" />
                                <strong>25.36%</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overview-content overview-content3 bg-none b-none mb-lg-0 mb-20">
                        <div className="d-flex">
                          <div className="revenue-chart-box__Icon me-20 bg-success color-white rounded-circle">
                            <i className="uil uil-shopping-cart" />
                          </div>
                          <div className="d-flex align-items-start flex-wrap">
                            <div className="me-10">
                              <h1>8,750</h1>
                              <p className="mt-1 mb-0">Orders</p>
                            </div>
                            <div className="ap-po-details bg-none">
                              <span className="color-success fs-14 d-inline-block mt-2">
                                <i className="las la-arrow-up" />
                                <strong>25.36%</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overview-content overview-content3 bg-none b-none mb-lg-0 mb-20">
                        <div className="d-flex">
                          <div className="revenue-chart-box__Icon me-20 bg-warning color-white rounded-circle">
                            <i className="uil uil-usd-circle" />
                          </div>
                          <div className="d-flex align-items-start flex-wrap">
                            <div className="me-10">
                              <h1>$40K</h1>
                              <p className="mt-1 mb-0">Sales</p>
                            </div>
                            <div className="ap-po-details bg-none">
                              <span className="color-danger fs-14 d-inline-block mt-2">
                                <i className="las la-arrow-down" />
                                <strong>25.36%</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card 1 End  */}
                  </div>
                  <div className="col-xxl-4 mb-25">
                    <div className="device-chart-box">
                      <div className="card border-0">
                        <div className="card-header">
                          <h6>Sales Overview</h6>
                          <div className="card-extra">
                            <ul
                              className="card-tab-links nav-tabs nav"
                              role="tablist"
                            >
                              <li>
                                <a
                                  className="active"
                                  href="#se_device-today"
                                  data-bs-toggle="tab"
                                  id="se_device-today-tab"
                                  role="tab"
                                  aria-selected="true"
                                >
                                  Today
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#se_device-week"
                                  data-bs-toggle="tab"
                                  id="se_device-week-tab"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Week
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#se_device-month"
                                  data-bs-toggle="tab"
                                  id="se_device-month-tab"
                                  role="tab"
                                  aria-selected="false"
                                >
                                  Month
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* ends: .card-header */}
                        <div className="card-body pt-20 pb-30">
                          <div className="tab-content">
                            <div
                              className="tab-pane fade active show"
                              id="se_device-today"
                              role="tabpanel"
                              aria-labelledby="se_device-today-tab"
                            >
                              <div className="device-pieChart-wrap position-relative">
                                <div className="">
                                  <div className="salesDonutToday" />
                                </div>
                              </div>
                              <div className="session-wrap session-wrap--top--4">
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-primary" />
                                    30%
                                  </div>
                                </div>
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-info" />
                                    30%
                                  </div>
                                </div>
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-warning" />
                                    40%
                                  </div>
                                </div>
                              </div>
                              <div className="session-wrap session-wrap--2">
                                <div className="session-single">
                                  <strong>$7.9k</strong>
                                  <div className="chart-label">Revenue</div>
                                </div>
                                <div className="session-single">
                                  <strong>50</strong>
                                  <div className="chart-label">Sales</div>
                                </div>
                                <div className="session-single">
                                  <strong>15</strong>
                                  <div className="chart-label">Products</div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="se_device-week"
                              role="tabpanel"
                              aria-labelledby="se_device-week-tab"
                            >
                              <div className="device-pieChart-wrap position-relative">
                                <div className="">
                                  <div className="salesDonutWeek" />
                                </div>
                              </div>
                              <div className="session-wrap session-wrap--top--4">
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-primary" />
                                    30%
                                  </div>
                                </div>
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-secondary" />
                                    30%
                                  </div>
                                </div>
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-warning" />
                                    40%
                                  </div>
                                </div>
                              </div>
                              <div className="session-wrap session-wrap--2">
                                <div className="session-single">
                                  <strong>$7.9k</strong>
                                  <div className="chart-label">Revenue</div>
                                </div>
                                <div className="session-single">
                                  <strong>50</strong>
                                  <div className="chart-label">Sales</div>
                                </div>
                                <div className="session-single">
                                  <strong>15</strong>
                                  <div className="chart-label">Products</div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade "
                              id="se_device-month"
                              role="tabpanel"
                              aria-labelledby="se_device-month-tab"
                            >
                              <div className="device-pieChart-wrap position-relative">
                                <div className="">
                                  <div className="salesDonutMonth" />
                                </div>
                              </div>
                              <div className="session-wrap session-wrap--top--4">
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-primary" />
                                    30%
                                  </div>
                                </div>
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-secondary" />
                                    30%
                                  </div>
                                </div>
                                <div className="session-single">
                                  <div className="chart-label">
                                    <span className="label-dot dot-warning" />
                                    40%
                                  </div>
                                </div>
                              </div>
                              <div className="session-wrap session-wrap--2">
                                <div className="session-single">
                                  <strong>$7.9k</strong>
                                  <div className="chart-label">Revenue</div>
                                </div>
                                <div className="session-single">
                                  <strong>50</strong>
                                  <div className="chart-label">Sales</div>
                                </div>
                                <div className="session-single">
                                  <strong>15</strong>
                                  <div className="chart-label">Products</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ends: .session-wrap */}
                        </div>
                        {/* ends: .card-body */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 mb-25">
                    <div className="card border-0 px-25 pb-15 h-100">
                      <div className="card-header px-0 border-0">
                        <h6>Top Product</h6>
                        <div className="card-extra">
                          <ul
                            className="card-tab-links nav-tabs nav"
                            role="tablist"
                          >
                            <li>
                              <a
                                className="active"
                                href="#t_selling-today"
                                data-bs-toggle="tab"
                                id="t_selling-today-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                href="#t_selling-week"
                                data-bs-toggle="tab"
                                id="t_selling-week-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Week
                              </a>
                            </li>
                            <li>
                              <a
                                href="#t_selling-month"
                                data-bs-toggle="tab"
                                id="t_selling-month-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade active show"
                            id="t_selling-today"
                            role="tabpanel"
                            aria-labelledby="t_selling-today-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap__top-product">
                              <div className="table-responsive">
                                <table className="table table-borderless">
                                  <thead>
                                    <tr>
                                      <th>Prducts Name</th>
                                      <th>Deals</th>
                                      <th>Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/giorgio.png"
                                            alt="img"
                                          />
                                          <span>UV Protected Sunglass</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$38,536</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/headphone.png"
                                            alt="img"
                                          />
                                          <span>Black Headphone</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$20,573</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/shoes.png"
                                            alt="img"
                                          />
                                          <span>Nike Shoes</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$17,457</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/mac-pro.png"
                                            alt="img"
                                          />
                                          <span>15" Mackbook Pro</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$15,354</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/creativ-bag.png"
                                            alt="img"
                                          />
                                          <span>Women Bag</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$12,354</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/shoes.png"
                                            alt="img"
                                          />
                                          <span>Nike Shoes</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$17,457</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="t_selling-week"
                            role="tabpanel"
                            aria-labelledby="t_selling-week-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap__top-product">
                              <div className="table-responsive">
                                <table className="table table-borderless">
                                  <thead>
                                    <tr>
                                      <th>Prducts Name</th>
                                      <th>Deals</th>
                                      <th>Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/giorgio.png"
                                            alt="img"
                                          />
                                          <span>UV Protected Sunglass</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$38,536</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/headphone.png"
                                            alt="img"
                                          />
                                          <span>Black Headphone</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$20,573</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/shoes.png"
                                            alt="img"
                                          />
                                          <span>Nike Shoes</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$17,457</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/mac-pro.png"
                                            alt="img"
                                          />
                                          <span>15" Mackbook Pro</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$15,354</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/creativ-bag.png"
                                            alt="img"
                                          />
                                          <span>Women Bag</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$12,354</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/shoes.png"
                                            alt="img"
                                          />
                                          <span>Nike Shoes</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$17,457</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="t_selling-month"
                            role="tabpanel"
                            aria-labelledby="t_selling-month-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap__top-product">
                              <div className="table-responsive">
                                <table className="table table-borderless">
                                  <thead>
                                    <tr>
                                      <th>Prducts Name</th>
                                      <th>Deals</th>
                                      <th>Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/giorgio.png"
                                            alt="img"
                                          />
                                          <span>UV Protected Sunglass</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$38,536</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/headphone.png"
                                            alt="img"
                                          />
                                          <span>Black Headphone</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$20,573</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/shoes.png"
                                            alt="img"
                                          />
                                          <span>Nike Shoes</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$17,457</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/mac-pro.png"
                                            alt="img"
                                          />
                                          <span>15" Mackbook Pro</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$15,354</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/creativ-bag.png"
                                            alt="img"
                                          />
                                          <span>Women Bag</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$12,354</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <img
                                            className="radius-xs img-fluid order-bg-opacity-primary"
                                            src="img/shoes.png"
                                            alt="img"
                                          />
                                          <span>Nike Shoes</span>
                                        </div>
                                      </td>
                                      <td>1561</td>
                                      <td>$17,457</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 mb-25">
                    <div className="card border-0 pb-15 h-100">
                      <div className="card-header">
                        <h6>Latest Transactions</h6>
                        <div className="card-extra">
                          <ul
                            className="card-tab-links nav-tabs nav"
                            role="tablist"
                          >
                            <li>
                              <a
                                className="active"
                                href="#t_selling-today8"
                                data-bs-toggle="tab"
                                id="t_selling-today8-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                href="#t_selling-week8"
                                data-bs-toggle="tab"
                                id="t_selling-week8-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Week
                              </a>
                            </li>
                            <li>
                              <a
                                href="#t_selling-month8"
                                data-bs-toggle="tab"
                                id="t_selling-month8-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body py-0">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade active show"
                            id="t_selling-today8"
                            role="tabpanel"
                            aria-labelledby="t_selling-today-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap--source selling-table-wrap--transition ">
                              <div className="table-responsive">
                                <table className="table table--default table-borderless">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-primary-20 color-primary align-items-center">
                                            <i className="uil uil-university" />
                                          </div>
                                          <div>
                                            <h6>Bank Transfer</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-info-20 color-info align-items-center">
                                            <i className="uil uil-paypal" />
                                          </div>
                                          <div>
                                            <h6>Paypal</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-success-20 color-success align-items-center">
                                            <i className="uil uil-wallet" />
                                          </div>
                                          <div>
                                            <h6>Wallet</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-danger">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-warning-20 color-warning align-items-center">
                                            <i className="uil uil-credit-card" />
                                          </div>
                                          <div>
                                            <h6>Credit Card</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-secondary-20 color-secondary align-items-center">
                                            <i className="uil uil-money-bill" />
                                          </div>
                                          <div>
                                            <h6>Transfer</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="t_selling-week8"
                            role="tabpanel"
                            aria-labelledby="t_selling-week8-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap--source selling-table-wrap--transition ">
                              <div className="table-responsive">
                                <table className="table table--default table-borderless">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-primary-20 color-primary align-items-center">
                                            <i className="uil uil-university" />
                                          </div>
                                          <div>
                                            <h6>Bank Transfer</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-info-20 color-info align-items-center">
                                            <i className="uil uil-paypal" />
                                          </div>
                                          <div>
                                            <h6>Paypal</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-success-20 color-success align-items-center">
                                            <i className="uil uil-wallet" />
                                          </div>
                                          <div>
                                            <h6>Wallet</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-danger">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-warning-20 color-warning align-items-center">
                                            <i className="uil uil-credit-card" />
                                          </div>
                                          <div>
                                            <h6>Credit Card</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-secondary-20 color-secondary align-items-center">
                                            <i className="uil uil-money-bill" />
                                          </div>
                                          <div>
                                            <h6>Transfer</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="t_selling-month8"
                            role="tabpanel"
                            aria-labelledby="t_selling-month8-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap--source selling-table-wrap--transition ">
                              <div className="table-responsive">
                                <table className="table table--default table-borderless">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-primary-20 color-primary align-items-center">
                                            <i className="uil uil-university" />
                                          </div>
                                          <div>
                                            <h6>Bank Transfer</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-info-20 color-info align-items-center">
                                            <i className="uil uil-paypal" />
                                          </div>
                                          <div>
                                            <h6>Paypal</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-success-20 color-success align-items-center">
                                            <i className="uil uil-wallet" />
                                          </div>
                                          <div>
                                            <h6>Wallet</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-danger">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-warning-20 color-warning align-items-center">
                                            <i className="uil uil-credit-card" />
                                          </div>
                                          <div>
                                            <h6>Credit Card</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper bg-opacity-secondary-20 color-secondary align-items-center">
                                            <i className="uil uil-money-bill" />
                                          </div>
                                          <div>
                                            <h6>Transfer</h6>
                                            <span>10 mins ago</span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="color-success">
                                          +$573
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-25">
                    <div className="card border-0 px-25 pb-10 h-100">
                      <div className="card-header px-0 border-0">
                        <h6>Active Users</h6>
                        <div className="card-extra">
                          <ul
                            className="card-tab-links nav-tabs nav"
                            role="tablist"
                          >
                            <li>
                              <a
                                className="active"
                                href="#t_selling-today222"
                                data-bs-toggle="tab"
                                id="t_selling-today222-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Today
                              </a>
                            </li>
                            <li>
                              <a
                                href="#t_selling-week222"
                                data-bs-toggle="tab"
                                id="t_selling-week222-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Week
                              </a>
                            </li>
                            <li>
                              <a
                                href="#t_selling-month333"
                                data-bs-toggle="tab"
                                id="t_selling-month333-tab"
                                role="tab"
                                aria-selected="true"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade active show"
                            id="t_selling-today222"
                            role="tabpanel"
                            aria-labelledby="t_selling-today222-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap--source">
                              <div className="table-responsive">
                                <table className="table table--default table-borderless">
                                  <thead>
                                    <tr>
                                      <th>Seller name</th>
                                      <th>Company</th>
                                      <th>Product</th>
                                      <th>Revenue</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-1.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Robert Clinton</span>
                                        </div>
                                      </td>
                                      <td>Samsung</td>
                                      <td>Smart Phone</td>
                                      <td>$38,536</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-2.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Michael Johnson </span>
                                        </div>
                                      </td>
                                      <td>Asus</td>
                                      <td>Laptop</td>
                                      <td>$20,573</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-3.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Daniel White</span>
                                        </div>
                                      </td>
                                      <td>Google</td>
                                      <td>Watch</td>
                                      <td>$17,457</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-4.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Chris Barin </span>
                                        </div>
                                      </td>
                                      <td>Apple</td>
                                      <td>Computer</td>
                                      <td>$15,354</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-5.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Daniel Pink</span>
                                        </div>
                                      </td>
                                      <td>Panasonic</td>
                                      <td>Sunglass</td>
                                      <td>$12,354</td>
                                      <td>Done</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="t_selling-week222"
                            role="tabpanel"
                            aria-labelledby="t_selling-week222-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap--source">
                              <div className="table-responsive">
                                <table className="table table--default table-borderless">
                                  <thead>
                                    <tr>
                                      <th>Seller name</th>
                                      <th>Company</th>
                                      <th>Product</th>
                                      <th>Revenue</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-1.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Robert Clinton</span>
                                        </div>
                                      </td>
                                      <td>Samsung</td>
                                      <td>Smart Phone</td>
                                      <td>$38,536</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-2.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Michael Johnson </span>
                                        </div>
                                      </td>
                                      <td>Asus</td>
                                      <td>Laptop</td>
                                      <td>$20,573</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-3.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Daniel White</span>
                                        </div>
                                      </td>
                                      <td>Google</td>
                                      <td>Watch</td>
                                      <td>$17,457</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-4.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Chris Barin </span>
                                        </div>
                                      </td>
                                      <td>Apple</td>
                                      <td>Computer</td>
                                      <td>$15,354</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-5.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Daniel Pink</span>
                                        </div>
                                      </td>
                                      <td>Panasonic</td>
                                      <td>Sunglass</td>
                                      <td>$12,354</td>
                                      <td>Done</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="t_selling-month333"
                            role="tabpanel"
                            aria-labelledby="t_selling-month333-tab"
                          >
                            <div className="selling-table-wrap selling-table-wrap--source">
                              <div className="table-responsive">
                                <table className="table table--default table-borderless">
                                  <thead>
                                    <tr>
                                      <th>Seller name</th>
                                      <th>Company</th>
                                      <th>Product</th>
                                      <th>Revenue</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-1.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Robert Clinton</span>
                                        </div>
                                      </td>
                                      <td>Samsung</td>
                                      <td>Smart Phone</td>
                                      <td>$38,536</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-primary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-2.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Michael Johnson </span>
                                        </div>
                                      </td>
                                      <td>Asus</td>
                                      <td>Laptop</td>
                                      <td>$20,573</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-secondary align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-3.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Daniel White</span>
                                        </div>
                                      </td>
                                      <td>Google</td>
                                      <td>Watch</td>
                                      <td>$17,457</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-success align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-4.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Chris Barin </span>
                                        </div>
                                      </td>
                                      <td>Apple</td>
                                      <td>Computer</td>
                                      <td>$15,354</td>
                                      <td>Done</td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="selling-product-img d-flex align-items-center">
                                          <div className="selling-product-img-wrapper order-bg-opacity-info align-items-end">
                                            <img
                                              className=" img-fluid"
                                              src="img/author/robert-5.png"
                                              alt="img"
                                            />
                                          </div>
                                          <span>Daniel Pink</span>
                                        </div>
                                      </td>
                                      <td>Panasonic</td>
                                      <td>Sunglass</td>
                                      <td>$12,354</td>
                                      <td>Done</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ends: .row */}
              </div>
            </div>
          </div>
          <footer className="footer-wrapper">
            <div className="footer-wrapper__inside">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-copyright">
                      <p>
                        <span>© 2023</span>
                        <a href="#">Sovware</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-menu text-end">
                      <ul>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Team</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                    {/* ends: .Footer Menu */}
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
        <div id="overlayer">
          <div className="loader-overlay">
            <div className="dm-spin-dots spin-lg">
              <span className="spin-dot badge-dot dot-primary" />
              <span className="spin-dot badge-dot dot-primary" />
              <span className="spin-dot badge-dot dot-primary" />
              <span className="spin-dot badge-dot dot-primary" />
            </div>
          </div>
        </div>
        <div className="overlay-dark-sidebar" />
        <div className="customizer-overlay" />
        {/* inject:js*/}
        {/* endinject*/}
      </>
    );
  }
}
