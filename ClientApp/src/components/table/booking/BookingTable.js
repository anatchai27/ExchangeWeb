import React from "react";

export const BookingTable = () => {
  return (
    <div className="col-xxl-12 col-lg-12 mb-25">
      <div className="card border-0 px-25 browser-states">
        <div className="card-header px-0 border-0">
          <h6>Browser States</h6>
          <div className="card-extra">
            <ul className="card-tab-links nav-tabs nav" role="tablist">
              <li>
                <a
                  className="active"
                  href="#t_selling-today2"
                  data-bs-toggle="tab"
                  id="t_selling-today2-tab"
                  role="tab"
                  aria-selected="true"
                >
                  Today
                </a>
              </li>
              <li>
                <a
                  href="#t_selling-week2"
                  data-bs-toggle="tab"
                  id="t_selling-week2-tab"
                  role="tab"
                  aria-selected="true"
                >
                  Week
                </a>
              </li>
              <li>
                <a
                  href="#t_selling-month3"
                  data-bs-toggle="tab"
                  id="t_selling-month3-tab"
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
              id="t_selling-today2"
              role="tabpanel"
              aria-labelledby="t_selling-today2-tab"
            >
              <div className="selling-table-wrap">
                <div className="table-responsive">
                  <table className="table table--default table-borderless">
                    <thead>
                      <tr>
                        <th>Browsers</th>
                        <th>Session</th>
                        <th>Bounce Rate</th>
                        <th>CTE</th>
                        <th>Goal Conv. Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Google Chrome</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Mozila Firefox</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Apple Safari</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Internet Explorer</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Opera Mini</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="t_selling-week2"
              role="tabpanel"
              aria-labelledby="t_selling-week2-tab"
            >
              <div className="selling-table-wrap">
                <div className="table-responsive">
                  <table className="table table--default table-borderless">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Session</th>
                        <th>Bounce Rate</th>
                        <th>CTE</th>
                        <th>Goal Conv. Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Google Chrome</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Mozila Firefox</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Apple Safari</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Internet Explorer</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Opera Mini</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="t_selling-month3"
              role="tabpanel"
              aria-labelledby="t_selling-month3-tab"
            >
              <div className="selling-table-wrap">
                <div className="table-responsive">
                  <table className="table table--default table-borderless">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Session</th>
                        <th>Bounce Rate</th>
                        <th>CTE</th>
                        <th>Goal Conv. Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Google Chrome</span>
                          </div>
                        </td>
                        <td>73,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Mozila Firefox</span>
                          </div>
                        </td>
                        <td>45,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Apple Safari</span>
                          </div>
                        </td>
                        <td>57,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Internet Explorer</span>
                          </div>
                        </td>
                        <td>92,345</td>
                        <td>3.5%</td>
                        <td>12025</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="selling-product-img d-flex align-items-center">
                            <span>Opera Mini</span>
                          </div>
                        </td>
                        <td>78,345</td>
                        <td>1.5%</td>
                        <td>48584</td>
                        <td>80%</td>
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
  );
};
