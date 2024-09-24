import axios from "axios";

const url = "https://schedule-client-api.herokuapp.com";
//const url = "http://localhost:5000";
const newsUrl = "https://hsenews.com/wp-json/wp/v2/posts/?categories=493";

const debugUrl = "http://localhost:5000";

export const getSchedule = () => {
  return axios.get(`${url}/schedules`);
};
export const getAnnouncements = () => {
  return axios.get(`${url}/announcements`);
};
export const getLunch = () => {
  return axios.get(`${url}/schedules/lunch`);
};

export const getNewsCasts = () => {
  return axios.get(newsUrl);
};

// get the calendar data
export const getCalendar = (month) => {
  return axios.get(`${debugUrl}/schedules/calendar`)
    .catch(() => Promise.resolve(dummyCalendarData));
};


// this is dummy data for Nic to run this correctly
const dummyCalendarData = {
  "data":{
    "hey":"there"
  }
}

