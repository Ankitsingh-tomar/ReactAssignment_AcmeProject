import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar/TopBar';
import TopHeader from './components/TopBar/TopHeader';
import BannerPart from './components/Banner/Banner';
import FooterSection from './components/Footer/Footer';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { Nav } from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <TopHeader/>
    <TopBar/>
    {/* <TopHeader/>
    <TopBar/>
    <BannerPart/>
    <FooterSection/> */}
    
    <Switch>
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/home" component={Home} />
      <Route path="/shop" component={Shop} />
    </Switch>
    <FooterSection/>
 </div> 
 </BrowserRouter> );
}
 
export default App;

const Cart = () => {
  return ( <><h1>This is a Cart page</h1></> );
}
const Contact = () => {
  return ( <><h1>This is a Contact page</h1></> );
}
const Home = () => {
  return ( <><BannerPart/></> );
}
const Shop = () => {
  return ( <><h1>This is a Shop page</h1></> );
}
 

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( <div>
//        <TopHeader/>
//        <TopBar/>
//        <BannerPart/>
//        <FooterSection/>
//     </div> );
//   }
// }
 
// export default App;
// function App() {
//   return (
//     <div>
//       {/* Logo is an actual React component */}
//       <Logo />
//     </div>
//   );
// }

// export default App;