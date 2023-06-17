export default function useInputValidation(
  name: string,
  value: string,
  pattern?: RegExp
) {
  let validate = false;
  if (name === "email") {
    if (pattern && pattern.test(value)) {
      validate = true;
    }
  } else if (name === "password") {
    if (value?.length >= 8) {
      validate = true;
    }
  }
  return validate;
}
