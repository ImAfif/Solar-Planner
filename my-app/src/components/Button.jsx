import React from "react";
import classNames from "classNames";

export default function Button(props) {
  const buttonClass = classNames("button", {"button--confirm": props.confirm})
}