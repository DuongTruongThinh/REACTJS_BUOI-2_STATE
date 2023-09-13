import React, { Component, startTransition } from "react";
import Model from "./Model";
import { data } from "./dataGlasses";
import ListGlass from "./ListGlass";

export default class Glass extends Component {
  state = { data: data, item: data[0] };
  renderDataGlass = (id) => {
    let index = this.state.data.findIndex((item) => {
      return item.id == id;
    });
    this.setState({ item: data[index] });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(../../glassesImage/background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="header bg-secondary">
          <h4 className="text-white text-center py-3">
            TRY APP GLASSES ONLINE
          </h4>
        </div>
        <Model
          data={this.state.data}
          item={this.state.item}
          renderDataGlass={this.renderDataGlass}
        ></Model>
      </div>
    );
  }
}
