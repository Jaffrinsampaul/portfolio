import { url } from "inspector";
import { mailSubject } from "./contents";
import { Url } from "./socialMediaUrl";

const reDirect = (Url: string) => {
  window.open(Url);
};

export default reDirect ;
