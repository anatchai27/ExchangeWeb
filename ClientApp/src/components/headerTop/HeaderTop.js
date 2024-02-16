import React from "react";

export const HeaderTop = () => {
  return (
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
                <a href="javascript:;" className="nav-item-toggle icon-active">
                  <img className="svg" src="img/svg/message.svg" alt="img" />
                </a>
                <div className="dropdown-parent-wrapper">
                  <div className="dropdown-wrapper">
                    <h2 className="dropdown-wrapper__title">
                      Messages{" "}
                      <span className="badge-circle badge-success ms-1">2</span>
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
                <a href="javascript:;" className="nav-item-toggle icon-active">
                  <img className="svg" src="img/svg/alarm.svg" alt="img" />
                </a>
                <div className="dropdown-parent-wrapper">
                  <div className="dropdown-wrapper">
                    <h2 className="dropdown-wrapper__title">
                      Notifications{" "}
                      <span className="badge-circle badge-warning ms-1">4</span>
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
                  <img src="img/flag.png" alt="" className="rounded-circle" />
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
  );
};
