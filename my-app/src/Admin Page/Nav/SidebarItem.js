import React from "react";
import ReactDOM from "react-dom";
class SidebarItem extends React.Component {
    render(props) {
      return (
        <li className="SidebarItem">
          <a href="#">{this.props.value}</a>
        </li>
      );
    }
  }
  export default SidebarItem;