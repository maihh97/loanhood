import React from 'react'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import '../styles.css'

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <h1 onClick={() => navigate('/')}>LOANHOOD</h1>
            <div className="userMenu">
                <Avatar src="../assets/images/user.png" sx={{ width: 50, height: 50}} />
                <button className="userNameBtn" onClick={handleClick}> Elsa</button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>

    )
}