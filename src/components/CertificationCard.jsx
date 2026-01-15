import React from 'react';

const CertificationCard = ({ title, period, issuer }) => {
    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                {title}
            </h3>
            <p className="text-base font-light text-gray-600 mb-2">{period}</p>
            <p className="text-base font-light text-gray-600">{issuer}</p>
        </div>
    );
};

export default CertificationCard;
