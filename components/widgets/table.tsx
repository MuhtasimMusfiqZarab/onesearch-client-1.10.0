import React from 'react';
import Link from 'next/link';
import { Table } from 'reactstrap';

const table = ({ posts }) => {
  return (
    <Table hover>
      <thead>{renderTableHeader()}</thead>
      <tbody>{renderItems(posts)}</tbody>
    </Table>
  );
};

const renderTableHeader = () => {
  return (
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Description</th>
      <th>User</th>
    </tr>
  );
};

const renderItems = (items) => {
  return items.map((element) => {
    return (
      <tr>
        <th scope="row">{element.id}</th>
        <td>{element.title}</td>
        <td>{element.body}</td>
        <td>@{element.userId}</td>
      </tr>
    );
  });
};

export default table;
