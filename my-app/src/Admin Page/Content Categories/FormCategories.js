import React from "react";
import ReactDOM from "react-dom";
class FormCategories extends React.Component {
    render() {
      return (
        <form id="formCategory">
          <div className="form-group">
            <label>
              <h3>Add category</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText"
              placeholder="Category name"
              required
            />
            <button type="submit" className="btn btn-primary" id="add1">
              Submit
            </button>
          </div>
        </form>
      );
    }
  }
  export default FormCategories;