import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ContentCategories from "./Admin Page/Content Categories/ContentCategories";
import registerServiceWorker from "./registerServiceWorker";
import Nav from "./Admin Page/Nav/Nav";
import Search from "./Admin Page/Search/Search";
class AdminPage extends React.Component {
  render(props) {
    return (
      <div>
        <Search />
        <Nav />
        <ContentCategories />
      </div>
    );
  }
}
ReactDOM.render(<AdminPage />, document.getElementById("root"));
registerServiceWorker();
