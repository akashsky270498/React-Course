import { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { name } = this.props;

    return (
      <>
        <h2 className="mr-10 text-red-500 underline">{name}</h2>
        <div>
          <h2
            className="bg-sky-300 text-center text-2xl cursor-pointer"
            onMouseEnter={this.props.increaseCount}
          >
            {this.props.count}
          </h2>
        </div>
      </>
    );
  }
}

const EnhancedHoverCounter = withCounter(HoverCounter);
export default EnhancedHoverCounter;
