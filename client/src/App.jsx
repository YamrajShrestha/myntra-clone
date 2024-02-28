import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Header/>
        <main>
          <div className="items-container"></div>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default App;
