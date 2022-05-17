import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
	const { bio, color, name, city, } = user
	const { github, linkedin} = user.links

	return (
    <div>
      <NavBar />
      <Home color={color} name={name} city={city}/>
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  	);
}

export default App;
