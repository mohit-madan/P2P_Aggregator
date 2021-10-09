export function termValidator(number) {
  if (!number) return "Term can't be empty";
  if(number>0 && number <= 48) return "";
  return "Term should be between 0 and 48 months";
}
