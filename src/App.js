import React from "react";
import { useGlobalContext } from "./context";
import { AppProvider } from "./context";

// components
import Navbar from "./Navbar";
import CartContainer from "./cartContainer";
// items

function App() {
  console.log(useGlobalContext());
  // const {  } = useGlobalContext();
  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <AppProvider>
        
        <Navbar />
        <CartContainer />
      </AppProvider>
    </main>
  );
}

export default App;
