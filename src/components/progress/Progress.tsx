// interface PropsInterface {
//     startPage: string,
//     startReading: string,
//     finishPage?: number,
//     finishReading?: string,
//     speed?: number,
//     status?: 'active' | 'inactive'
// }

import { useSelector } from "react-redux"
import { selectBookInfo } from "../../redux/books/selectors"
import { 
    CircleContainer,
    Container, 
    DataContainer, 
    DataTextContainer, 
    DiaryList, 
    DiaryListItem, 
    Header, 
    HeaderContainer, 
    IconContainer, 
    ListContainer, 
    ListItemContainer, 
    ListItemDate, 
    ListItemMins, 
    ListItemPagesNum, 
    ListItemPagesPerHour, 
    ListItemPercent, 
    ProgressContainer, 
    ScrollWrapper, 
    Square 
} from "./styled";
import { ButtonBase, IconButton, Typography } from "@mui/material";
import { Icon } from "../icon/Icon";
import { useState } from "react";
import { Opacity } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { booksDeleteReading } from "../../redux/books/operations";
import { AppDispatch } from "../../redux/store";
import { theme } from "../../styles/themes";

export const Progress = () => {
    const bookInfo = useSelector(selectBookInfo);
    const progressArr = bookInfo ? bookInfo.progress : null;
    const [isDiary, setIsDiary] = useState(true);
    const dispatch = useDispatch<AppDispatch>();

    const progressDataArr: any = progressArr && progressArr.map((elem) => {
        let result: any = {};
        
        const dateStart: any = elem.startPage && new Date(elem.startReading);
        const dateEnd: any = elem.finishReading && new Date(elem.finishReading);
        if(dateStart && dateEnd){
            result.minutes = (((dateEnd.getTime() - dateStart.getTime()) / 1000) / 60).toFixed(1);

        }
        // result.minutes = (((dateEnd.getTime() - dateStart.getTime()) / 1000) / 60).toFixed(1);
        result.finishedPages = !elem.finishPage ? elem.startPage : elem.finishPage;
        // result.date = elem.startReading.split('T')[0].split('-').reverse().join('.')
        result.date = getFormattedDate(new Date(elem.startReading));
        
        if(bookInfo){
            if(elem.finishPage) result.percent = (elem.finishPage / bookInfo.totalPages * 100).toFixed(1);
            if(!elem.finishPage) result.percent = (elem.startPage / bookInfo.totalPages * 100).toFixed(1);
        }

        return result;
    });
    
    function getFormattedDate(date: any) {
        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
      
        return day + '.' + month + '.' + year;
    }

    const handleDeleteDiaryData = (readingId: string) => {
        console.log('delete', readingId);
        if(bookInfo?._id){
            dispatch(booksDeleteReading({bookId: bookInfo._id, readingId: readingId}));
        }
    }

    const CountReadingPercent = () => {
        let result = 0;
        const lastProgress = bookInfo?.progress[bookInfo.progress.length - 1];
        if(lastProgress){
            if(lastProgress.finishPage) result = +(lastProgress.finishPage / bookInfo.totalPages * 100).toFixed(2);
            if(!lastProgress.finishPage) result = +(lastProgress.startPage / bookInfo.totalPages * 100).toFixed(2);
        }
        return result;
    }

    const getFinishedPages = () => {
        const lastProgress = bookInfo?.progress[bookInfo.progress.length - 1]
        if(lastProgress?.finishPage) return lastProgress.finishPage;
        if(!lastProgress?.finishPage) return lastProgress?.startPage;
    }

    console.log(isDiary);

    return <Container component={'div'}>
        <HeaderContainer>
            <Header variant="h2">
                {isDiary ? 'Diary' : 'Progress'}
            </Header>
            <IconContainer>
                <IconButton size="small" sx={{padding: '2px'}} onClick={() => setIsDiary(true)}>
                    <Icon 
                        iconName={'#icon-sand-clock'}
                        sx={{
                            width: '16px', 
                            height: '16px', 
                            opacity: `${isDiary ? 1 : 0.3}`,
                            cursor: 'pointer',
                            '&:hover':{
                                opacity: '1'
                            },
                            [theme.breakpoints.up('tablet')]: {
                                width: '20px', 
                                height: '20px', 
                            }
                        }}
                    />
                </IconButton>
                <IconButton size="small" sx={{padding: '2px'}} onClick={() => setIsDiary(false)}>
                    <Icon 
                        iconName={'#icon-pie-chart'}
                        sx={{
                            width: '16px', 
                            height: '16px', 
                            opacity: `${!isDiary ? 1 : 0.3}`,
                            cursor: 'pointer',
                            '&:hover':{
                                opacity: '1'
                            },
                            [theme.breakpoints.up('tablet')]: {
                                width: '20px', 
                                height: '20px', 
                            }
                        }}
                    />
                </IconButton>
            </IconContainer>
        </HeaderContainer>
        {/* <ScrollWrapper> */}
            {isDiary && <ListContainer>
                <DiaryList>
                    {progressArr && progressDataArr && progressArr.map((elem, i)=>{
                        return <DiaryListItem key={elem._id} id="listItem">
                        <Icon iconName={'#icon-square'} sx={{
                            position: 'absolute',
                            width: '16px', 
                            height: '16px',
                            top: '-3px',
                            left: '-25px',
                            opacity: '0.3',
                            zIndex: '1000'
                        }}/>
                        <ListItemContainer sx={{flexGrow: 1}}>
                            <ListItemDate>{progressDataArr[i].date}</ListItemDate>
                            <ListItemPercent>{progressDataArr[i].percent}%</ListItemPercent>
                            <ListItemMins>
                                {progressDataArr[i].minutes ? `${progressDataArr[i].minutes} minutes` : 'active reading'}
                            </ListItemMins>
                        </ListItemContainer>

                        <ListItemContainer>
                            <ListItemPagesNum>{progressDataArr[i].finishedPages} pages</ListItemPagesNum>
                            <Icon iconName={'#icon-reading-chart'} sx={{
                                width: '43px', 
                                height: '18px', 
                                marginBottom: '4px',
                                [theme.breakpoints.up('tablet')]: {
                                    width: '59px', 
                                    height: '25px', 
                                }
                            }}/>
                            <ListItemPagesPerHour>
                                {elem.speed ? `${elem.speed} pages per hour` : 'active reading'}
                            </ListItemPagesPerHour>
                        </ListItemContainer>
                        <IconButton size="small" onClick={() => handleDeleteDiaryData(elem._id)} sx={{
                            padding: '0px',

                        }}>
                            <Icon iconName={'#icon-trash-bin'} sx={{width: '14px', height: '14px'}}/>
                        </IconButton>    
                        </DiaryListItem>
                    })}
                </DiaryList>
            </ListContainer>}

            {!isDiary && <ProgressContainer>
                <CircleContainer>
                    <Icon iconName={'#icon-progress-circle'} sx={{
                        width: '116px', 
                        height: '116px', 
                        transform: 'rotate(270deg)',
                        // strokeDashoffset: '565.48px'
                        transitionDuration: '350px',
                        transitionProperty: 'stroke-dashoffset',
                        strokeDashoffset: `${565.48 - (565.48 / 100 * CountReadingPercent())}px`,

                        [theme.breakpoints.up('tablet')]: {
                            //line width 12
                            width: '138px', 
                            height: '138px', 
                        }
                    }}/>
                    <Typography sx={{
                        position: 'absolute',
                        color: theme.palette.custom.textMain,
                        [theme.breakpoints.up('tablet')]: {
                            //line width 12
                            fontSize: '20px',
                            lineHeight: '20px', 
                        }
                    }}>
                        {CountReadingPercent()}%
                    </Typography>
                </CircleContainer>
                <DataContainer>
                    <Square/>
                    <DataTextContainer>
                        <Typography sx={{
                            marginBottom: '4px',
                            fontSize: '14px',
                            lineHeight: '18px',
                            color: theme.palette.custom.textMain,
                            [theme.breakpoints.up('tablet')]: {
                                fontSize: '20px',
                                lineHeight: '20px', 
                            }
                        }}>{CountReadingPercent()}%</Typography>
                        <Typography sx={{
                            fontSize: '10px',
                            lineHeight: '12px',
                            color: theme.palette.custom.textSecondary,
                            [theme.breakpoints.up('tablet')]: {
                                fontSize: '12px',
                                lineHeight: '14px', 
                            }
                        }}>{getFinishedPages()} pages read</Typography>
                    </DataTextContainer>
                </DataContainer>
            </ProgressContainer>}
        {/* </ScrollWrapper> */}
    </Container>
}