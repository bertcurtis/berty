
import './App.css';
import logo from './logo.svg';
//import About from "./components/About";
//import Navbar from "./components/Navbar";
import ElixirMain from "./components/ElixirMain.js";
import GolangMain from "./components/GolangMain.js";


//https://www.freecodecamp.org/news/build-portfolio-website-react/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <ElixirMain />
      <GolangMain />
      </header>
    </div>
  );
}

export default App;


// export default function App() {
//   const user = {
//     name: 'Hedy Lamarr',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
//   };
//   return (
//     <main>
//     <section>
//       <h1>{user.name}</h1>
//     </section>
//       <MyButton />
//       <Navbar />
//       <About />
//       <Projects />
//     </main>
//   );
// }

//import { useState } from 'react';





// function MyButton({name, onClick}) {
//   return (
//     <button onClick={onClick}>
//       Change {name}
//     </button>
//   );
// }

// function handleClick() {
//   this.user.name = "butt"
// }
