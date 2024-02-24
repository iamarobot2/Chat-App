import { IconButton } from '@mui/material';
import './Style.css' 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import Conversations from './Conversations';

function Sidebar() {
    return (
        <div className='sidebarContainer flex flex-col'>
            <div className="sbheader flex justify-between">
                <div>
                    <IconButton>
                        <AccountCircleIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <PersonAddIcon />
                    </IconButton>
                    <IconButton>
                        <GroupAddIcon />
                    </IconButton>
                    <IconButton>
                        <AddCircleIcon />
                    </IconButton>
                    <IconButton>
                        <NightlightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sbsearch flex items-center">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder='search' className='searchbox' />
            </div>
            <div className="sbconversation">
                <Conversations />
            </div>
        </div>
    );
}

export default Sidebar;