import { Component } from "react";

// Two phases : 1.Render  and   2.Commit
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Ajay",
        location: "",
      },
    };
  }

  async componentDidMount() {
    //this will call only for first time
    const data = await fetch("https://api.github.com/users/Ajay-Pagar");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
    // console.log(this.userInfo);
  }
  componentWillUnmount() {
    // this is use to perform cleanup
    console.log("Component unmounted");
  }
  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <div className="user-profile">
          <h3>Name : {this.state.userInfo.name}</h3>
          <h3>Id : {this.state.userInfo.id}</h3>
          <img src={this.state.userInfo.avatar_url} alt="user-img"></img>
          <h3>Bio : {this.state.userInfo.bio}</h3>
        </div>
      </div>
    );
  }
}
export default Profile;
