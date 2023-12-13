import { useSelector } from "react-redux";
import { NumberWallet, Subtile, Text, Title } from "./AztecBalance.styled";
import {
  selectAztecBalance,
  selectWalletAddress,
} from "../../redux/waletSlice/waletSelectors";

const AztecBalance = () => {
  const wallet = useSelector(selectWalletAddress);
  const balance = useSelector(selectAztecBalance);

  return (
    <div>
      <Title>Aztec Balance:</Title>
      <Subtile>Public</Subtile>
      <Text>
        -- <span>{balance?.public?.USDT || 0}</span> USDT
      </Text>
      <Text>
        -- <span>{balance?.public?.WMATIC || 0}</span> WMATIC
      </Text>
      <Subtile>Private</Subtile>
      <Text>
        -- <span>{balance?.private?.USDT || 0}</span> USDT
      </Text>
      <Text>
        -- <span>{balance?.private?.WMATIC || 0}</span> WMATIC
      </Text>

      <NumberWallet>{wallet}</NumberWallet>
    </div>
  );
};

export default AztecBalance;
