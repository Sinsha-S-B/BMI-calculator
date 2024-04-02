import { useState } from 'react';
import './App.css';
import BmiList from './components/BmiList';
import BmiScore from './components/BmiScore';
import Form from './components/Form';

function App() {
  const [bmi,setBmi]=useState(18)
  const [bmiType,setBmiType]=useState("Overweight")
  return (
    <>
    <div>BMI calculator</div>

    <button onClick={()=>setBmi(bmi+10)}>+</button>
  <Form/>
  <BmiScore bmiNo={bmi} bmiName={bmiType} />
  <BmiList/>
    </>
  );
}

export default App;
