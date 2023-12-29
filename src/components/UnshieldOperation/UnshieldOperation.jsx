import { MenuItem } from "@mui/material";
import {
  OperationBox,
  Subtitle,
  Select,
  SubmitBtn,
  CounterContainer,
  CounterButton,
} from "./UnshieldOperation.styled";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  selectAztecBalance,
  selectWalletId,
} from "../../redux/waletSlice/waletSelectors";
import { useMemo, useState } from "react";
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

const UnshieldOperation = ({ type }) => {
  const [isLoading, setIsLoading] = useState(false);
  const walletId = useSelector(selectWalletId);

  const balance = useSelector(selectAztecBalance);

  const formik = useFormik({
    initialValues: { token: "usdt", amount: 0 },
    onSubmit: (values, { resetForm }) => {
      handleUnshield({
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

  const handleUnshield = async (credentials) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        type === "public" ? "/shieldBalance" : "/unshieldBalance",
        credentials
      );
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const maxValue = useMemo(() => {
    const decimals =
      formik.values.token === "usdt"
        ? tokens.USDT.decimals
        : tokens.WMATIC.decimals;

    const balanceValue =
      formik.values.token === "usdt"
        ? balance?.[type]?.USDT
        : balance?.[type]?.WMATIC;

    const balanceMax = balanceValue / 10 ** decimals;

    return balanceMax >= 0.5 ? 0.5 : balanceMax;
  }, [balance, formik.values.token, type]);

  return (
    <OperationBox onSubmit={formik.handleSubmit}>
      <Subtitle>{type === "public" ? "Shield" : "Unshield"}</Subtitle>
      <Select
        id="filled-select-currency"
        select
        label="Select"
        variant="filled"
        name="token"
        onChange={(e) => {
          const value = e.target.value;

          const valueBalance =
            (value === "usdt"
              ? balance?.[type]?.USDT
              : balance?.[type]?.WMATIC) /
            10 **
              (value === "usdt"
                ? tokens.USDT.decimals
                : tokens.WMATIC.decimals);

          if (formik.values.amount / 100 >= valueBalance) {
            formik.setFieldValue("amount", valueBalance * 100);
          }

          formik.handleChange(e);
        }}
        value={formik.values.token}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <Subtitle>balance</Subtitle>
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
          onClick={() => {
            if ((formik.values.amount + 1) / 100 > maxValue) {
              formik.setFieldValue("amount", maxValue * 100);
            }

            formik.setFieldValue("amount", formik.values.amount + 1);
          }}
          disabled={formik.values.amount / 100 >= maxValue}
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

export default UnshieldOperation;
