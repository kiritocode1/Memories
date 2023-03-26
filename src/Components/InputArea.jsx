import React from 'react'
import { Textarea } from '@nextui-org/react';


const InputArea = () => {


      async function onSubmit(event) {

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ request: Input }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }; 


    
  return (
      <div>
          <Textarea labelPlaceholder="
        
        im here to listen to you " color="secondary" status="secondary" animated required shadow minrows={ 10 } fullWidth onKeyDown={
            (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    onSubmit(e);

                }
            }
        } />
          
    </div>
  )
}

export default InputArea