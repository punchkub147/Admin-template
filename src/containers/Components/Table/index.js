import React from "react";

import TableBasic from "./Basic";

const ComponentTable = (props) => {
  return (
    <React.Fragment>
      <grid>
        <card className="col-span-12 p-4">
          <h5>Tables</h5>
          <hr />
          <br />
          <h6>Basic</h6>
          <br />

          <TableBasic />
        </card>
        <card className="col-span-12 p-4">
          <h6>Basic</h6>
          <br />

          <TableBasic />
        </card>
      </grid>
    </React.Fragment>
  );
};

export default ComponentTable;
