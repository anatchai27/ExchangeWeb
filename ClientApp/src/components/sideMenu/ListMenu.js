export const ListMenu = [
  { menuName: "Rates", path: "/", child: [] },
  { menuName: "Buy/Sell", path: "buysell", child: [] },
  { menuName: "Debit/Credit", path: "debitcredit", child: [] },
  { menuName: "Booking", path: "booking", child: [] },
  { menuName: "Transfer", path: "transfer", child: [] },
  { menuName: "Role Manage", path: "rolemanage", child: [] },
  {
    menuName: "Report",
    path: "report",
    child: [
      { menuName: "Profit and loss", path: "reportProfitandloss", child: [] },
      { menuName: "Stock", path: "reportStock", child: [] },
      { menuName: "Debit Credit", path: "reportDebitCredit", child: [] },
      { menuName: "Summary", path: "reportSummary", child: [] },
      { menuName: "Booking", path: "reportBooking", child: [] },
      { menuName: "Balance", path: "reportBalance", child: [] },
    ],
  },
];
