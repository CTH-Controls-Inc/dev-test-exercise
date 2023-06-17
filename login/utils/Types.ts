import { ChangeEvent } from "react";
export type InputProps = {
  value: string;
  type: string;
  label: string;
  id: string;
  name: string;
  error: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  required?: string;
  className: string;
};

export type RegularObject = {
  [key: string]: number | string;
};

export type InputObject = {
  [key: string]: string;
};
