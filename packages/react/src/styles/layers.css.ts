import { globalLayer, layer } from "@vanilla-extract/css";

export const axiom = globalLayer("optiaxiom");
export const reset = layer({ parent: axiom }, "reset");
