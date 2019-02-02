import logger from "./logger";
import thunk from "readux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, logger);
