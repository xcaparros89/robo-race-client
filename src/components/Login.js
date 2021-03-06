import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Redirect } from 'react-router-dom';
import logo from "../img/logo.png"
import { Link } from "react-router-dom";

class Login extends Component {
  state = { username: "", password: "", isEmpty:false };

  componentDidMount() {
    document.body.classList.add('home');
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const newUsername = username.trim();
    const newPassword = password.trim();
    if(newUsername && newPassword){
    this.setState({username:newUsername, password:newPassword, isEmpty:false})
    this.props.login({ username:newUsername, password:newPassword });
  } else {this.setState({isEmpty:true})}
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  // if(this.props.isLoggering) {
  //   return <Redirect to='/allRooms'></Redirect>
  // }
  render() {
    const { username, password } = this.state;
    return (
          <> {this.props.isLoggedin && <Redirect to='/allRooms' />}
          <div className="container login-container d-flex align-items-center" style={{marginTop:'5%'}}>
        <div className="container home-bg">
            <div className="row no-gutters">
                <div className="col-12">
                    <img className="tile-bg mx-auto d-block" src={logo} alt="" />
                </div>
            </div>
            <div className="row no-gutters">
                <div className="container login-inner-container">
                <div className="col-12">
					        <img src={require("../img/home-login-bg-top.png")} alt="" className="tile-bg"/>
                </div>
                <div className="col-12 text-center login">
                    <form id="signup-form" onSubmit={(e)=>this.handleFormSubmit(e)}>
                        <div className="form-group">
                          <input type="text" name="username" value={username} className="form-control" placeholder="Username" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" value={password} className="form-control" placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <p className='error-message'>{this.props.errorMessage}</p>
                        {this.state.isEmpty && <p className='error-message'>Write a username and password!</p>}
                        <input type='submit' className="submitPlayBtn" value='' />
                        <p className="" style={{marginBottom:"0"}}>Don't you have an account?</p>
                        <p className="last-p"><Link to={"/guest"} className="a-login">Play as Guest</Link> or <Link to={"/signup"} className="a-login">Register</Link></p>
                    </form>
                </div>
                <div className="col-12">
					        <img src={require("../img/home-login-bg-footer.png")} alt="" className="tile-bg"/>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
  }
}

export default withAuth(Login);
