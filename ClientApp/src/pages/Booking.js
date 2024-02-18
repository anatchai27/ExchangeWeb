import React from "react";
import { PageHeder } from "../components/pageHeader/PageHeder";

export const Booking = () => {
  return (
    <>
      <div className="col-lg-12">
        <PageHeder
          pageHeaderName={"Booking"}
          BtnName={"create booking"}
          showButtonHeader={true}
        />
      </div>
      <div className="row"></div>
    </>
  );
};
