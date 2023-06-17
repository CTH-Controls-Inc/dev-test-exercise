export default function useInputValidation(
  type: string,
  value: string,
  pattern?: RegExp
) {
  let validate = false;
  if (type === "email") {
    if (pattern && pattern.test(value)) {
      validate = true;
    }
  }
  return validate;
}
