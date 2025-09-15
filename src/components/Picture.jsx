import { useState } from 'react';

export default function Picture({ imgLocation }) {
  return (
    <div className="picture">
      <img src={imgLocation} />
    </div>
  );
}
