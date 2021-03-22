import React from 'react';
import Link from 'next/link';
import { Table } from 'reactstrap';

const table = ({ posts }) => {
  return (
    <Table hover>
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
      {/* <th>Description</th> */}
      {/* <th>Category</th>
      <th>Subscribers</th> */}
      <th>Email</th>
      {/* <th>Location</th> */}
    </tr>
  );
};

const renderItems = (items) => {
  return items.map((element, key) => {
    return (
      <tr key={key}>
        <th scope="row">{element.channel_name}</th>
        <td>{element.channel_url}</td>
        {/* <td>{element.description}</td>
        <td>{element.socialblade_category}</td> */}
        {/* <td>{element.subscribers}</td> */}
        <td>{element.bio_email}</td>
        {/* <td>{element.location}</td> */}
      </tr>
    );
  });
};

export default table;
