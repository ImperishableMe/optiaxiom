import { Box, Grid } from "@optiaxiom/react";
import {
  Children,
  type ComponentPropsWithRef,
  type ReactElement,
  isValidElement,
} from "react";

import { yellowStripes } from "../stripes";
import { Item } from "./Item";

export const Canvas = ({
  children,
}: {
  children: ReactElement<ComponentPropsWithRef<typeof Box>>;
}) => (
  <Grid {...children.props} style={yellowStripes}>
    {Children.toArray(children.props.children)
      .filter(isValidElement<ComponentPropsWithRef<typeof Box>>)
      .map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
  </Grid>
);
