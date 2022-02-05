import { SORTTYPES } from '../contants/templates';

const sortByString = (array, sortField, sortType) => {
  let filterResult;
  if (sortType === SORTTYPES.ASCENDING) {
    filterResult = array.sort((a, b) => (a[sortField] > b[sortField] ? 1 : -1));
  }
  if (sortType === SORTTYPES.DESCENDING) {
    filterResult = array.sort((a, b) => (a[sortField] > b[sortField] ? -1 : 1));
  }
  return filterResult;
};

export default sortByString;
