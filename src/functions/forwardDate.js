import moment from "moment";

export function getForwardDate(days) {
  return moment().add(days, 'days').format('YYYY-MM-DD');
}

export default getForwardDate