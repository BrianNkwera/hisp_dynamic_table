export interface HeaderType {
  name: string;
  column: string;
  valueType: string;
  type: string;
  hidden: boolean;
  meta: boolean;
}

export interface MetaDataType {
  [key: string]: { name: string };
}

interface SimplifiedMetaDataType {
  name: string | number;
  value: string;
}
