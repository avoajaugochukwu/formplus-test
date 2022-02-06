import {
  act, render as rtlRender, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { SORTTYPES } from '../contants/templates';

import store from '../store/store';

import Templates from '../features/templates/Templates';

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

const render = (component) => rtlRender(<Provider store={store}>{component}</Provider>);

it('Test if the title of the page is correct', async () => {
  await act(async () => {
    await render(<Templates />);
  });

  waitFor(() => expect(screen.queryByTestId('sort-by')).toHaveTextContent('Sort by'));
});
