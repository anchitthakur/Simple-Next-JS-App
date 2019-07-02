import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
import React from "react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  align:center;
`;

export default function Loader() {
  const loading = true;
  return (
    <div className="sweet-loading">
      <PulseLoader
        css={override}
        sizeUnit={"px"}
        size={18}
        margin="2px"
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
}
