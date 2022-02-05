import React from 'react';

const DISPLAYLIST = Array(31)
  .fill(1)
  .map((x, y) => x + y);

const TemplatesSkeleton = () => (
  <div className="sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5">
    {DISPLAYLIST.map((x) => (
      <div className="h-40" key={x}>
        <div className="skeleton w-4/5 h-10 my-1" />
        <div className="skeleton h-16 my-1" />
        <div className="skeleton h-10 my-1" />
      </div>
    ))}
  </div>
);

export default TemplatesSkeleton;
