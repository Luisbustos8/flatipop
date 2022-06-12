import React from "react";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import TableRowsIcon from '@mui/icons-material/TableRows';

const ViewMode = (props) => {
    const {setMode} = props;

    const handleView = (e) => {
        setMode(e);
    };

    return (
        <div style={{ diplay: 'flex' }}>
           <DashboardCustomizeRoundedIcon 
                style={{ marginRight: '20px'}}
                onClick={(e) => handleView('cards')} 
            />
           <TableRowsIcon 
                onClick={(e) => handleView('list')}
            />
        </div>
    )
}

export default ViewMode;