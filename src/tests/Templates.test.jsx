import { SORTTYPES } from '../contants/templates';

import mockData from './mockData';

import { sortByDate } from '../utils';

describe('Test sortByFunction', () => {
  it('Ascending order', () => {
    const ascending = sortByDate(mockData, SORTTYPES.ASCENDING);
    const firstCreatedDate = ascending[0].created;
    expect(firstCreatedDate).toEqual('2022-02-04T20:26:29.412308');
  });

  it('Descending order', () => {
    const ascending = sortByDate(mockData, SORTTYPES.DESCENDING);
    const firstCreatedDate = ascending[0].created;
    expect(firstCreatedDate).toEqual('2022-02-04T20:26:29.675314');
  });
});
