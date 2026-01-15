import React from 'react';

const ExperienceCard = ({ company, role, period, description }) => {
    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                    {company}
                </h3>
                <span className="text-base font-semibold text-gray-900">{period}</span>
            </div>
            <p className="text-base font-semibold text-gray-900 mb-2">{role}</p>
            <ul className="list-disc list-outside ml-8 space-y-1.5 mb-8">
                {description.map((item, index) => (
                    <li
                        key={index}
                        className="text-base font-light text-gray-600 leading-relaxed pl-2"
                        dangerouslySetInnerHTML={{ __html: item }}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
