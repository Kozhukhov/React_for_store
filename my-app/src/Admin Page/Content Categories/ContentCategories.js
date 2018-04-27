import React from "react";
import ReactDOM from "react-dom";
import TableCategories from "./TableCategories";
import FormCategories from "./FormCategories";
import "./Content.css";
class ContentCategories extends React.Component {
    render() {
      return (
        <div className="Main">
          <FormCategories />
          <TableCategories />
        </div>
      );
    }
  }
  export default ContentCategories;