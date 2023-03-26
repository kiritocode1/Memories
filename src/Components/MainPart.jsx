import React from "react";
import { Textarea } from "@nextui-org/react";
import { useState, UseEffect } from "react";

const InputArea = ({ state, function_call }) => {
  const [Input, setInput] = useState("");
  async function onSubmit(event) {
    event.preventDefault();
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
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      function_call(data.result);
      setInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Textarea
        labelPlaceholder="
        
        im here to listen to you "
        color="secondary"
        status="secondary"
        animated
        required
        shadow
        minrows={10}
        fullWidth
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit(e);
          }
        }}
      />
    </div>
  );
};

const OutputArea = () => {
  return (
    <span>
      <Textarea
        readOnly
        status="success"
        initialValue="loading... "
        width="400px"
        label="Responce "
      />
    </span>
  );
};

const MainPart = () => {
  return (
    <div className="flex flex-wrap justify-evenly  items-center w-full ">
      <div className="w-60">
        <InputArea />
      </div>
      <div>
        <OutputArea />
      </div>
    </div>
  );
};

export default MainPart;
