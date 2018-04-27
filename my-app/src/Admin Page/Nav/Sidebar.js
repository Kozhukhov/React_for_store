import React from "react";
import ReactDOM from "react-dom";
import SidebarItem from "./SidebarItem";
class Sidebar extends React.Component {
    render() {
      return (
        <div className="Sidebar">
          <SidebarItem value="Order" />
          <SidebarItem value="Products" />
          <SidebarItem value="Categories" />
        </div>
      );
    }
  }
  export default Sidebar;