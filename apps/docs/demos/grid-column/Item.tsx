import { Box, Text } from "@optiaxiom/react";
import { type ComponentPropsWithRef, type ReactElement } from "react";

export const Item = ({
  children,
}: {
  children: ReactElement<ComponentPropsWithRef<typeof Box>>;
}) => {
  return (
    <Box
      bg={children.props.colSpan ? "purple.500" : "purple.200"}
      display="grid"
      p="16"
      placeItems="center"
      rounded="md"
      {...children.props}
    >
      <Text color="white" fontFamily="mono" fontWeight="600">
        {children.props.children}
      </Text>
    </Box>
  );
};
