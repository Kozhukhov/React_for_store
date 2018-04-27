import React from "react";
import ReactDOM from "react-dom";
class SidebarItem extends React.Component {
    render(props) {
      return (
        <div className="SidebarItem">
          <h3>{this.props.value}</h3>
        </div>
      );
    }
  }
  export default SidebarItem;