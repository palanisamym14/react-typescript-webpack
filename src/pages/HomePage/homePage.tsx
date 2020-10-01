import React, { Fragment } from "react";

const styles = require("./homePage.scss");

export class HomePage extends React.Component {
  public render() {
    return (
      <Fragment>
        <div className={styles["home-page-block"]}>
          <h1 className="page-title">Hello</h1>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
