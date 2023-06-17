import type { MetaDataType, SimplifiedMetaDataType } from "../types/types";

function simplifyMetaData(metaData: MetaDataType): SimplifiedMetaDataType[] {
  const simplifiedMetaData: SimplifiedMetaDataType[] = [];

  for (const key in metaData) {
    if (Object.prototype.hasOwnProperty.call(metaData, key)) {
      const itemValue = metaData[key].name;

      const simplifiedItem: SimplifiedMetaDataType = {
        name: key,
        value: itemValue,
      };

      simplifiedMetaData.push(simplifiedItem);
    }
  }

  return simplifiedMetaData;
}

export default simplifyMetaData;
