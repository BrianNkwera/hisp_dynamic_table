interface MyObject {
    organizationalUnits: string[];
  }
  
  function getDistinctOrganizationalUnits(items: MyObject[]): string {
    const distinctUnits = new Set<string>();
  
    items.forEach((item) => {
      item.organizationalUnits.forEach((unit) => {
        distinctUnits.add(unit);
      });
    });
  
    return Array.from(distinctUnits).join(", ");
  }
  