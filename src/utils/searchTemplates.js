const searchTemplates = (array, searchValue) => {
  let searchResult = [];
  if (searchValue !== '' || searchValue !== ' ') {
    searchResult = array.filter(
      (item) => item.name.includes(searchValue)
        || item.description.includes(searchValue),
    );

    return searchResult;
  }

  return array;
};

export default searchTemplates;
