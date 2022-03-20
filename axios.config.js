import axios from "axios";
import { DOMAIN_NAME } from "./api";

axios.defaults.baseURL = DOMAIN_NAME;
