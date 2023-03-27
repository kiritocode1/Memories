import React from "react";
import { Textarea } from "@nextui-org/react";
import { useState} from "react";



const MainPart = () => {

  const [Input, setInput] = useState("");
	const [Result, setResult] = useState("");

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

			setResult(data.result);
			//console.log(`Data set ! ${data.result}`);
			setInput("");
		} catch (error) {
			// Consider implementing your own error handling logic here
			console.error(error);
			alert(error.message);
		}
	}












  return (
		<div className="flex flex-wrap justify-evenly  items-center w-full ">
      <div className="w-60">
        {/* Input area */}
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
					onChange={(e) => {
						setInput(e.target.value);
						//console.log(Input);
					}}
					value={Input}
				/>
			</div>
			<div>
        <span>
          
          {/* Output area */}
					<Textarea
						readOnly
						status="success"
						initialValue={`${Result}`}
					  width="400px"
					  hidden={Result===""?true:false}
						label="Memory says "
					/>
				</span>
			</div>
		</div>
	);
};

export default MainPart;
