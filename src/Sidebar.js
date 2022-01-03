import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import CottageIcon from '@mui/icons-material/Cottage';
import SearchIcon from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/NotificationsNone';
import { MailOutline, BookmarkBorder, ListAlt, PermIdentity, MoreHoriz } from '@mui/icons-material';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">

            <TwitterIcon className="sidebar__twitterIcon"/>
            
            <SidebarOption Icon={CottageIcon} text='Home' active='true'/>
            <SidebarOption Icon={SearchIcon} text='Explore'/>
            <SidebarOption Icon={Notifications} text='Notifications'/>
            <SidebarOption Icon={MailOutline} text="Messages" />
            <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
            <SidebarOption Icon={ListAlt} text="Lists" />
            <SidebarOption Icon={PermIdentity} text="Profile" />
            <SidebarOption Icon={MoreHoriz} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>tweet</Button>
        </div>
    )
}

export default Sidebar
