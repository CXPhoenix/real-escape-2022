const allLevels = [
  {
    id: "lv0",
    description: "> ",
    text: "請輸入要找的人...",
    type: "text",
    value: "",
  },
];

/**
 *
 * @param {Array[Object]} levelInfos {id, description, text, type, value}
 */
export const createLevel = (levelInfos) => {
  levelInfos.forEach((levelInfo) => {
    allLevels.push(levelInfo);
  });
};

/**
 *
 * @param {Array[Number]} levels
 * @returns
 */
export const getLevel = (levels) => {
  const theLevels = [];
  levels.forEach((level) => {
    theLevels.push(allLevels[level]);
  });
  return theLevels;
};
