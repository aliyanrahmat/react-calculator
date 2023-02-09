import logo from './logo.svg';
import './App.css';
import {useState}  from 'react';

function App() {
  const [calc, setCalc] = useState ("");
  const [result,setResult] = useState("");

  const ops = ['/','*','+','-','.'];

  const updateCalc = value =>{
    setCalc(calc + value);
    if(
      ops.includes(value)&& calc === ''||
      ops.includes(value)&& ops.includes(calc.slice(-1)
      )
    ){
      return;
    }

    setCalc(calc + value);
    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }
const createDigits = () =>{
  const digits =[];

  for (let i =1; i<10; i++){
    digits.push(
      <button
      onClick={()=> updateCalc(i.toString())}
      key ={i}>
        {i}
        </button>
    )
  }
  return digits;
}

const calculate = ()=>{
  setCalc(eval(calc).toString());
}
const deleteLast = ()=>{
  if(calc ==''){
    return;
  }
  const value = calc.slice(0,-1);

  setCalc(value);
}

  return (
    <div className="App ml-[30rem]">
  <h1 className='capitalize text-5xl mr-[35rem] font-bold'>react calculator</h1>
   <div className='disply w-80 h-20  rounded-t-lg p-10 text-3xl 20 mt-20 border'>
   { result ?  <span></span>: '' }
     {calc || "0"}

   </div>
   <div className=' flex text-2xl'>
    <div onClick={() => updateCalc ('/')} className='w-16 h-12 border'>/</div>
    <div onClick={() => updateCalc ('*')} className='w-16 h-12 border'>*</div>
    <div onClick={() => updateCalc ('+')} className='w-16 h-12 border'>+</div>
    <div onClick={() => updateCalc ('-')} className='w-16 h-12 border'>-</div>

    <div onClick={deleteLast} className='w-16 bg-red-600 h-12 border pointer'>Del</div>

   </div>

   <div className='digits flex text-2xl'>
   <div onClick={() => updateCalc ('1')} className='w-24 h-12 border'>1</div>
   <div onClick={() => updateCalc ('2')} className='w-28 h-12 border'>2</div>
   <div onClick={() => updateCalc ('3')} className='w-28 h-12 border'>3</div>
  
  
   </div>
   <div  className='flex text-2xl'>
   <div onClick={() => updateCalc ('4')} className='w-24 h-12 border'>4</div>
   <div onClick={() => updateCalc ('5')} className='w-28 h-12 border'>5</div>
   <div onClick={() => updateCalc ('6')} className='w-28 h-12 border'>6</div>
   
   </div>
   <div className='flex text-2xl'>
   <div onClick={() => updateCalc ('7')} className='w-24 h-12 border'>7</div>
   <div onClick={() => updateCalc ('8')} className='w-28 h-12 border'>8</div>
   <div onClick={() => updateCalc ('9')} className='w-28 h-12 border'>9</div>
   
    </div>
    <div className='flex text-2xl rounded-b-lg'>
    <div onClick={() => updateCalc ('0')} className='w-24 h-12 border'>0</div>
    <div onClick={() => updateCalc ('.')} className='w-28 h-12 border'>.</div>
    <div onClick={calculate} className='w-28 h-12 bg-red-600 border'>=</div>
    </div>
    </div>
   
  );
}

export default App;
