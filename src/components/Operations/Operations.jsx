import { useState } from "react";
import { BtnBox, BtnType, OperationsBox } from "./Operations.styled";
import MintOperation from "../MintOperation/MintOperation";
import UnshieldOperation from "../UnshieldOperation/UnshieldOperation";
import SwapOperation from "../SwapOperation/SwapOperation";

const Operations = () => {
  const [type, setType] = useState("public");
  return (
    <OperationsBox>
      <BtnBox>
        <BtnType
          active={(type === "public").toString()}
          onClick={() => setType("public")}
        >
          Public
        </BtnType>
        <BtnType
          active={(type === "private").toString()}
          onClick={() => setType("private")}
        >
          Private
        </BtnType>
      </BtnBox>

      <MintOperation type={type} />
      <UnshieldOperation type={type} />
      {type === "public" && <SwapOperation />}
    </OperationsBox>
  );
};

export default Operations;
