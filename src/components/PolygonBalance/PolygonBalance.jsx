import {
  NumberWallet,
  Subtile,
  Text,
  Title,
} from "../AztecBalnce/AztecBalance.styled";

const PolygonBalance = ({ polygon, wallet }) => {
  return (
    <>
      <div>
        <Title>Polygon Balance:</Title>
        <Subtile>Public</Subtile>
        <Text>
          -- <span>{polygon.usdt}</span> USDT
        </Text>
        <Text>
          -- <span>{polygon.wmatic}</span> WMATIC
        </Text>
        <NumberWallet style={{ marginTop: "150px" }}>{wallet}</NumberWallet>
      </div>
    </>
  );
};

export default PolygonBalance;
