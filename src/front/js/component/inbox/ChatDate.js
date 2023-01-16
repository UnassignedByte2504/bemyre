import React from 'react'
import { Box, Typography} from "@mui/material"


function ChatDate({ date, showFullDate }) {
    const dateToDateTimeString = (date) => {
        const options = {
            day: 'numeric', month: 'numeric', year: 'numeric', hour: "2-digit", minute: "2-digit", hourCycle: 'h23',
        };
        if (date) {
            const dateMonthYearString = date.toLocaleDateString([], options);     //   format(date, 'EEEE dd MMMM y');
            return dateMonthYearString;
        }
    }

    const dateToHoursMinutesString = (date) => {
        if (date) {
            const hoursMinutes = date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hourCycle: 'h23',
            });
            return hoursMinutes;
        }
    };

    return (
        <Box className="ChatDateWrapper">
           <Box className='ChatDate'>{showFullDate ? dateToDateTimeString(date) : dateToHoursMinutesString(date)}</Box> 
        </Box>
    )
}

export default ChatDate