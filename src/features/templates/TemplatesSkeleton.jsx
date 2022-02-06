import React from 'react';
import styles from './templates.module.css';

const DISPLAYLIST = Array(31)
  .fill(1)
  .map((x, y) => x + y);

const TemplatesSkeleton = () => (
  <>
    <div className="flex justify-between gap-x-5 mt-4 mb-10">
      <div className={`${styles.skeleton} w-1/2 h-10 my-1`} />
      <div className="h-28 w-1/2">
        <div className={`${styles.skeleton} h-10 my-1`} />
        <div className={`${styles.skeleton} h-10 my-1`} />
      </div>
    </div>

    <div className="sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5">
      {DISPLAYLIST.map((x) => (
        <div className="h-40" key={x}>
          <div className={`${styles.skeleton} w-4/5 h-10 my-1`} />
          <div className={`${styles.skeleton} h-16 my-1`} />
          <div className={`${styles.skeleton} h-10 my-1`} />
        </div>
      ))}
    </div>
  </>
);

export default TemplatesSkeleton;
