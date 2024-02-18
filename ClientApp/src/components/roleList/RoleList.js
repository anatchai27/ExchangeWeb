import React from "react";

export const RoleList = ({ roleName, description }) => {
  return (
    <div className="col-xl-4 mb-25 col-md-6">
      <div className="user-group radius-xl media-ui media-ui--early pt-30 pb-25">
        <div className="border-bottom px-30">
          <div className="media user-group-media d-flex justify-content-between">
            <div className="media-body d-flex align-items-center flex-wrap text-capitalize my-sm-0 my-n2">
              <a href="application-ui.html">
                <h6 className="mt-0  fw-500 user-group media-ui__title bg-transparent">
                  {roleName}
                </h6>
              </a>
              {/* <span className="my-sm-0 my-2 media-badge text-uppercase color-white bg-primary">
                early
              </span> */}
            </div>
            <div className="mt-n15">
              <div className="dropdown dropleft">
                <button
                  className="btn-link border-0 bg-transparent p-0"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="img/svg/more-horizontal.svg"
                    alt="more-horizontal"
                    className="svg"
                  />
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    view
                  </a>
                  <a className="dropdown-item" href="#">
                    edit
                  </a>
                  <a className="dropdown-item" href="#">
                    leave
                  </a>
                  <a className="dropdown-item" href="#">
                    delete
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="user-group-people mt-15 text-capitalize">
            <p>{description}</p>
            <div className="user-group-project">
              {/* <div className="d-flex align-items-center user-group-progress-top">
                <div className="media-ui__start">
                  <span className="color-light fs-12">Start Date</span>
                  <p className="fs-14 fw-500 color-dark mb-0">26 Dec 2019</p>
                </div>
                <div className="media-ui__end">
                  <span className="color-light fs-12">end date</span>
                  <p className="fs-16 fw-500 color-success mb-0">18 Mar 2020</p>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="user-group-progress-bar">
            <div className="progress-wrap d-flex align-items-center mb-0">
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "83%" }}
                  aria-valuenow={83}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <span className="progress-percentage">83%</span>
            </div>
            <p className="color-light fs-12 mb-20">12 / 15 tasks completed</p>
          </div> */}
        </div>
        <div className="mt-20 px-30">
          <p className="fs-13 color-light mb-10">User in role</p>
          <ul className="d-flex flex-wrap user-group-people__parent">
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm1.png"
                  alt="author"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm2.png"
                  alt="author"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm3.png"
                  alt="author"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm4.png"
                  alt="author"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm5.png"
                  alt="author"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm6.png"
                  alt="author"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm1.png"
                  alt="author"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="rounded-circle wh-34 bg-opacity-secondary"
                  src="img/tm2.png"
                  alt="author"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

RoleList.defaultProps = {
  roleName: "",
  description: "",
};
