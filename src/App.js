import React, { useState } from "react";
import './App.css';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Sidebar from './Sidebar/Sidebar.js';

const App = () => {
  const [artists, setArtists] = useState([]);
  return (
    <div>
      <Sidebar />
      <Header setArtists={setArtists}/>
      <Main artists={artists}/>
      <Footer />
    </div>
  );
};

export default App;
