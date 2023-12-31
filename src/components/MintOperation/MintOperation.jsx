import { MenuItem } from "@mui/material";
import {
  OperationBox,
  Select,
  Subtitle,
  SubmitBtn,
  CounterContainer,
  CounterButton,
} from "./MintOperation.styled";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectWalletId } from "../../redux/waletSlice/waletSelectors";
import { useState } from "react";
import FadeLoader from "react-spinners/ClipLoader";
import { tokens } from "../../constants/tokens";

const currencies = [
  {
    value: "usdt",
    label: "USDT",
  },
  {
    value: "wmatic",
    label: "WMATIC",
  },
];

const MintOperation = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const walletId = useSelector(selectWalletId);

  const formik = useFormik({
    initialValues: { token: "usdt", amount: 0 },
    onSubmit: (values, { resetForm }) => {
      handleMintPrivate({
        walletId,
        token: values.token,
        amount:
          (Number(values.amount) / 100) *
          10 **
            (values.token === "usdt"
              ? tokens.USDT.decimals
              : tokens.WMATIC.decimals),
      });
      resetForm();
    },
  });

  const handleMintPrivate = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        type === "public" ? "/mintPublic" : "/mintPrivate",
        credentials
      );

      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <OperationBox onSubmit={formik.handleSubmit}>
      <Subtitle>Mint</Subtitle>
      <Select
        id="filled-select-currency"
        select
        label="Select"
        variant="filled"
        name="token"
        onChange={formik.handleChange}
        value={formik.values.token}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <Subtitle>on Aztec</Subtitle>
      <CounterContainer>
        <CounterButton
          onClick={() =>
            formik.setFieldValue("amount", formik.values.amount - 1)
          }
          disabled={formik.values.amount / 100 <= 0}
        >
          -
        </CounterButton>
        {formik.values.amount / 100}
        <CounterButton
          onClick={() =>
            formik.setFieldValue("amount", formik.values.amount + 1)
          }
          disabled={formik.values.amount / 100 >= 0.5}
        >
          +
        </CounterButton>
      </CounterContainer>

      <SubmitBtn disabled={isLoading} type="submit">
        Send
        <FadeLoader loading={isLoading} color="white" size={10} />
      </SubmitBtn>
    </OperationBox>
  );
};

export default MintOperation;
