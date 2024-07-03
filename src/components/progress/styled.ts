import { Opacity } from "@mui/icons-material";
import { Box, List, ListItem, Typography } from "@mui/material";
import { maxWidth, styled, width } from "@mui/system";

export const Container = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('tablet')]: {
        width: '50%',
        // maxWidth: '100%',
    },
    [theme.breakpoints.up('desktop')]: {
        width: '100%',
        // maxWidth: '100%',
    }
})) as typeof Box;

export const HeaderContainer = styled(Box)(({theme}) => ({
    marginBottom: '22px',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.breakpoints.up('tablet')]: {
        marginBottom: '16px',
    },
    [theme.breakpoints.up('desktop')]: {
        marginBottom: '20px',
    }
})) as typeof Box;

export const Header = styled(Typography)(({theme}) => ({
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: '700',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]: {
        fontSize: '20px',
        lineHeight: '20px',
    }
})) as typeof Typography;

export const IconContainer = styled(Box)(({theme}) => ({
    width: '40px',
    display: 'flex',
    justifyContent: 'space-between'
})) as typeof Box;

export const ScrollWrapper = styled(Box)(({theme})=>({
    backgroundColor: 'green',
    right: '-10px'
}));

export const ListContainer = styled(Box)(({theme})=>({
    padding: '16px 16px 16px 23px',
    height: '211px',
    backgroundColor: theme.palette.custom.bg2,
    position: 'relative',
    overflowY:'auto',

    // borderLeft: `2px solid ${theme.palette.custom.bg3}`,
    borderRadius: '12px',

    [theme.breakpoints.up('tablet')]: {
        height: '252px'
    },
    [theme.breakpoints.up('desktop')]: {
        // width: '50%',
        height: '373px',
    }
}));

export const DiaryList = styled(List)(({theme}) => ({
    // maxHeight: '211px',
    paddingLeft: '16px',
    transitionDuration: '250ms',
    transitionProperty: 'color, opacity',
    // overflowY: 'visible',
    // overflowY: 'scroll',
    // overflow:'visible',


    color: theme.palette.custom.textSecondary,

    borderLeft: `2px solid ${theme.palette.custom.bg3}`,
    // borderRadius: '12px',

    '& li:nth-of-type(1) div:nth-of-type(1) p:nth-of-type(1)': {
        color: theme.palette.custom.textMain
    },

    '& li:nth-of-type(1) svg:first-of-type':{
        // '& svg': {
            opacity: '1'
        // }
    },

    '& .MuiListItem-root:nth-last-of-type(n + 2)': {
        marginBottom: '17px'
    },

    // '$ li:not(:first-child)': {
    // '& li:hover': {
    //     '& svg':{
    //         opacity: '1',
    //     },

    //     '& div:nth-of-type(1) p:nth-of-type(1)':{
    //         color: theme.palette.custom.textMain
    //     }
    //     // color: 'red',
    //     // border: `2px solid ${theme.palette.custom.bg4}`,
    // }
})) as typeof List;

export const DiaryListItem = styled(ListItem)(({theme}) => ({
    position: 'relative',
    transitionDuration: '250ms',
    transitionProperty: 'color, opacity',
    
    '& .MuiBox-root':{
        alignSelf: 'start'
    },

    '& .MuiBox-root:nth-of-type(2)':{
        marginRight: '6px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    // '&:hover': {
    //     '& svg':{
    //         opacity: '1',
    //     },

    //     '& div:nth-of-type(1) p:nth-of-type(1)':{
    //         color: theme.palette.custom.textMain
    //     }
    // }

}));

// export const Square = styled(Box)(({theme}) => ({
//     width: '16px',
//     height: '16px',

//     border: `4px solid ${theme.palette.custom.bg1}`,
//     borderRadius: '4px'
// })) as typeof Box;

export const ListItemContainer = styled(Box)(({theme}) => ({
    // '&:nth-of-type(1)': {
        // color: theme.palette.custom.textMain
    // }
    [theme.breakpoints.up('tablet')]: {
        fontSize: '16px',
        lineHeight: '18px',
    }
})) as typeof Box;

export const ListItemDate = styled(Typography)(({theme}) => ({
    marginBottom: '16px',

    fontSize: '12px',
    lineHeight: '12px',
    // color: theme.palette.custom.textSecondary,

    // '&:first-of-type': {
    //     color: theme.palette.custom.textMain
    // }

    [theme.breakpoints.up('tablet')]: {
        fontSize: '16px',
        lineHeight: '18px',
    }
})) as typeof Typography;

export const ListItemPercent = styled(Typography)(({theme}) => ({
    marginBottom: '4px',

    fontSize: '14px',
    lineHeight: '18px',

    color: theme.palette.custom.textMain,

    [theme.breakpoints.up('tablet')]: {
        fontSize: '20px',
        lineHeight: '20px',
    },
})) as typeof Typography;

export const ListItemMins = styled(Typography)(({theme}) => ({
    // color: theme.palette.custom.textSecondary
    fontSize: '10px',
    lineHeight: '12px',

    [theme.breakpoints.up('tablet')]: {
        fontSize: '12px',
        lineHeight: '14px',
    }
})) as typeof Typography;

export const ListItemPagesNum = styled(Typography)(({theme}) => ({
    marginBottom: '16px',
    // color: theme.palette.custom.textSecondary
    fontSize: '12px',
    lineHeight: '12px',

    [theme.breakpoints.up('tablet')]: {
        fontSize: '14px',
        lineHeight: '18px',
    }
})) as typeof Typography;

export const ListItemPagesPerHour = styled(Typography)(({theme}) => ({
    width: '43px',

    // color: theme.palette.custom.textSecondary
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    
    [theme.breakpoints.up('tablet')]: {
        width: '59px',
        fontSize: '12px',
        lineHeight: '14px',
    }
})) as typeof Typography;

export const Text = styled(Typography)(({theme}) => ({

})) as typeof Typography;

export const StatisticsDescription = styled(Typography)(({theme}) => ({
    marginBottom: '20px',
    fontSize: '14px',
    lineHeight: '18px',
    color: theme.palette.custom.textSecondary
})) as typeof Typography;

export const ProgressContainer = styled(Box)(({theme}) => ({
    padding: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    // padding: '16px 16px 16px 23px',
    // maxHeight: '211px',
    backgroundColor: theme.palette.custom.bg2,
    // position: 'relative',

    borderRadius: '12px',

    [theme.breakpoints.up('tablet')]: {
        padding: '28px',
    },
    [theme.breakpoints.up('desktop')]: {
        padding: '20px',
    }
})) as typeof Box;

export const CircleContainer = styled(Box)(({theme}) => ({
    marginBottom: '10px',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
})) as typeof Box;

export const DataContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    // width: '95px',
    gap: '15px',
    // justifyContent:'center',
    // alignItems: 'center',
    // position: 'relative'
    // border: '1px solid red'
    [theme.breakpoints.up('tablet')]: {
        // width: '79px'
    }
})) as typeof Box;

export const Square = styled(Box)(({theme}) => ({
    width: '14px',
    height: '14px',
    display: 'flex',
    // justifyContent:'center',
    // alignItems: 'center',
    // position: 'relative'
    backgroundColor: theme.palette.custom.utilGreen,

    borderRadius: '4px'
})) as typeof Box;

export const DataTextContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    // width: '66px',
    flexDirection: 'column',
    // justifyContent:'center',
    // alignItems: 'center',
    // position: 'relative'
    // border: '1px solid green'
    [theme.breakpoints.up('tablet')]: {
        // width: '79px'
    }
})) as typeof Box;
