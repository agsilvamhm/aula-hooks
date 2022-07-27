import './App.css';
import Counter from '../Counter/Counter.js';
import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Counter/>
      <br/>
      <SmartCounter/>
      <br/>
      <IfoodCounter/>
    </>
   );
}

export default App;
