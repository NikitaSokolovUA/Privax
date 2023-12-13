import { MenuItem, TextField } from "@mui/material";
import NumericFormatCustom from "../NumericFormatCustom/NumericFormatCustom";
import {
  OperationBox,
  Select,
  Subtitle,
  SubmitBtn,
} from "./MintOperation.styled";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectWalletId } from "../../redux/waletSlice/waletSelectors";
import { useState } from "react";
import FadeLoader from "react-spinners/ClipLoader";

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

const MintOperation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const walletId = useSelector(selectWalletId);

  const formik = useFormik({
    initialValues: { token: "usdt", amount: "" },
    onSubmit: (values, { resetForm }) => {
      handleMintPrivate({
        walletId,
        token: values.token,
        amount: Number(values.amount),
      });
      resetForm();
    },
  });

  const handleMintPrivate = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/mintPrivate", credentials);

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
      <TextField
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        name="amount"
        label="amount"
        size="small"
        onChange={formik.handleChange}
        value={formik.values.amount}
      />
      <SubmitBtn disabled={isLoading} type="submit">
        Send
        <FadeLoader loading={isLoading} color="white" size={10} />
      </SubmitBtn>
    </OperationBox>
  );
};

export default MintOperation;
