// import React from 'react';
import * as Si from 'react-icons/si';
import * as Fa from 'react-icons/fa';
import * as Vsc from 'react-icons/vsc';
import * as Wi from 'react-icons/wi';
import * as Gi from 'react-icons/gi';
import * as Di from 'react-icons/di';

const iconMap = [Di, Fa, Vsc, Wi, Gi, Si];
export const getCardIcons = (iconStyle = 0) => {
  if (iconStyle >= 0) {
    // const imports = await import(`node${iconMap[iconStyle]}`);
    // const imports =  await import(`../../../node_modules/${iconMap[iconStyle]}`);
    return iconMap[iconStyle];
  }
};
