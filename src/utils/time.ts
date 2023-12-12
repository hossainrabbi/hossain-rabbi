import moment, { Moment } from "moment";

export const formatDate = (
  date?: string | Date,
  format: string = "DD MMM, YYYY"
) => {
  return moment(date || new Date()).format(format);
};

export const formatTime = (
  date?: string | Date,
  format: string = "h:mm:ss A"
) => {
  return moment(date || new Date()).format(format);
};

export const formatUTCTime = (date: string | Moment) => {
  // const dateData = new Date(date);

  // const UTCTime = new Date(
  //   dateData.getTime() - dateData.getTimezoneOffset() * 60000
  // );

  // return UTCTime.toISOString();
  // console.log(moment.utc(date).local().toISOString());

  return moment.utc(date).local().toISOString();
};
