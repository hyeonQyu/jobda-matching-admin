import React from 'react';

export interface DropdownArrowIconProps {
    color?: string;
    isSmall?: boolean;
}

const colorMap = {
    blue: '#0288E2',
    black: '#6A7684',
    green: '#00A850',
    purple: '#6E5BC1',
    white: '#FFFFFF',
};

const DropdownArrowIcon = (props: DropdownArrowIconProps) => {
    const { color, isSmall } = props;

    const fillColor = color ? colorMap[color] : colorMap.black;
    const size = isSmall ? 14 : 20;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
            <g transform="translate(-215 -482)">
                <rect className="a" width="20" height="20" transform="translate(215 482)" fill="#fff" opacity={0} />
                <path
                    className="b"
                    d="M-114.346-30.939a.483.483,0,0,1,0-.707l.217-.208a.539.539,0,0,1,.371-.146h7.516a.539.539,0,0,1,.371.146l.217.208a.483.483,0,0,1,0,.707l-3.975,3.791a.539.539,0,0,1-.742,0Z"
                    transform="translate(335 522)"
                    fill={fillColor}
                />
            </g>
        </svg>
    );
};

export default DropdownArrowIcon;
