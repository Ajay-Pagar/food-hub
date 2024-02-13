import { Component } from "react";
import Profile from "./Profile";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>This is About Page</h2>
        <Profile/>
      </div>
    );
  }
}
export default About;
