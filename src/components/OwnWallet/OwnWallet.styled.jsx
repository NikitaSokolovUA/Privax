import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const BalancesBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
  width: 35%;
  padding: 10px;

  height: 390px;

  border: 1px solid grey;
  border-radius: 15px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const BridgeBox = styled.div`
  display: block;
  width: 35%;
  height: 390px;
  padding: 10px;

  border: 1px solid grey;
  border-radius: 15px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
