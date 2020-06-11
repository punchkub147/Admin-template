import React from "react";

const InvoiceAdd = props => {
  return <grid>
    <card className="col-span-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <label>Invoice#</label>
          <div className="w-48">
            <input type="text" placeholder="#000"/>
          </div>
        </div>
        <div className="flex items-center">
          <label>Date Issue: </label>
          <div className="w-48">
            <input type="text" placeholder="Select Date"/>
          </div>
          <label>Date Due: </label>
          <div className="w-48">
            <input type="text" placeholder="Select Date"/>
          </div>
        </div>
      </div>
    </card>
    <card className="col-span-2 flex flex-col items-center">
      <grid className="gap-2">
        <div className="col-span-12">
          <button className="primary w-full">Send Invoice</button>
        </div>
        <div className="col-span-12">
          <button className="w-full">Download Invoice</button>
        </div>
        <div className="col-span-6">
          <button className="w-full">Preview</button>
        </div>
        <div className="col-span-6">
          <button className="w-full">Save</button>
        </div>
        <div className="col-span-12">
          <button className="success w-full">Add Payment</button>
        </div>
      </grid>
    </card>
  </grid>;
};

export default InvoiceAdd;
