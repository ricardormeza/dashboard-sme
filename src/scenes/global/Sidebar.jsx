import { useState } from 'react';
import { ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens (theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');
    return (
        <Box
        sx={{
            "& .pro-sidebar-inner":{
                background:`${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper":{
                brackgroundColor: "transparent !important"
            },
            "& .pro-inner-item":{
                padding: "5px 35px 5px 20px !important"
            }
            // 1:03:51
        }}
        >

        </Box>
    );
};

export default Sidebar;