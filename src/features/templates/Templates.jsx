import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../components/Pagination';

import { fetchTemplates } from './templates.slicer';

import { TEMPLATESPERPAGE } from '../../contants/templates';
import TemplateCard from './TemplateCard';
import TemplatesSkeleton from './TemplatesSkeleton';
import TemplateHeader from './TemplateHeader';
import TemplateAlert from './TemplateAlert';

const Templates = () => {
  const {
    templates,
    loading,
    hasErrors = false,
    searchTerm,
    category,
    // order,
    // date
  } = useSelector((state) => state.templates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageTemplates, setCurrentPageTemplates] = useState([]);
  const [treatedTemplates, setTreatedTemplates] = useState([]);

  const getTemplatesForDisplay = (array, pageNumber, itemsPerPage) => {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = pageNumber * itemsPerPage;

    return array.slice(start, end);
  };

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

  // const filterByCategory = async (array, category) => {
  //   let filterResult = [];
  //   if (category !== CATEGROYTYPES.ALL) {
  //     filterResult = array.filter((item) => item.category.includes(category));
  //     return filterResult;
  //   }
  //   return array;
  // };

  useEffect(() => {
    async function fetchData() {
      if (templates) {
        const searchResult = await searchTemplates(templates, searchTerm);
        setTreatedTemplates(searchResult);

        const displayTemplates = await getTemplatesForDisplay(
          searchResult,
          currentPage,
          TEMPLATESPERPAGE,
        );
        setCurrentPageTemplates(displayTemplates);
      }
    }
    fetchData();
  }, [currentPage, templates, searchTerm, category]);

  const fetchPage = () => {
    setCurrentPage();
  };

  return (
    <div>
      <TemplateHeader />
      {loading && <TemplatesSkeleton />}

      {hasErrors && <p>There are errors</p>}

      {!loading && currentPageTemplates && (
        <>
          {/* <TemplateHeader /> */}
          <TemplateAlert />
          <div className="sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5">
            {currentPageTemplates.map((template) => (
              <TemplateCard key={template.name} template={template} />
            ))}
          </div>
          <Pagination
            totalCount={treatedTemplates?.length}
            displayPerPage={TEMPLATESPERPAGE}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            onPageChange={fetchPage}
          />
        </>
      )}
    </div>
  );
};

export default Templates;
