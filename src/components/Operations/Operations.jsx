import { useState } from "react";
import { BtnBox, BtnType, OperationsBox } from "./Operations.styled";
import MintOperation from "../MintOperation/MintOperation";
import Operation from "../Operation/Operation";

const Operations = () => {
  const [type, setType] = useState("normie");
  return (
    <OperationsBox>
      <BtnBox>
        <BtnType
          active={(type === "normie").toString()}
          onClick={() => setType("normie")}
        >
          Normie
        </BtnType>
        <BtnType
          active={(type === "private").toString()}
          onClick={() => setType("private")}
        >
          Private
        </BtnType>
      </BtnBox>

      <MintOperation />
      {/* <Operation subtitle="Mint" /> */}
      <Operation />
    </OperationsBox>
  );
};

export default Operations;
