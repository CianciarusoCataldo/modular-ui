import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sinon from "sinon";
/* eslint-disable */
global.navigator.clipboard = {
  writeText: Sinon.stub(),
  readText: Sinon.stub(),
  read: undefined,
  write: undefined,
  addEventListener: Sinon.stub(),
  dispatchEvent: Sinon.stub(),
  removeEventListener: Sinon.stub(),
};

/* eslint-disable */
configure({ adapter: new Adapter() });
