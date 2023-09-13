import React, { Component } from "react";
import ListGlass from "./ListGlass";

export default class Model extends Component {
  render() {
    let glassData = this.props.item;
    return (
      <div
        className="row align-items-center justify-content-between "
        style={{ position: "relative" }}
      >
        <div
          className="col-4"
          style={{
            backgroundImage: "url(../../glassesImage/model.jpg)",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            // float: "left",
          }}
        >
          <div className=" text-center">
            <img
              src={"../." + glassData.url}
              alt=""
              style={{
                position: "absolute",
                top: "230px",
                left: "90px",
                width: "300px",
              }}
            />
            <div
              className="bg-white"
              style={{
                position: "absolute",
                bottom: "0px",
                left: "0px",
              }}
            >
              <h3>{glassData.name}</h3>
              <h4>{glassData.desc}</h4>
            </div>
          </div>
        </div>
        <div className="col-8 justify-content-center">
          <ListGlass
            data={this.props.data}
            renderDataGlass={this.props.renderDataGlass}
          ></ListGlass>
        </div>
      </div>
    );
  }
}
