import React, { Component } from "react";
import { connect } from "react-redux";
import { addWord } from "./redux/actions";

export class C1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      by: "",
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.addWord(this.state.msg, this.state.by);
  };
  render() {
    return (
      <div className="col-6">
        <p>C1</p>
        {this.props.messages.map((msg) => (
          <>
            <p>By: {msg[0]}</p>
            <p>What: {msg[1]}</p>
          </>
        ))}
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="by">By</label>
            <input
              onChange={(ev) => {
                this.state.msg = "hello";
                this.setState({ by: ev.target.value });
              }}
              type="text"
              class="form-control"
              name="by"
              id="by"
              placeholder="By"
            />
          </div>
          <div class="form-group">
            <label for="msg">message</label>
            <input
              onChange={(ev) => this.setState({ msg: ev.target.value })}
              type="text"
              class="form-control"
              name="msg"
              id="msg"
              placeholder="Message"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(C1);
