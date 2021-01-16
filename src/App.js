import React, { Component } from "react";
import { connect } from "react-redux";
import { addWord } from "./redux/actions";
import C1 from "./C1";
import C2 from "./C2";
import { auth } from "./fbconfig";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ loading: false });
    });
  }
  render() {
    let authenticated = <p>Authenticated</p>;
    let notAuthenticated = <p>Not Authenticated</p>;
    let loading = <p>Loading</p>;

    if (this.state.loading) return loading;
    else
      return (
        <div className="container p-1 d-flex">
          <C1 />
          <C2 />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
