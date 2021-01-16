import React, { Component } from "react";
import { connect } from "react-redux";
import { addWord } from "./redux/actions";

export class C2 extends Component {
  render() {
    return (
      <div className="col-6">
        <p>C2</p>
        {this.props.messages.map((msg) => (
          <>
            <p>By: {msg[0]}</p>
            <p>What: {msg[1]}</p>
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.chatReducer.messages,
});

const mapDispatchToProps = {
  addWord,
};

export default connect(mapStateToProps, mapDispatchToProps)(C2);
