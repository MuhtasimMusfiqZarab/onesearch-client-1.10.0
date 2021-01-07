import React from 'react';
import Link from 'next/link';
import { Table } from 'reactstrap';

export default { title: 'DataTable' };

export const table = ({ posts }): JSX.Element => {
  return (
    <Table hover>
      <thead>{renderTableHeader()}</thead>
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
