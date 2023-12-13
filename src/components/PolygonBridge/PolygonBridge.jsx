import { useSelector } from "react-redux";
import { selectBridgeBalance } from "../../redux/waletSlice/waletSelectors";
import { Text, Title } from "../AztecBalnce/AztecBalance.styled";

const PolygonBridge = () => {
  const balance = useSelector(selectBridgeBalance);

  return (
    <>
      <Title>Bridge Balance</Title>
      <Text>
        -- <span>{balance?.USDT || 0}</span> USDT
      </Text>
      <Text>
        -- <span>{balance?.WMATIC || 0}</span> MATIC
      </Text>
    </>
  );
};

export default PolygonBridge;
