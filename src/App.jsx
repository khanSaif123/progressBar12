import { useState } from 'react';
import { Progressbar } from './components/Progressbar';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="wrapper">
      <span>ProgressBar</span>
      <Progressbar value={value} setValue={setValue} />
    </div>
  );
}

export default App;
