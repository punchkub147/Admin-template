import React from "react";

export default props => (
  <card className="relative w-full p-0">
    {props.title && (
      <p className="text-base font-bold px-4 py-3 hr m-0">{props.title}</p>
    )}
    {props.action && (
      <div className="absolute top-0 right-0">{props.action}</div>
    )}
    <div className={`flex flex-col items-center`}>{props.children}</div>
  </card>
);
