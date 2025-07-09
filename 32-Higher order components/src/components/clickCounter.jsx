import { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { name } = this.props;

    return (
      <>
        <h2 className="mr-10 text-red-500 underline">{name}</h2>
        <div>
          <h2
            className="bg-sky-300 text-center text-2xl cursor-pointer"
            onClick={this.props.increaseCount}
          >
            {this.props.count}
          </h2>
        </div>
      </>
    );
  }
}

const EnhancedClickCounter = withCounter(ClickCounter);
export default EnhancedClickCounter;
