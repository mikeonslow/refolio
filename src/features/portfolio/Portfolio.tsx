import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { portfolioShowError, selectErrorMessage } from "./portfolioReducer";
import styles from "./Portfolio.module.css";

export function Portfolio() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  return (
    <Fragment>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(portfolioShowError())}
      >
        SHOW ME AN ERROR!
      </button>
      <p>{errorMessage}</p>
    </Fragment>
  );
}
