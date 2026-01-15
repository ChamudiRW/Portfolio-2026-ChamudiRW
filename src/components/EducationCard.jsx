import React from 'react';

const EducationCard = ({ degree, institution, location, period, focus }) => {
    return (
        <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                {degree}
            </h3>
            <div className="flex justify-between items-center mt-1 mb-2">
                <p className="text-md font-semibold text-gray-900">
                    {institution} • <span className="font-normal text-gray-600">{location}</span>
                </p>
                <span className="text-md text-gray-600 font-normal">{period}</span>
            </div>
            <p className="text-md text-gray-600 font-light leading-relaxed">
                Focus areas: {focus}
            </p>
        </div>
    );
};

export default EducationCard;
