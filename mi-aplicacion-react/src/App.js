import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <Tarea />
      <Tarea />
      <Tarea/>

    </div>
  );
}
function Tarea() {
  return(
    <div>
      <span>v</span>
      <p>mi tarea</p>
      <span>x</span>
    </div>
  )
}
export default App;
