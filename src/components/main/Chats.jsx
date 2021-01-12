import React, { Component } from "react";

export class Chats extends Component {
  constructor() {
    super();
    this.state = {
      //   chats_: [],
      chats: [
        { id: 1, name: "Atharva", profile_pic: "", last_message: "Hi" },
        { id: 2, name: "Atharva", profile_pic: "", last_message: "Hi" },
        { id: 3, name: "Atharva", profile_pic: "", last_message: "Hi" },
      ],
    };
  }
  componentDidMount() {
    // let t = new Array();
    // for (i = 0; i < 10; i++) {
    //   t.push({
    //     id: i,
    //     name: `nish${i}`,
    //   })
    // }
    // this.setState({ chats: t.toL });
  }
  render() {
    return (
      <ul class="list-unstyled">
        {this.state.chats.map((chat) => (
          <li class="media bg-light my-2 rounded p-1 shadow-sm position-relative">
            <img
              src="https://via.placeholder.com/150"
              alt="user__email"
              className="align-self-center mr-1 rounded-circle"
              style={{ width: `3em`, height: `3em` }}
            />
            <div class="media-body px-2 overflow-hidden">
              <h5>{chat.name}</h5>
              <span className="p-0 m-0 text-nowrap">{chat.last_message}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Chats;
