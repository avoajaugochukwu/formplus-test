import React from 'react';
import PropTypes from 'prop-types';

const TemplateCard = ({ template }) => (
  <div className="shadow-md">
    <div className="h-40 px-4">
      <h3 className="font-bold text-2xl mb-3 capitalize">{template.name}</h3>
      <p className="font-light text-gray-800">{template.description}</p>
    </div>

    <div className="bg-gray-200 hover:bg-gray-300 px-3 py-2">
      <p className="text-green-600 cursor-pointer">Use template</p>
    </div>

  </div>
);

TemplateCard.propTypes = {
  template: PropTypes.shape({
    created: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TemplateCard;
