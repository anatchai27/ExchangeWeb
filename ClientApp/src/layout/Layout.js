import React from "react";
import { JqueryBase } from "../utils/JqueryBase";
import { SideMenu } from "../components/sideMenu/SideMenu";
import { HeaderTop } from "../components/headerTop/HeaderTop";
import { Footer } from "../components/footer/Footer";
import { MobileSearchBar } from "../components/mobileSearch/MobileSearchBar";
import { Overlays } from "../components/overlays/Overlays";
import { ContextApp } from "../context/ContextApp";
import { Content } from "./Content";

export const Layout = () => {
  return (
    <>
      <ContextApp>
        <MobileSearchBar />
        <HeaderTop />
        <main className="main-content">
          <SideMenu />
          <div className="contents">
            <div className="demo3 mb-25 t-thead-bg">
              <div className="container-fluid">
                <div className="row ">
                  <Content />
                </div>
                {/* ends: .row */}
              </div>
            </div>
          </div>
          <Footer />
        </main>
        <Overlays />
        <JqueryBase />
      </ContextApp>
    </>
  );
};
