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
    Container, 
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

    const handleIconClick = () => {
        console.log('click');
    }

    const handleDeleteDiaryData = (readingId: string) => {
        console.log('delete', readingId);
        if(bookInfo?._id){
            dispatch(booksDeleteReading({bookId: bookInfo._id, readingId: readingId}));
        }
    }

    console.log(isDiary)
    return <Container component={'div'}>
        <HeaderContainer>
            <Header variant="h2">
                Diary
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

            {!isDiary && <></>}
        {/* </ScrollWrapper> */}
    </Container>
}