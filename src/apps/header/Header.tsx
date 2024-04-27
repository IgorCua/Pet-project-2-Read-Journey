import { NavLink, Outlet } from "react-router-dom"
import { PageWrapper } from "../../components/PageWrapper/PageWrapper"

// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { theme } from "../../styles/themes";
import { Icon } from "../../components/icon/Icon";
import { LogOffBtn, Nav, NavContainer } from "./styled";
import React, { useState } from "react";
import { CustomBackdrop } from "../../components/customBackdrop/CustomBackdrop";
import { Backdrop } from "@mui/material";

const pages = ['Home', 'My library'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function Header() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        // setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleModal = (event: React.MouseEvent<HTMLElement>) => {
        if(event.target === event.currentTarget)setIsModalOpen(!isModalOpen);
    }
    // const handleCloseUserMenu = () => {
    //     // setAnchorElUser(null);
    // };

    return (
        <>
        <PageWrapper>

            <AppBar position="static" sx={{ 
                paddingRight: '13px', 
                paddingLeft: '20px', 
                borderRadius: '15px', 
                overflow: 'hidden',
            }}>
                <Container>
                    <Toolbar disableGutters>
                        <Box sx={{flexGrow: 1}}>
                            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                            <Icon iconName='#icon-logo' sx={{width: '32px', height: '17px'}}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    lineHeight: '18px', /* 100% */
                                    letterSpacing: '0.36px',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    [theme.breakpoints.down('laptop')]:{
                                        display:'none'
                                    } 
                                }}
                            >
                                Reading journey
                            </Typography>
                        </Box>
                            
                        <Box sx={{ 
                            flexGrow: 1, display: 'flex', 
                            [theme.breakpoints.down('tablet')]:{
                                display:'none'
                            } 
                        }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ 
                                        // my: 2, 
                                        color: 'white', 
                                        display: 'block', 
                                        backgroundColor: 'grey' 
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Box>
                        <Box sx={{ 
                            display: 'flex',
                            [theme.breakpoints.up('tablet')]: {
                                display:'none',
                            } 
                        }}>
                            <IconButton
                                size="small"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleOpenNavMenu}
                                onClick={() => setIsModalOpen(true)}
                                color="inherit"
                            >
                                <Icon iconName='#icon-burger-menu' sx={{width: '28px', height: '28px'}}/>
                            </IconButton>
                            <Backdrop 
                                open={isModalOpen}
                                onClick={handleModal}
                                sx={{justifyContent: 'flex-end'}}
                            >
                                <NavContainer>
                                    <IconButton
                                    size="small"
                                    aria-label="close navigation"
                                    aria-controls="menu-appbar"
                                    // aria-haspopup="true"
                                    onClick={() => setIsModalOpen(false)}
                                    color="inherit"
                                    sx={{width: '38px', height: '38px'}} 
                                    >
                                        <Icon 
                                            iconName='#icon-close' 
                                            sx={{width: '28px', height: '28px'}} 
                                            onClick={() => setIsModalOpen(false)}
                                        />
                                    </IconButton>
                                    <Nav>
                                        <NavLink to={'/recommended'} onClick={handleModal}>Home</NavLink>
                                        <NavLink to={'/library'} onClick={handleModal}>My library</NavLink>
                                    </Nav>
                                    <LogOffBtn>Log out</LogOffBtn>
                                </NavContainer>
                            </Backdrop>
                            {/* <Nav>
                                <NavLink to={'/recommended'}>Home</NavLink>
                                <NavLink to={'/library'}>My library</NavLink>
                            </Nav> */}
                            {/* <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    // [theme.breakpoints.up('mobile')]: {
                                    //     display:'none'
                                    // }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu> */}
                            
                        </Box>
                    </Toolbar>
                </Container>
                                
            </AppBar>
            <Outlet/>
        </PageWrapper>
        </>
    );
}