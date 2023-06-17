import { InputProps } from "../utils/Types";

export default function Inputs(props: InputProps) {
  return (
    <div className="input__container">
      <div className="input__box">
        <label htmlFor={props?.id}>{props?.label}</label>
        <input
          type={props?.type}
          name={props?.name}
          id={props?.id}
          onChange={props?.onChange}
          className={props?.className}
        />
      </div>
      {props?.error && <small>{props?.error}</small>}
    </div>
  );
}
