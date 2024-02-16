import React from "react";
import { JqueryBase } from "../utils/JqueryBase";
import { SideMenu } from "../components/sideMenu/SideMenu";
import { HeaderTop } from "../components/headerTop/HeaderTop";

export const Layout = () => {
  return (
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
      <HeaderTop />
      <main className="main-content">
        <SideMenu />
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-danger">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-danger">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-danger">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
                                      <div className="color-success">+$573</div>
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
      <JqueryBase />
    </>
  );
};
