import { SORTTYPES } from '../contants/templates';

const sortByDate = (array, sortType) => {
  let filterResult;
  if (sortType === SORTTYPES.ASCENDING) {
    filterResult = array.sort((a, b) => (Date.parse(a.created) > Date.parse(b.created) ? 1 : -1));
  }
  if (sortType === SORTTYPES.DESCENDING) {
    filterResult = array.sort((a, b) => (Date.parse(a.created) > Date.parse(b.created) ? -1 : 1));
  }
  return filterResult;
};

export default sortByDate;
