import React from "react";
import ReactDOM from "react-dom";
import "./search.css";
import SearchInput from "./Input"
class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <div className="Company item">
        <h2><a href="#">PandaDoc</a></h2>
      </div>
      <div className="SearchInput item">
      <SearchInput/>
      </div>
      <div className="Sign item">
      <h6><a href="#">Sign in</a></h6>
      </div>
      </div>
    );
  }
}
export default Search;
