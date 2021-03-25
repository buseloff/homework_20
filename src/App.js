import "./App.css";
import { Component } from "react";
import Calendar from "./components/Calendar";
class App extends Component {
  render() {
    return <Calendar currentDate={new Date()} />;
  }
}
export default App;
