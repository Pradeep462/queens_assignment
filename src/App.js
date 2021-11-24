
import './App.css';
import Trivia from './components/Trivia.js';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className=" App bg-primary d-flex justify-content-center align-items-center">
      <div className="w-50 mh-100 rounded bg-white text-center">
        <h1 className="m-3"><u>WELCOME</u></h1>
        <Trivia />
      </div>
    </div>
  );
}

export default App;
