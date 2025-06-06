import { type ComponentPropsWithRef, forwardRef } from "react";

import { Box } from "../box";
import { Code } from "../code";
import * as styles from "./Kbd.css";

type KbdProps = {
  keys?: Array<keyof typeof mapKeyToCode> | keyof typeof mapKeyToCode;
} & ComponentPropsWithRef<typeof Code>;

const mapKeyToCode = {
  command: "⌘",
  ctrl: "⌃",
  down: "↓",
  enter: "↵",
  escape: "⎋",
  help: "?",
  left: "←",
  option: "⌥",
  right: "→",
  shift: "⇧",
  space: "␣",
  tab: "⇥",
  up: "↑",
};

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ children, keys, ...props }, ref) => {
    return (
      <Code
        asChild
        border="1"
        borderB="2"
        display="inline-flex"
        flexDirection="row"
        fontWeight="600"
        gap="4"
        whiteSpace="nowrap"
        {...props}
      >
        <kbd ref={ref}>
          {keys &&
            (Array.isArray(keys) ? keys : [keys]).map((key) => (
              <Box
                asChild
                className={styles.keys}
                key={key}
                textDecoration="none"
              >
                <abbr title={key}>{mapKeyToCode[key]}</abbr>
              </Box>
            ))}
          {children}
        </kbd>
      </Code>
    );
  },
);

Kbd.displayName = "@optiaxiom/react/Kbd";
