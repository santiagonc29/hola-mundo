import logo from './logo.svg';
import './App.css';
// import Greating from './components/pure/greating';
// import GreatingF from './components/pure/greatingF';
// import TaskList from './components/container/taskList';
import Contact from './components/container/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greating></Greating> */}
        {/* <GreatingF name="Santiago"></GreatingF> */}
        {/* <TaskList></TaskList> */}
        <Contact></Contact>
      </header>
    </div>
  );
}

export default App;
