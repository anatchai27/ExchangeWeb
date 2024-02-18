import React from "react";

export const PageHeder = ({ pageHeaderName, BtnName, showButtonHeader }) => {
  return (
    <>
      <div className="project-progree-breadcrumb">
        <div className="breadcrumb-main user-member justify-content-sm-between ">
          <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
            <div className="d-flex align-items-center user-member__title justify-content-center me-sm-25">
              <h4 className="text-capitalize fw-500 breadcrumb-title">
                {pageHeaderName}
              </h4>
              <span className="sub-title ms-sm-25 ps-sm-25"></span>
            </div>
          </div>
          <div className="action-btn">
            {showButtonHeader ? (
              <a
                href="#"
                className="btn px-15 btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#new-member"
              >
                <i className="las la-plus fs-16" />
                {BtnName}
              </a>
            ) : (
              <></>
            )}

            {/* Modal */}
            <div
              className="modal fade new-member "
              id="new-member"
              role="dialog"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content  radius-xl">
                  <div className="modal-header">
                    <h6 className="modal-title fw-500" id="staticBackdropLabel">
                      Create project
                    </h6>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <img src="img/svg/x.svg" alt="x" className="svg" />
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="new-member-modal">
                      <form>
                        <div className="form-group mb-20">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Duran Clayton"
                          />
                        </div>
                        <div className="form-group mb-20">
                          <div className="category-member">
                            <select
                              className="js-example-basic-single js-states form-control select2-hidden-accessible"
                              id="category-member"
                              data-select2-id="category-member"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="JAN" data-select2-id={5}>
                                1
                              </option>
                              <option value="FBR">2</option>
                            </select>
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              data-select2-id={4}
                              style={{ width: "auto" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-disabled="false"
                                  aria-labelledby="select2-category-member-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-category-member-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title={1}
                                  >
                                    <span
                                      className="select2-selection__clear"
                                      title="Remove all items"
                                      data-select2-id={6}
                                    >
                                      ×
                                    </span>
                                    1
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="form-group mb-20">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Project description"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group textarea-group">
                          <label className="mb-15">status</label>
                          <div className="d-flex">
                            <div className="project-task-list__left d-flex align-items-center">
                              <div className="checkbox-group d-flex me-50 pe-10">
                                <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                  <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="check-grp-1"
                                    defaultChecked=""
                                  />
                                  <label
                                    htmlFor="check-grp-1"
                                    className="fs-14 color-light strikethrough"
                                  >
                                    status
                                  </label>
                                </div>
                              </div>
                              <div className="checkbox-group d-flex me-50 pe-10">
                                <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                  <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="check-grp-2"
                                  />
                                  <label
                                    htmlFor="check-grp-2"
                                    className="fs-14 color-light strikethrough"
                                  >
                                    Deactivated
                                  </label>
                                </div>
                              </div>
                              <div className="checkbox-group d-flex">
                                <div className="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                                  <input
                                    className="checkbox"
                                    type="checkbox"
                                    id="check-grp-3"
                                  />
                                  <label
                                    htmlFor="check-grp-3"
                                    className="fs-14 color-light strikethrough"
                                  >
                                    bloked
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-25">
                          <div className="form-group mb-10">
                            <label htmlFor="name47">Role Management</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name47"
                              placeholder="Search members"
                            />
                          </div>
                          <ul className="d-flex flex-wrap mb-20 user-group-people__parent">
                            <li>
                              <a href="#">
                                <img
                                  className="rounded-circle wh-34"
                                  src="img/tm1.png"
                                  alt="author"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="rounded-circle wh-34"
                                  src="img/tm2.png"
                                  alt="author"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="rounded-circle wh-34"
                                  src="img/tm3.png"
                                  alt="author"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="rounded-circle wh-34"
                                  src="img/tm4.png"
                                  alt="author"
                                />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  className="rounded-circle wh-34"
                                  src="img/tm5.png"
                                  alt="author"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex new-member-calendar">
                          <div className="form-group w-100 me-sm-15 form-group-calender">
                            <label htmlFor="datepicker">start Date</label>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control hasDatepicker"
                                id="datepicker"
                                placeholder="mm/dd/yyyy"
                              />
                              <a href="#">
                                <img
                                  className="svg"
                                  src="img/svg/chevron-right.svg"
                                  alt="chevron-right.svg"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="form-group w-100 form-group-calender">
                            <label htmlFor="datepicker2">End Date</label>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control hasDatepicker"
                                id="datepicker2"
                                placeholder="mm/dd/yyyy"
                              />
                              <a href="#">
                                <img
                                  className="svg"
                                  src="img/svg/chevron-right.svg"
                                  alt="chevron-right.svg"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="button-group d-flex pt-25">
                          <button className="btn btn-primary btn-default btn-squared text-capitalize">
                            add role
                          </button>
                          <button
                            type="button"
                            className="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light"
                            data-bs-dismiss="modal"
                          >
                            cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal */}
          </div>
        </div>
      </div>
    </>
  );
};
PageHeder.defaultProps = {
  pageHeaderName: "",
  BtnName: "",
  showButtonHeader: false,
};
