import React from 'react';
import Cell from '../components/Cell';

const Home = () => {
  const rows = 25;
  const cols = 40;

  return (
    <div className="p-4">
      <div className="grid grid-cols-40 gap-0.5">
        {Array.from({ length: rows * cols }, (_, i) => (
          <Cell key={i} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;