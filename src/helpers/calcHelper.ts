export function negative(value: number): number {
  return value * -1;
}

export function add(value1: number, value2: number): number {
  return value1 + value2;
}

export function addDecimal(value: string): string {
  let returnValue = value;
  if (!value.includes(".")) {
    returnValue = returnValue + ".";
  }
  return returnValue;
}
