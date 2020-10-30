import React, { useRef, useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { SideBarInnerWrapper, SideBarWrapper, SliderButtonWrapper } from './SideBar.styles';
import SideBarContent from '../sideBarContent/SideBarContent';
import { useOutsideNotifier } from '../common/hooks/customHooks';

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideNotifier(wrapperRef, setOpen, [false]);
  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <SideBarWrapper open={open} ref={wrapperRef}>
      <SliderButtonWrapper onClick={toggleSideBar} open={open}>
        {open ? <IoIosArrowDropleft /> : <IoIosArrowDropright />}
      </SliderButtonWrapper>
      <SideBarInnerWrapper open={open}>
        <SideBarContent />
      </SideBarInnerWrapper>
    </SideBarWrapper>
  );
};
