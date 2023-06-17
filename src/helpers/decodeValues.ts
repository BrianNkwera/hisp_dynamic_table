import simplifyMetaData from "./simplifyMetadata";
import dataJson from "../assets/data/data.json";

const metaDataValues = simplifyMetaData(dataJson.metaData.items);

function decodeValue (value: string) : string {
    const decodedValue = metaDataValues.find(data=> data.name == value);

    return decodedValue?.value || "";

}

export default decodeValue;