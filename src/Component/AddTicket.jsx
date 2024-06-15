import React, { Component } from "react";

class AddTicket extends Component {
  state = {
    count: 1,
  };

  handleadd = () => {
    this.setState({ count: this.state.count + 100 });
  };

  render() {
    return (
      <>
        <h1>
          Arunachalam - <span>1998</span>
        </h1>
        <h3>Count: {this.state.count}</h3>

        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/arunachalam-iemv003646-24-03-2017-16-30-23.jpg" />

        <br></br>
        <button onClick={this.handleadd}>AddTicket</button>
      </>
    );
  }
}

export default AddTicket;
