import "./App.css";
import { Component } from "react";
import Slider from "./components/Slider";
import { myCollection } from "./components/Slider/settings/index.jsx";

class App extends Component {
  render() {
    return <Slider slides={myCollection} widthInitial={800} heightInitial={600} />;
  }
}
export default App;
