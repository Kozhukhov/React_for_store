import React from "react";
import ReactDOM from "react-dom";

class RowOfTableCategories extends React.Component {
    render(props) {
      return (
        <tr>
          <td>{this.props.number}</td>
          <td>{this.props.name}</td>
        </tr>
      );
    }
  }

export default RowOfTableCategories;