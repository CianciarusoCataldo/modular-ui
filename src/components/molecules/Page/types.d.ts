import {
  BuilderComponent,
  CommonProps,
  ComponentWithChildren,
} from "../../../utils/global";

/** Page component props */
export type PageProps = CommonProps &
  ComponentWithChildren<BuilderComponent | BuilderComponent[]> & {
    /** Page contents orientation */
    orientation?: "vertical" | "horizontal";
  };
