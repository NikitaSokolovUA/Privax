import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const OperationBox = styled.form`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
  padding: 10px;

  border-radius: 15px;
  border: 1px solid grey;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

export const Subtitle = styled.p`
  color: var(--Black, #242741);
  /* Header SB 32 */
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  margin-left: 30px;
`;

export const Select = styled(TextField)`
  width: 150px;
`;

export const SubmitBtn = styled(Button)`
  display: flex;
  width: 155px;
  padding: 13px 25px;
  justify-content: center;
  align-items: center;
  gap: 20px;

  border-radius: 15px;
  background: #3043e9;
  color: white;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-transform: none;

  &:hover,
  &:focus {
    background: #d6d9fb;
    color: #3043e9;
  }
  :disabled {
    background-color: grey;
    color: #3043e9;
  }

  cursor: pointer;
`;
