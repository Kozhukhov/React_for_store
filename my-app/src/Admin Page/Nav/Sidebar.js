import React from "react";
import ReactDOM from "react-dom";
import SidebarItem from "./SidebarItem";
import "./sidebar.css";
class Sidebar extends React.Component {
    render() {
      return (
        <ul className="Sidebar">
          <SidebarItem value="Orders" />
          <SidebarItem value="Products" />
          <SidebarItem value="Categories" />
        </ul>
      );
    }
  }
  export default Sidebar;