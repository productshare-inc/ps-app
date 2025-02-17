declare module "input-otp" {
  import * as React from "react";

  export interface SlotProps {
    char: string;
    hasFakeCaret: boolean;
    isActive: boolean;
  }

  export interface OTPInputContextType {
    slots: SlotProps[];
  }

  export const OTPInputContext: React.Context<OTPInputContextType>;

  export interface OTPInputProps extends React.HTMLAttributes<HTMLDivElement> {
    containerClassName?: string;
  }

  export const OTPInput: React.ForwardRefExoticComponent<
    OTPInputProps & React.RefAttributes<HTMLDivElement>
  >;
}
