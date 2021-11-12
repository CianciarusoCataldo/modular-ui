import { Epic } from "redux-observable";

import { locationChangeEpic } from "api/state-slices/router/epics";
import { languageChangeEpic, showToastEpic } from "api/state-slices/ui/epics";

const epics: Epic[] = [locationChangeEpic, languageChangeEpic, showToastEpic];

export default epics;
