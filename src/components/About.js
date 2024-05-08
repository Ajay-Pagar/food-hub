import { Component } from "react";
import Profile from "./Profile";
class About extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <h2>This is About Page</h2>
        <Profile />
      </div>
    );
  }
}
export default About;
