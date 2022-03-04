import * as React from 'react';
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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from 'next-themes';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const pages = ['About','Skills', 'Projects', 'Contact'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import Link from 'next/link'

//styles 
const headerStyle = 'font-bold text-2xl font-lob cursor-pointer text-current hover:text-green-400 hover:animate-bounce hover:border-green-400 hover:border-b-2'

const Navbar = () => {

  const {systemTheme, theme, setTheme} = useTheme();  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true)
  }, [])
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const renderThemeChanger = () => {
    if(!mounted)return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if(currentTheme === 'dark'){
      return(
        <Tooltip title="Switch to light theme">
        <LightModeIcon className="w-8 h-8 cursor-pointer" onClick={()=>setTheme('light')}/>
        </Tooltip>
        )
    }else{
      return(
        <Tooltip title="Switch to dark theme">
        <DarkModeIcon  className="w-8 h-8 cursor-pointer" onClick={()=>setTheme('dark')}/>
        </Tooltip>
      )
    }
  } 

  return (
    <AppBar position="static" className="app_bar mt-2 shadow-none dark:border-gray-700">
      <Container maxWidth="xl" className="px-20 sm:px-4">
        <Toolbar disableGutters>
          <Typography
            className="font-bold font-Creep text-4xl"
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          Sunil Kurapati
          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <MenuItem key="home" onClick={handleCloseNavMenu}>
            <Typography textAlign="center"><Link href="/"><p className={headerStyle}>Home</p></Link></Typography>
          </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link href={page}><p className={headerStyle}>{page}</p></Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            className="font-bold font-Creep"
          >
            Sunil Kurapati
          </Typography>
          <Box 
          className="space-x-9 items-center justify-center pacity-25 "
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
          <Link href="/" className='hover:font-bold hover:opacity-50 text-current'
          key="home" onClick={handleCloseNavMenu}
          sx={{ my: 2,display: 'block' }}>
          <p className={headerStyle}>Home</p>
         </Link>

            {pages.map((page) => (
              <Link href={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,display: 'block' }}
              >
                <p className={headerStyle}>{page}</p>
              </Link>
            ))}
          </Box>

          {renderThemeChanger()}

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;


// <Box sx={{ flexGrow: 0 }}>
//         //     <Tooltip title="Open settings">
//         //       <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//         //         <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//         //       </IconButton>
//         //     </Tooltip>
//         //     <Menu
//         //       sx={{ mt: '45px' }}
//         //       id="menu-appbar"
//         //       anchorEl={anchorElUser}
//         //       anchorOrigin={{
//         //         vertical: 'top',
//         //         horizontal: 'right',
//         //       }}
//         //       keepMounted
//         //       transformOrigin={{
//         //         vertical: 'top',
//         //         horizontal: 'right',
//         //       }}
//         //       open={Boolean(anchorElUser)}
//         //       onClose={handleCloseUserMenu}
//         //     >
//         //       {settings.map((setting) => (
//         //         <MenuItem key={setting} onClick={handleCloseNavMenu}>
//         //           <Typography textAlign="center">{setting}</Typography>
//         //         </MenuItem>
//         //       ))}
//         //     </Menu>
//         //   </Box>
