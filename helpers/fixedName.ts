// some images needed to be renamed
export const fixedName = (id: number, name: string) => {
  const specialNames: { [key: number]: string } = {
    29: "nidoran_female",
    32: "nidoran_male",
    83: "farfetchd",
    122: "mrmime",
    439: "mrmimejr",
    772: "typenull",
  };
  return (specialNames[id] || name).toLowerCase() + '.jpg';
};