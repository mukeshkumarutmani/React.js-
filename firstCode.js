jsx fragments:
    <>
    <h1> Mukesh Utmani </h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
              
          Learn React with Mukesh Utmani
        </a>
      </header>
    </div>

import logo from './logo.svg';
import './App.css';

 let var3="mukesh";
function App() {
  return (
    <>
    <nav> 
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      
      <p> {5+7}
      </p>n
      
    </nav>
    

  <div className='blank'> 
  
      <h1> Hello {var3}</h1>
   </div>
   
    </>
   
 );
}
