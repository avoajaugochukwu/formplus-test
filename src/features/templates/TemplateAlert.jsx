import React from 'react';
import infoIcon from '../../assets/svg/info-circle-svgrepo-com.svg';

const TemplateAlert = () => (
  <div className="flex alert-color text-center py-3 justify-center mb-20">
    <span className="mt-1 mr-3">
      <img src={infoIcon} alt="info icon" />
    </span>
    <div className="text-sm text-gray-600">
      <p>
        Tada! Get started with a free template.
        Can&apos;t find what you are looking for? Search from the 1000+
        available templates
      </p>
    </div>
  </div>
);

export default TemplateAlert;
