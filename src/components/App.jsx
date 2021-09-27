import React from "react";
import ReactDOM from "react-dom";

//Components
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
