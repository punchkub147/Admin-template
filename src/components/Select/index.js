import React from "react";

export default ({ className, children, ...props }) => {
  return (
    <div
      className={`${className} select-wrapper`}
    >
      <select {...props}>{children}</select>
      <div class="select-arrow" />
    </div>
  );
};
