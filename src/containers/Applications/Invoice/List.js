import React from "react";
import Table from "../../../components/Table";
import Select from "../../../components/Select"

const mappingStatusType = (status) => {
  return {
    'paid': 'success',
    'unpaid': 'danger',
    'partially paid': 'warning'
  }[status] || 'secondary'
}

const columns = [
  {
    title: "#",
    key: "",
    render: (value, item, index) => index + 1
  },
  {
    title: "INVOICE#",
    key: "invoice",
  render: (value) => <a href="#" alt="">{value}</a>
  },
  {
    title: "AMOUNT",
    key: "amount",
  },
  {
    title: "DATE",
    key: "date",
    render: (value) => <p className="text-sm">{value}</p>
  },
  {
    title: "CUSTOMER",
    key: "customer",
  },
  {
    title: "TAGS",
    key: "tags",
    render: (value, item) => <div><bullet className={item.tagType}/> {value}</div>
  },
  {
    title: "STATUS#",
    key: "status",
    render: (value) => <badge className={`${mappingStatusType(value)} light rounded-full`}>{value}</badge>
  },
];

const data = [
  {
    invoice: "INV-00123",
    amount: "$3,000",
    date: "23-07-20",
    customer: "Toyota Motor",
    tags: "Car",
    tagType: 'primary',
    status: "paid",
  },
  {
    invoice: "INV-00124",
    amount: "$1,090",
    date: "23-05-19",
    customer: "Pixinvent PVT. LTD",
    tags: "Corporation",
    tagType: 'warning',
    status: "unpaid",
  },
  {
    invoice: "INV-00125",
    amount: "$459.30",
    date: "28-04-19",
    customer: "Communications",
    tags: "Technology",
    tagType: 'danger',
    status: "partially paid",
  },
  {
    invoice: "INV-00126",
    amount: "$8,563",
    date: "06-01-19",
    customer: "Wells Fargo",
    tags: "Food",
    tagType: 'success',
    status: "unpaid",
  },
  {
    invoice: "INV-00123",
    amount: "$3,000",
    date: "23-07-20",
    customer: "Toyota Motor",
    tags: "Car",
    tagType: 'primary',
    status: "paid",
  },
  {
    invoice: "INV-00124",
    amount: "$1,090",
    date: "23-05-19",
    customer: "Pixinvent PVT. LTD",
    tags: "Corporation",
    tagType: 'warning',
    status: "unpaid",
  },
  {
    invoice: "INV-00125",
    amount: "$459.30",
    date: "28-04-19",
    customer: "Communications",
    tags: "Technology",
    tagType: 'danger',
    status: "partially paid",
  },
  {
    invoice: "INV-00126",
    amount: "$8,563",
    date: "06-01-19",
    customer: "Wells Fargo",
    tags: "Food",
    tagType: 'success',
    status: "unpaid",
  },
  {
    invoice: "INV-00123",
    amount: "$3,000",
    date: "23-07-20",
    customer: "Toyota Motor",
    tags: "Car",
    tagType: 'primary',
    status: "paid",
  },
  {
    invoice: "INV-00124",
    amount: "$1,090",
    date: "23-05-19",
    customer: "Pixinvent PVT. LTD",
    tags: "Corporation",
    tagType: 'warning',
    status: "unpaid",
  },
  {
    invoice: "INV-00125",
    amount: "$459.30",
    date: "28-04-19",
    customer: "Communications",
    tags: "Technology",
    tagType: 'danger',
    status: "partially paid",
  },
  {
    invoice: "INV-00126",
    amount: "$8,563",
    date: "06-01-19",
    customer: "Wells Fargo",
    tags: "Food",
    tagType: 'success',
    status: "unpaid",
  },
];

const InvoiceList = (props) => {
  return (
    <grid>
      <div className="col-span-12">
        <button className="primary mb-4">Create Invoice</button>
        <card className="p-0">
          <div className="p-3 flex flex-row">
            <div className="left-icon w-full mr-2">
              <i class="fas fa-search text-indigo-500"></i>
              <input type="text" placeholder="search" />
            </div>
            <Select className="w-56 outline">
              <option>Filter</option>
              <option>Sent</option>
              <option>Downloaded</option>
              <option>Partial Payment</option>
              <option>Paid</option>
            </Select>
            <Select className="w-40 outline">
              <option>Options</option>
              <option>Delete</option>
              <option>Edit</option>
              <option>View</option>
              <option>Send</option>
            </Select>
          </div>
          <Table columns={columns} dataSource={data} />
        </card>
      </div>
    </grid>
  );
};

export default InvoiceList;
