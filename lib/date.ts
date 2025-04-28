import dayjs from "dayjs";
export const formatDate = (rawDate: string) => {
  return dayjs(rawDate).format("MMM DD, YYYY");
};