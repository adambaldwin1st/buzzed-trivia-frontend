import React from 'react';

interface SteinIconProps {
    size: 'sm' | 'md' | 'lg' | 'fill';
}

const SteinIcon: React.FC<SteinIconProps> = ({ size }) => {
    const iconPath = new URL('sources/steinLogo.ico', import.meta.url).href;

    let iconSize = '32px'; // Default size

    if (size === 'sm') {
        iconSize = '16px'; // Small size
    } else if (size === 'lg') {
        iconSize = '48px'; // Large size
    }

    let iconStyle = {
        width: iconSize,
        height: iconSize,
    };

    if (size === 'fill') {
        iconStyle = {
            width: '100%',
            height: '100%',
        };
    }

    return (
        <img
            src={iconPath}
            alt="Custom Icon"
            style={iconStyle}
        />
    );
};

export default SteinIcon;
