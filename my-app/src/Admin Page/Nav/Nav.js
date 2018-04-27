import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";
class Nav extends React.Component {
    render() {
      return (
        <div className="Nav">
          <Sidebar />
        </div>
      );
    }
  }
  export default Nav;