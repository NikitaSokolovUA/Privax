import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const OperationsBox = styled.div`
  margin-top: 30px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  margin-right: 40px;
`;

export const BtnType = styled(Button)`
  background-color: ${(props) =>
    props.active === "true" ? "#3043E9" : "#D6D9FB"};
  color: ${(props) => (props.active === "true" ? "white" : "black")};

  :hover {
    background-color: orange;
    color: black;
  }
`;
