
function ErrorMessage(props: {message: string; isError: boolean, onClose?: () => void}) {
  return (
    <div className={`message ${props.isError? "error" : "correct"}`}>
      <span>{props.message}</span>
      <button className="cross" onClick={props.onClose}>X</button>
    </div>
  );
}

export default ErrorMessage;
