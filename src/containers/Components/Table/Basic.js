import React from "react";
import Table from "../../../components/Table";

const data = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "ACTION",
    key: "action",
    render: (text, record) => <i className="fas fa-ellipsis-v ml-5" />
  }
];

export default () => <Table columns={columns} dataSource={data} />;
