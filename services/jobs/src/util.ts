export function getEnumValues(values: any): string[] {
   const enumValues: string[] = Object.keys(values).map(key => values[key]).filter(k => !(parseInt(k) >= 0));

   return enumValues;
}