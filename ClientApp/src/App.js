import React, { Component } from "react";
import { Layout } from "./layout/Layout";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return <Layout />;
  }
}
