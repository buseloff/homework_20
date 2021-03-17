import "./App.css";
import { Component } from "react";
import UserCard from "./components/UserCard";

let userJSON = {
  name: "John",
  surname: "Doe",
  profilePhoto: "../UserCard/data/avatar.jpg",
  position: "Account Manager Amix corp",
  email: "hannagover@gmail.com",
  phone: "+91 654 784 547",
  address: "71 Piligrim Avenue Chevy Chase, MD 20815",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  componentDidMount() {
    /*fetch("./components/UserCard/data/users.json")
      .then(async response => await window.console.log(response.json()))
      .then((data) => window.console.log(data))
      .catch((error) => window.console.error("Error: " + error));*/
    let user = async (userJSON) => await JSON.parse(JSON.stringify(userJSON));
    user(userJSON)
      .then((result) => {
        this.setState({ user: result });
      })
      .catch((error) => window.console.error("Error: " + error));
  }
  render() {
    return (
      <>
        <UserCard userData={this.state.user} />
      </>
    );
  }
}
export default App;
