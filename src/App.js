import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './components/ComponentToPrint'; 

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
  return (
    <>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint} className='print-btn'>Print this out!</button>
    </>
  )
}

export default App