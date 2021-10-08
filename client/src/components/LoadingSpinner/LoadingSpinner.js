import React from "react";
import Loader from "react-loader-spinner";

import s from "./LoadingSpinner.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={s.loader}>
      <div className={s.loader__wrapper}>
        <Loader
          type="Oval"
          color="#41522e"
          height={70}
          width={70}
          timeout={5000}
        />
      </div>
    </div>
  );
};
