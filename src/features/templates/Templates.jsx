import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../components/Pagination';

import { fetchTemplates } from './templatesSlicer';

import TEMPLATESPERPAGE from '../../contants/templates';

const Templates = () => {
  const templates = useSelector((state) => state.templates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const [templatesToDisplay, setTemplatesToDisplay] = useState([]);

  const getTemplatesForDisplay = (currentPage, templatesPerPage) => {}

  useEffect(() => {
    console.log('Current page changed', currentPage);
    getTemplatesForDisplay(currentPage, TEMPLATESPERPAGE);
  }, [currentPage]);

  const fetchPage = () => {
    setCurrentPage();
  };

  return (
    <div>
      {/* {JSON.stringify(templates)} */}
      <div className="css-z7erpk block h-full w-full" />
      <div className="w-full h-5 skeleton" />
      <Pagination
        totalCount={templates.templates.length}
        displayPerPage={TEMPLATESPERPAGE}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        onPageChange={fetchPage}
      />
    </div>
  );
};

export default Templates;
