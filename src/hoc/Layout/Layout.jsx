import React from 'react';
import './Layout.scss';
import Auxiliary from "../Auxiliary/Auxiliary";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Layout extends React.Component {
  render() {
    return(
      <Auxiliary>

		<Header/>

		<main className="layout">
		  {this.props.children}
		</main>

		<Footer/>

	  </Auxiliary>
	)
  }
}

export default Layout;