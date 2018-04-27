import React from "react";
import ReactDOM from "react-dom";
class Search extends React.Component {
    render() {
      return (
        <nav class="navbar navbar-dark fixed-top bg-info flex-md-nowrap p-1 shadow header">
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
            Company name
          </a>
          <input
            class="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <a class="nav-link" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </nav>
      );
    }
  }
  export default Search;