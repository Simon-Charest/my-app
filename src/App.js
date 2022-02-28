import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
          Learn React
        </a>
      </header>
    </div>
  );
}

function Game() {
  // Grid Layout (https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_layout_named)
  return (
    <div class="grid-container">
      <div class="window" id="status">
        Solo<br />
        LV: 1<br />
        HP: 15<br />
        MP: 0<br />
        G: 120<br />
        E: 0
      </div>
      <div class="window" id="command-div">
        <table id="command-table">
          <tr>
            <td>Fight</td><td>Spell</td>
          </tr>
          <tr>
            <td>Run</td><td>Item</td>
          </tr>
        </table>
      </div>
      <div class="window" id="fighting">
        <div id="enemy"></div>
      </div>
      <div class="window" id="message">
        A Slime draws near!<br />
        Command?<br />
        Solo attacks!<br />
        The Slime's Hit Points have been reduced by 2.<br />
        The Slime attacks!<br />
        Thy Hits decreased by 1.<br />
        Command?<br />
        Solo attacks!
      </div>
    </div>
  );
}

//export default App;
export default Game;
