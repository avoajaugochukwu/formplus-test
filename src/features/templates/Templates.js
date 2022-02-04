import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../components/Pagination";

import { fetchTemplates } from "./templatesSlicer";

const Templates = () => {
  const templates = useSelector((state) => state.templates);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  const fetchPage = () => {
    setCurrentPage()
  }

  return (
    <div>
      {/* {JSON.stringify(state)} */}
      <button>Me</button>
      <div className="css-z7erpk block h-full w-full"></div>
      <div className="w-full h-5 skeleton"></div>
      <Pagination
        totalCount={templates.templates.length}
        displayPerPage={15}
        currentPage={currentPage}
        onPageChange={fetchPage}
      />
    </div>
  );
};

export default Templates;
