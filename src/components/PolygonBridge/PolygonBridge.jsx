import { useSelector } from "react-redux";
import { selectBridgeBalance } from "../../redux/waletSlice/waletSelectors";
import { Text, Title } from "../AztecBalnce/AztecBalance.styled";
import { tokens } from "../../constants/tokens";

const PolygonBridge = () => {
  const balance = useSelector(selectBridgeBalance);

  return (
    <>
      <Title>Bridge Balance</Title>
      <Text>
        -- <span>{balance?.USDT / 10 ** tokens.USDT.decimals || 0}</span> USDT
      </Text>
      <Text>
        -- <span>{balance?.WMATIC / 10 ** tokens.WMATIC.decimals || 0}</span>{" "}
        WMATIC
      </Text>
    </>
  );
};

export default PolygonBridge;
