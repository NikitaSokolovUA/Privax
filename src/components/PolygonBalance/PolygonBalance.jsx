import { tokens } from "../../constants/tokens";
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
          -- <span>{polygon.usdt / 10 ** tokens.USDT.decimals}</span> USDT
        </Text>
        <Text>
          -- <span>{polygon.wmatic / 10 ** tokens.WMATIC.decimals}</span> WMATIC
        </Text>
        <NumberWallet style={{ marginTop: "150px" }}>{wallet}</NumberWallet>
      </div>
    </>
  );
};

export default PolygonBalance;
