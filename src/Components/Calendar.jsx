import React, { useState } from "react";
import "../Styles/Calendar.css";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Center,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from '@chakra-ui/card'
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import calendarImg from "../Assets/Calendarimg.jpg";
// import CalendarImageModal from "./Calendar/CalendarImageModal";
const dateFns = require("date-fns");

const Navbar = (props) => {
  const dateFormat = "MMM yyyy";

  return (
    <Flex>
      <Spacer />
      <Center><ChevronLeftIcon onClick={props.prev}/></Center>
      <Center>
        <span>{dateFns.format(props.month, dateFormat).toUpperCase()}</span>
      </Center>
      <Center><ChevronRightIcon onClick={props.next}/></Center>
      <Spacer />
      {/*<CalendarImageModal />*/}
    </Flex>
  );
  
}

const Sidebar = (props) => {
  const style = {
    transition: "all 0.5s ease",
    width: props.showSidebar ? "36%" : "0px",
    borderRadius: "10px 0 0 10px",
    whiteSpace: "nowrap",
  }

  return (
    <Card overflow={"hidden"} style={style} h={"70vh"}>
      <CardHeader bg={"blue.500"} color={"white"}>
        <Text fontSize={"2xl"}>Blue Day</Text>
        {dateFns.format(props.selectedDate, "PPP")}
      </CardHeader>
      <CardBody>Hi</CardBody>
    </Card>

  );
}

const Cell = ({selected, date, day, disabled, onDateClick, toggleSidebar, type}) => {
  const style = {
    background: selected ? "rgba(193, 209, 255, 0.2)" : "",
  }

  return (
    <Grid templateRows="repeat(3, 1fr)" templateColumns="repeat(6, 1fr)" style={style} onClick={() => (onDateClick(date), toggleSidebar(date))}>
      <GridItem rowSpan={1} colSpan={1} bg={type}>
        <Center><Text>{day}</Text></Center>
      </GridItem>
      <GridItem colStart={2} rowSpan={1} colSpan={5} bg={type}/>
      <GridItem rowStart={2} colStart={2} rowSpan={4} colSpan={5}>
        Events
      </GridItem>
    </Grid>
  )
}

const Table = (props) => {
  let monthStart = dateFns.startOfMonth(props.month); // first day of the month
  let day = dateFns.startOfWeek(monthStart); // the start of the week that begins the month
  let dayCount = dateFns.differenceInCalendarDays(dateFns.lastDayOfWeek(dateFns.lastDayOfMonth(monthStart)), dateFns.startOfWeek(monthStart)); // number of days to be shown in the calendar
  
  let cellDates = [];
  for (let i = 0; i <= dayCount; i++) {
    cellDates.push(day);
    day = dateFns.addDays(day, 1);
  }

  const cells = cellDates.map((cellDate) => (
    <Cell day={dateFns.getDate(cellDate)} 
          date={cellDate} 
          disabled={!dateFns.isSameMonth(cellDate, monthStart)} 
          selected={dateFns.isSameDay(cellDate, props.selectedDate)} 
          onDateClick={props.onDateClick}
          toggleSidebar={props.toggleSidebar}
          type={dateFns.isWeekend(cellDate) ? "gray.600" : "blue.600"}/>
  ));

  
  const weekDays = [];
  let startDate = dateFns.startOfWeek(props.month);
  for (let i = 0; i < 7; i++) {
    weekDays.push(
      <Center>{dateFns.format(dateFns.addDays(startDate, i), "eee")}</Center>
    );
  }

  return (
    <Flex direction={"column"} borderRadius={"10px"}>
      <SimpleGrid columns={7} w="100%" bg={"blue.500"} style={{borderRadius: "10px 10px 0 0"}}>
        {weekDays}
      </SimpleGrid>
      <Box borderRadius={"0 0 10px 10px"} overflow={"hidden"}>
        <SimpleGrid columns={7} w="100%" h={"62vh"} overflowY={"scroll"}>
          {cells}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSelect = (day) => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
  };

  const toggleSidebar = (date) => {
    if (dateFns.isSameDay(date, selectedDate)) { 
      setShowSidebar(!showSidebar);
    } else {
      setShowSidebar(true);
    }
  };

  return (
    <Flex justifyContent={"center"}>
      <Flex direction="column" paddingLeft={"5"} paddingRight={"5"} flexBasis={"64%"}>
        <Navbar month={currentMonth} next={nextMonth} prev={prevMonth} />
        <Table month={currentMonth} selectedDate={selectedDate} onDateClick={handleSelect} toggleSidebar={toggleSidebar}/>
      </Flex>
      <Sidebar selectedDate={selectedDate} showSidebar={showSidebar}/>
    </Flex>
  );
};

export default Calendar;
