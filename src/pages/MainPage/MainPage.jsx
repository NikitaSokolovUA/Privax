import GenerateWallet from "../../components/GenerateWallet";
import OwnWallet from "../../components/OwnWallet";
import { Title } from "./MainPage.styled";
import { useSelector } from "react-redux";
import { selectIsWallet } from "../../redux/waletSlice/waletSelectors";

const MainPage = () => {
  const wallet = useSelector(selectIsWallet);

  return (
    <>
      <Title>Privax Control Panel</Title>
      {!wallet ? <GenerateWallet /> : <OwnWallet />}
    </>
  );
};

export default MainPage;
