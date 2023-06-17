import type { HeaderType } from "../types/types";
import decodeValue from "./decodeValues";

function getDataInObjectForm(
  values: string[][],
  names: HeaderType[]
): { [key: string]: string }[] {
  const result: { [key: string]: string }[] = [];

  values.forEach((innerArray) => {
    const obj: { [key: string]: string } = {};

    innerArray.forEach((value, innerIndex) => {
      const nameObj = names[innerIndex];

      if (nameObj) {
        const name = nameObj.column;
        obj[name] = nameObj.column === "Value" ? value :  decodeValue(value);
      }
    });

    result.push(obj);
  });

  return result;
}

export default getDataInObjectForm;
