import moment from "moment";

export default function fromNow(timeStamp: string): string {
  return moment(timeStamp).fromNow();
}
