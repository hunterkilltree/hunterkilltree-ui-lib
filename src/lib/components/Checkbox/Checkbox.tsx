import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial, DynamicStringEnumKeysOf } from "../../types";
import type { FlowbiteColors } from "../Flowbite";

export interface FlowbiteCheckboxTheme {
  root: FlowbiteCheckboxRootTheme;
}
export interface FlowbiteCheckboxRootTheme {
  base: string;
  color: FlowbiteColors;
}

export interface CheckboxProps extends Omit<ComponentProps<"input">, "type" | "ref" | "color"> {
  theme?: DeepPartial<FlowbiteCheckboxTheme>;
  color?: DynamicStringEnumKeysOf<FlowbiteColors>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = "default", theme: customTheme = {}, ...props }, ref) => {
    const theme = mergeDeep(getTheme().checkbox, customTheme);

    return (
      <><input
        ref={ref}
        type="checkbox"
        className={twMerge(theme.root.base, theme.root.color[color], className)}
        {...props} /><span className="bg-slate-400"></span></>
    );
  },
);

Checkbox.displayName = "Checkbox";
