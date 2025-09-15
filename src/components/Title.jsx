import { useState } from 'react';

export default function Title({ title }) {
  return (
    <>
      <input className="title" value={title} />
    </>
  );
}
