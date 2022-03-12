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
import { useRouter } from 'next/router'
//styles 
const headerStyle = 'font-bold text-2xl font-Acme cursor-pointer text-current hover:text-green-400 hover:border-green-400 hover:border-b-2 transition ease-in-out  hover:scale-125 shadow-xl rounded-xl w-28 text-center'

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
        <Tooltip title="Switch to light theme" className="">
          <LightModeIcon className="mode_ln" onClick={()=>setTheme('light')}/>
        </Tooltip>
        )
    }else{
      return(
        <Tooltip title="Switch to dark theme" className="">
          <DarkModeIcon  className="mode_ln" onClick={()=>setTheme('dark')}/>
        </Tooltip>
      )
    }
  } 
  const router = useRouter();
  return (
    <AppBar position="static" className="app_bar mt-2 dark:border-gray-700">
      <Container maxWidth="xl" className="px-20 sm:px-0">
        <Toolbar disableGutters>
          <Typography
            className="app_bar_head"
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <p className="mr-10"> {`<`} </p>Sunil Kurapati<p className="ml-10">{`/>`}</p>
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
            <Typography textAlign="center" className={router.pathname=="/"?"active":""}><Link passHref href="/"><p className={headerStyle}>Home</p></Link></Typography>
          </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className={router.pathname==`/${page}`?"active":""}><Link passHref href={page}><p className={headerStyle}>{page}</p></Link></Typography>
                </MenuItem>
              ))}
            </Menu>
            {console.log(router.pathname)}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            className="app_bar_head"
          >
            <p className="mr-4"> {`<`} </p>Sunil Kurapati<p className="ml-4">{`/>`}</p>
          </Typography>
          <Box 
          className="space-x-9 items-center justify-center pacity-25 "
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Typography className={router.pathname==`/`?"active":""}>
          <Link passHref href="/" className='hover:font-bold hover:opacity-50 text-current'
          key="home" onClick={handleCloseNavMenu}
          sx={{ my: 2,display: 'block' }}>
          <p className={headerStyle}>Home</p>
         </Link>
         </Typography>

            {pages.map((page,i) => (
             <Typography key={i} className={router.pathname==`/${page}`?"active":""}> 
              <Link passHref href={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,display: 'block' }}
              >
                <p className={headerStyle}>{page}</p>
              </Link>
              </Typography>
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
