import { Epic } from "redux-observable";

import { locationChangeEpic } from "api/state-slices/router/epics";
import { languageChangeEpic } from "api/state-slices/ui/epics";

const epics: Epic[] = [locationChangeEpic, languageChangeEpic];

export default epics;
