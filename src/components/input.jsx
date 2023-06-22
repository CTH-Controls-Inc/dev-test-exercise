import { memo } from "react";
import RenderIf from "./render-if";

const Input = ({ id, type='text', totltip, name,label, error, aditionalProps }) => (
  <div className={error ? "form__error" : ""}>
    <label className="form__label" htmlFor={id} >
      {label}
      <RenderIf condition={!!totltip}>
        <span className="form__tooltip" data-tooltip={totltip}>
          ?
        </span>
      </RenderIf>
    </label>

    <input
      className="form__text"
      type={type}
      id={id}
      name={id || name}
      {...aditionalProps}
    />
    <RenderIf condition={error}>
      <p className="form__error">{error}</p>
    </RenderIf>
  </div>
);

export default memo(Input);
