import { useDispatch, useSelector } from "react-redux";
import { ButtonBox, Btn, LoaderBox } from "./GenerateWallet.styled";
import { createWallet } from "../../redux/waletSlice/operations/createWallet";
import { selectLoading } from "../../redux/waletSlice/waletSelectors";
import FadeLoader from "react-spinners/ClipLoader";

const GenerateWallet = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleGenerate = () => {
    dispatch(createWallet());
  };

  return (
    <>
      <ButtonBox>
        <Btn disabled={isLoading} onClick={handleGenerate}>
          Generate wallets
        </Btn>
      </ButtonBox>

      <LoaderBox>
        <FadeLoader
          color="#36d7b7"
          loading={isLoading}
          size={150}
          // aria-label="Loading Spinner"
          // data-testid="loader"
        />
      </LoaderBox>
    </>
  );
};

export default GenerateWallet;
