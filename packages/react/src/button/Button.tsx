import { useComposedRefs } from "@radix-ui/react-compose-refs";
import { Slot, Slottable } from "@radix-ui/react-slot";
import {
  type ComponentPropsWithRef,
  type ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useRef,
} from "react";

import type { ExtendProps } from "../utils";

import { Flex } from "../flex";
import { Text } from "../text";
import { type Recipe, recipe } from "./Button.recipe";

type ButtonProps = ExtendProps<
  ComponentPropsWithRef<"button">,
  ComponentPropsWithRef<typeof Flex>,
  {
    asChild?: boolean;
    children?: ReactNode;
    leftSection?: ReactNode;
    rightSection?: ReactNode;
  } & Recipe
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, children, leftSection, rightSection, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    children =
      asChild && isValidElement(children) ? (
        cloneElement(
          children,
          undefined,
          <Text fontSize="inherit" fontWeight="600">
            {children.props.children}
          </Text>,
        )
      ) : (
        <Text fontSize="inherit" fontWeight="600">
          {children}
        </Text>
      );

    const innerRef = useRef<HTMLButtonElement>(null);
    const composedRef = useComposedRefs(ref, innerRef);

    return (
      <Flex
        asChild
        cursor="pointer"
        display="inline-flex"
        flexDirection="row"
        gap="xs"
        overflow="hidden"
        position="relative"
        rounded="sm"
        transition="colors"
        {...recipe(props)}
      >
        <Comp ref={composedRef}>
          {leftSection}
          <Slottable>{children}</Slottable>
          {rightSection}
        </Comp>
      </Flex>
    );
  },
);

Button.displayName = "@optiaxiom/react/Button";
