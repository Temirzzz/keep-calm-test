import React from "react";
import "./Block.scss";

const Block = ({ children, classNameBlock, ClassNameSection }) => {
  return (
    <div className={classNameBlock}>
      <div className={ClassNameSection}>{children}</div>
    </div>
  );
};

export default Block;
