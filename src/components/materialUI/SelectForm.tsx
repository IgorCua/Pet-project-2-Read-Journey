import { 
    FormControl, 
    MenuItem, 
    Select, 
    SelectChangeEvent 
} from "@mui/material";
import { theme } from "../../styles/themes";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { booksGetUserBooks } from "../../redux/books/operations";
import { store } from "../../redux/store";

type AppDispatch = typeof store.dispatch;

export const SelectForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedBooks, setSelectedBooks] = useState('');
    
    const handleSelect = (event: SelectChangeEvent) => {
        setSelectedBooks(event.target.value);
        if(!event.target.value) dispatch(booksGetUserBooks(null));
        if(event.target.value) {
            dispatch(booksGetUserBooks({status: event.target.value}));
        };
    }

    return <FormControl sx={{ 
        minWidth: 120,
        width: '120px',
        
    }}>
        <Select
            value={selectedBooks}
            onChange={handleSelect}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{
                padding: '0px',
                // backgroundColor: theme.palette.custom.bg4,
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.custom.authInputBorder}`,
                '.MuiSelect-select': {
                    padding: '12px 0px 12px 14px'
                },
                '.MuiSelect-outlined': {

                },
                '.MuiSelect-icon':{
                    color: theme.palette.custom.textMain
                },
            }}
            IconComponent={ExpandMore}
            MenuProps={{
                PaperProps: {
                  sx: {
                    marginTop: '4px',
                    minHeight: '122px',
                    // overflowx: 'hidden'
                    backgroundColor: theme.palette.custom.bg2,

                    borderRadius: '12px',
                  }
                },
                MenuListProps:{
                    sx: {
                        padding:'14px 0px',
                        width: '100%',
                        // paddingTop: '12px',
                        color: theme.palette.custom.textSecondary,
                        // overflowx: 'hidden'
                        
                        '& li': {
                            padding: '0px 14px',
                            // paddingLeft: '5px',
                            minHeight:'10px',
                            width: '100%',

                            fontSize: '12px',
                            lineHeight: '18px'
                        },
                        '& li.Mui-selected': {
                            color: theme.palette.custom.textMain,
                            backgroundColor: 'none'
                        },
                        '& li:not(:last-child)':{
                            marginBottom: '7px'
                        }
                    }
                },
                
            }}
        >
            {/* <MenuItem value="">All books</MenuItem> */}
            <MenuItem value={'unread'}>Unread</MenuItem>
            <MenuItem value={'in-progress'}>In progress</MenuItem>
            <MenuItem value={'done'}>Done</MenuItem>
            <MenuItem value={''}>All books</MenuItem>
            {/* <MenuItem value={'All books'}sx={{minHeight: '20px'}}>All Books</MenuItem> */}
        </Select>
    </FormControl>
}