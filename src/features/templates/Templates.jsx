import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../components/Pagination';

import { fetchTemplates } from './templates.slicer';

import { TEMPLATESPERPAGE, CATEGROYTYPES, SORTTYPES } from '../../contants/templates';
import {
  sortByDate, sortByString, filterByCategory, searchTemplates,
} from '../../utils';

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
    order,
    date,
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

  useEffect(() => {
    async function fetchData() {
      if (templates) {
        let filteredResult;
        filteredResult = await searchTemplates(templates, searchTerm);

        if (category !== CATEGROYTYPES.ALL) {
          const searchResult = [...filteredResult];
          filteredResult = await filterByCategory(searchResult, category);
        }
        if (date !== SORTTYPES.DEFAULT) {
          const arrayForSorting = [...filteredResult];
          filteredResult = await sortByDate(arrayForSorting, date);
        }

        if (order !== SORTTYPES.DEFAULT) {
          const arrayForSorting = [...filteredResult];
          filteredResult = await sortByString(arrayForSorting, 'name', order);
        }

        const displayTemplates = await getTemplatesForDisplay(
          filteredResult,
          currentPage,
          TEMPLATESPERPAGE,
        );

        setTreatedTemplates(filteredResult);
        setCurrentPageTemplates(displayTemplates);
      }
    }
    fetchData();
  }, [currentPage, templates, searchTerm, category, date, order]);

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
          <TemplateAlert />
          <div className="flex justify-between">
            <p className="capitalize">
              {category}
              {' '}
              Templates
            </p>
            <p>
              {treatedTemplates?.length}
              {' '}
              templates
            </p>
          </div>
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
