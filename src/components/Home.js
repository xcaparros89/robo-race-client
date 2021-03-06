import React from 'react'
import logo from '../img/logo.png'
import { Link } from "react-router-dom";

function Home() {

  document.body.classList.add('home');

  return (
	<div className="container login-container d-flex align-items-center" style={{marginTop:'5%'}}>
	<div className="container home-bg">
		<div className="row no-gutters">
			<div className="col-12">
				<img className="tile-bg mx-auto d-block" src={logo} alt="RoboRace" />
			</div>
		</div>
		<div className="row no-gutters">
			<div className="container login-inner-container">
				<div className="col-12">
					<img src={require("../img/home-login-bg-top.png")} alt="" className="tile-bg"/>
				</div>
				<div className="col-12 text-center login">
					<p className="login-text">Assume control of a robot in a dangerous widget factory filled with moving, course-altering conveyor belts, metal-melting laser beams,  bottomless pits, crushers and a variety of other obstacles. Just try to survive and escape!</p>
					<Link to={"/login"} className="a-login"><button className="submitLoginBtn"></button></Link>
					<p className="" style={{marginBottom:"0"}}>Don't you have an account?</p>
					<p className="last-p"><Link to={"/guest"} className="a-login">Play as Guest</Link> or <Link to={"/signup"} className="a-login">Register</Link></p>
				</div>
				<div className="col-12">
					<img src={require("../img/home-login-bg-footer.png")} alt="" className="tile-bg"/>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Home;