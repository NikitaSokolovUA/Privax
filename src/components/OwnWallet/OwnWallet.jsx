import { useEffect } from "react";
import AztecBalance from "../AztecBalnce/AztecBalance";
import Operations from "../Operations/Operations";
// import PolygonBalance from "../PolygonBalance/PolygonBalance";
import PolygonBridge from "../PolygonBridge/PolygonBridge";
import { BalancesBox, BridgeBox, Container } from "./OwnWallet.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectWallet } from "../../redux/waletSlice/waletSelectors";
import { getAztecBalance } from "../../redux/waletSlice/operations/getAztecBalance";
import { getBridgeBalance } from "../../redux/waletSlice/operations/getBridgeBalance";

const OwnWallet = () => {
  const wallet = useSelector(selectWallet);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAztecBalance(wallet.walletId));
    dispatch(getBridgeBalance());

    const intervalId = setInterval(() => {
      dispatch(getAztecBalance(wallet.walletId));
      dispatch(getBridgeBalance());
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch, wallet]);

  return (
    <>
      <Container>
        <BalancesBox>
          <AztecBalance />
          {/* <PolygonBalance
            polygon={{ usdt: 94, wmatic: 79 }}
            wallet="23214g312-fkjsaas"
          /> */}
        </BalancesBox>
        <BridgeBox>
          <PolygonBridge />
        </BridgeBox>
      </Container>
      <Operations />
    </>
  );
};

export default OwnWallet;
