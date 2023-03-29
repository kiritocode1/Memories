import React from "react";
import { Card } from "@nextui-org/react";



const Madeusing = () => {
    return <div className={"w-full flex justify-center items-center gap-2"}>
        made using
        <Card isHoverable isPressable css={{mw:"60px"}}>
            <Card.Image src={"/images/logo.jpg"}/>
        </Card>
  </div>;
};

export default Madeusing;
