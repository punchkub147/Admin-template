import React from "react";

export default ({ className, children, ...props }) => {
  return (
    <div
      className={`${className} border-2 border-gray-200 inline-block relative cursor-pointer rounded`}
    >
      <select {...props}>{children}</select>
      <div class="select-arrow" />
    </div>
  );
};
