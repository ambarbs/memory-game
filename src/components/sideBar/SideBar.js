import React, { useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { SideBarInnerWrapper, SideBarWrapper, SliderButtonWrapper } from './SideBar.styles';
import SideBarContent from '../sideBarContent/SideBarContent';

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <SideBarWrapper open={open}>
      <SliderButtonWrapper onClick={toggleSideBar} open={open}>
        {open ? <IoIosArrowDropleft /> : <IoIosArrowDropright />}
      </SliderButtonWrapper>
      <SideBarInnerWrapper open={open}>
        <SideBarContent />
      </SideBarInnerWrapper>
    </SideBarWrapper>
  );
};
