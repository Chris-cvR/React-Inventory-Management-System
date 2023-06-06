import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //Components are mounted once they have performed their first full render
  componentDidMount(){
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log("clicked!");
  }

  render() {
    return (
    <div>
      <p>Clicked: {this.state.count}</p>
      <button classsName="btn btn-primary" onClick={() => this.clickedButton()}>
        Click Me!
      </button>
    </div>
    )
  }
}