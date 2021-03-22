import React from 'react';
import Link from 'next/link';
import { Table } from 'reactstrap';

const table = ({ posts }) => {
  return (
    <Table hover className="table  table-bordered ">
      <thead className="thead-light">{renderTableHeader()}</thead>
      <tbody>{renderItems(posts)}</tbody>
    </Table>
  );
};

const renderTableHeader = () => {
  return (
    <tr>
      <th>Name</th>
      <th>URL</th>
      <th>Email</th>
    </tr>
  );
};

const renderItems = (items) => {
  return items.map((element, key) => {
    return (
      <tr key={key}>
        <th scope="row">{element.channel_name}</th>
        <td>{element.channel_url}</td>
        <td>{element.bio_email}</td>
      </tr>
    );
  });
};

export default table;
