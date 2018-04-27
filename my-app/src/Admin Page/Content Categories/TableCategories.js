import React from "react";
import ReactDOM from "react-dom";
import RowOfTableCategories from "./RowOfTableCategories";
class TableCategories extends React.Component {
    renderRow() {
      return (
        <tr>
          <th>#</th>
          <th>name</th>
        </tr>
      );
    }
    render() {
      var x = 1;
      return (
        <div id="all" class="all">
          <table class="table">
            <thead>{this.renderRow()}</thead>
            <tbody>
              <RowOfTableCategories number={x} name="cars" />
            </tbody>
          </table>
        </div>
      );
    }
  }

export default TableCategories;