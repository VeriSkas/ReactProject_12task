import React, { FC, ReactNode, useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Backdrop } from '../../../shared/components/Backdrop/ui/Backdrop';
import { navLinks } from '../config/navLinks';
import classes from './Sidebar.module.scss';

export const Sidebar: FC<{}> = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = navLinks;

  const onClose = (): void => {
    setIsOpen(false);
  };

  const openHandler = (): void => {
    setIsOpen((value) => !value);
  };

  const renderLinks = (): ReactNode =>
    links.map((link) => (
      <li key={link.label}>
        <NavLink to={link.to} onClick={onClose}>
          <span>{t(link.label)}</span>
        </NavLink>
      </li>
    ));

  return (
    <>
      <div className={isOpen ? classes.HeaderIcon : `${classes.HeaderIcon} ${classes.close}`}>
        <span onClick={openHandler}>&#9776;</span>
      </div>
      <div className={classes.Sidebar}>
        <nav className={isOpen ? classes.SideBar : `${classes.SideBar} ${classes.close}`}>
          <div className={classes.NavHeader}></div>
          <ul className={classes.NavLinks}>{renderLinks()}</ul>
          <div className={classes.NavFooter}></div>
        </nav>
        {isOpen && <Backdrop onClick={onClose} />}
      </div>
    </>
  );
};
