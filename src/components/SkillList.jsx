import React from 'react';

const SkillList = ({ title, items }) => {
    return (
        <div className="mb-6 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">{title}</h3>
            <ul className="space-y-1.5">
                {items.map((item, index) => (
                    <li key={index} className="text-md font-light text-gray-600 flex items-start ml-3">
                        <span className="mr-4 text-gray-600">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillList;
