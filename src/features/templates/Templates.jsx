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
    // category,
    // order,
    // date
  } = useSelector((state) => state.templates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [templatesToDisplay, setTemplatesToDisplay] = useState([]);

  const getTemplatesForDisplay = (array, pageNumber, itemsPerPage) => {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = pageNumber * itemsPerPage;

    return array.slice(start, end);
  };

  useEffect(() => {
    if (templates) {
      const displayTemplates = getTemplatesForDisplay(
        templates,
        currentPage,
        TEMPLATESPERPAGE,
      );
      setTemplatesToDisplay(displayTemplates);
    }
  }, [currentPage, templates]);

  const fetchPage = () => {
    setCurrentPage();
  };

  return (
    <div>
      <TemplateHeader />
      {loading && <TemplatesSkeleton />}

      {hasErrors && <p>There are errors</p>}

      {!loading && templatesToDisplay && (
        <>
          {/* <TemplateHeader /> */}
          <TemplateAlert />
          <div className="sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3 md:gap-5">
            {templatesToDisplay.map((template) => (
              <TemplateCard
                key={template.name}
                template={template}
              />
            ))}
          </div>
          <Pagination
            totalCount={templates?.length}
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
