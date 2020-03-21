import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import i18n from '../i18n';

export const LanguageMenu = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Button
        name="el1"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        {children}
      </Button>
      <Menu
        id="language-menu"
        name="el1"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem
          onClick={() => {
            changeLanguage('en');
            handleClose();
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage('cs');
            handleClose();
          }}
        >
          Česky
        </MenuItem>
      </Menu>
    </>
  );
};
