import React from 'react';

const SearchBarIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g className="a" style={{ opacity: 0.3 }}>
                <rect className="b" style={{ fill: '#fff', opacity: 0 }} width="20" height="20" transform="translate(20 20) rotate(180)" />
                <path
                    className="c"
                    style={{ fill: '#6a7684' }}
                    d="M10.791,11.878,11.54,12.9a3.019,3.019,0,0,0,.3.354l3.071,3.015a.5.5,0,0,0,.71,0l.7-.7a.5.5,0,0,0,0-.71L13.3,11.868a2.981,2.981,0,0,0-.429-.356l-1.011-.69"
                    transform="translate(1 1)"
                />
                <path
                    className="c"
                    style={{ fill: '#6a7684' }}
                    d="M7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Zm0,9A3.5,3.5,0,1,1,11,7.5,3.5,3.5,0,0,1,7.5,11Z"
                    transform="translate(1 1)"
                />
            </g>
        </svg>
    );
};

export default SearchBarIcon;
