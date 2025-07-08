import { Component } from "react";

class OldCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };

    this.timerId = null;
    console.log("We can access props:", this.props);
    console.log("Constructor method calls earlier than render method");
  }

  componentDidMount() {
    console.log("Component did mount");
    this.timerId = setInterval(() => {
      console.log("hi");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    clearInterval(this.timerId);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    console.log(
      "in every state update render will get called where as constructor called only once while creating an instance."
    );
    const { name } = this.props;
    const { count2 } = this.state;

    return (
      <>
        <h2 className="mr-10 text-red-500 underline">{name}</h2>
        <div className="flex gap-4 items-center m-6">
          <button
            className="px-4 py-1 bg-green-500 rounded"
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            -
          </button>
          <h2>{this.state.count}</h2>
          <button
            className="px-4 py-1 bg-green-500 rounded"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            +
          </button>
        </div>

        <div className="flex gap-4 items-center m-6">
          <button
            className="px-4 py-1 bg-green-500 rounded"
            onClick={() => {
              this.setState({ count2: this.state.count2 - 1 });
            }}
          >
            -
          </button>
          <h2>{this.state.count2}</h2>
          <button
            className="px-4 py-1 bg-green-500 rounded"
            onClick={() => {
              this.setState({ count2: count2 + 1 });
            }}
          >
            +
          </button>
        </div>
      </>
    );
  }
}

export default OldCounter;
