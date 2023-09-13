import React, { Component } from "react";

export default class ListGlass extends Component {
  renderListGlass = () => {
    let data = this.props.data;
    return data.map((item) => {
      return (
        <img
          onClick={() => {
            this.props.renderDataGlass(item.id);
          }}
          style={{ width: "250px" }}
          src={"../." + item.url}
        ></img>
      );
    });
  };

  render() {
    return <div className="bg-white mx-auto">{this.renderListGlass()}</div>;
  }
}

// "../." + data[0].url;
