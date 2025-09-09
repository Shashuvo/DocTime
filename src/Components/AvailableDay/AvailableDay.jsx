import React from 'react';

const AvailableDay = ({ availableDay }) => {
    return (
        <div>
            <div>
                <p className='text-[#FFA000] border-1 bg-[#FFA000]/10 border-[#FFA000]/20 rounded-2xl font-medium text-[14px] px-2 py-1'>{availableDay}</p>
            </div>
        </div>
    );
};

export default AvailableDay;