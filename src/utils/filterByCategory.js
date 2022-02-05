import { CATEGROYTYPES } from '../contants/templates';

const filterByCategory = (array, categoryType) => {
  let filterResult = [];
  if (categoryType !== CATEGROYTYPES.ALL) {
    filterResult = array.filter((item) => item.category.includes(categoryType));
    return filterResult;
  }
  return array;
};

export default filterByCategory;
