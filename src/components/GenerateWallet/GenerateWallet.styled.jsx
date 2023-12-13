import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  margin-right: auto;
  margin-left: auto;

  padding: 25px;

  border: 1px solid grey;
  border-radius: 15px;
`;

export const Btn = styled(Button)`
  padding: 10px;
  background-color: #234564;
  color: white;

  &:hover {
    color: #234564;
  }
`;

export const LoaderBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
