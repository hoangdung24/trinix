import axios from "axios";
import { DOMAIN_NAME } from "./routes";

axios.defaults.baseURL = DOMAIN_NAME;
