import './App.css';
import ListWelcome from './ListWelcome';
import Counter from './Counter';
import Checkbox from './Checkbox';
import { useState } from 'react'
import SelectPage from './SelectPage';

function App() {
  const [value, setValue] = useState("Welcome")

  const getPage = () => {
    switch (value) {
      case "Welcome":
        return <ListWelcome />
      case "Counter":
        return <Counter />
      case "Checkbox":
        return <Checkbox />
      default:
        return <div>Not found!</div>

    }
  }
  return (
    <div className="App">    
      <SelectPage value={value} setValue={setValue}/>
      {getPage()}
    </div>
  );
}

export default App;
