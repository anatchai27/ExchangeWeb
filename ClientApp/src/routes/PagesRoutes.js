import React from "react";
import { Dashboard } from "../pages/Dashboard";
import { RoleManage } from "../pages/RoleManage";
import { Report } from "../pages/Report";
import { Transfer } from "../pages/Transfer";
import { BuySell } from "../pages/BuySell";
import { Booking } from "../pages/Booking";
import { DebitCredit } from "../pages/DebitCredit";

export const PagesRoutes = [
  {
    index: true,
    element: <Dashboard />,
  },
  {
    path: `rates`,
    element: <Dashboard />,
  },
  {
    path: `rolemanage`,
    element: <RoleManage />,
  },
  {
    path: `report`,
    element: <Report />,
  },
  {
    path: `transfer`,
    element: <Transfer />,
  },
  {
    path: `buysell`,
    element: <BuySell />,
  },
  {
    path: `booking`,
    element: <Booking />,
  },
  {
    path: `debitcredit`,
    element: <DebitCredit />,
  },
];
