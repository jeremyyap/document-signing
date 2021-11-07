import React from 'react';
import { Outlet } from 'react-router';

export default function Documents() {
  return (
    <div>
      <h1>Documents</h1>
      <Outlet />
    </div>
  );
}
