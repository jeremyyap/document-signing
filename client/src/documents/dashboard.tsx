import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h2><Link to="/documents/new">Create a document</Link></h2>
      <h2>Assigned to me</h2>
      <h2>Recent</h2>
    </div>
  );
}
