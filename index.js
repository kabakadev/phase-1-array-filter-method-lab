// Code your solution here
function findMatching(arrayName, stringArg) {
  return arrayName.filter(
    (matching) => stringArg.toLowerCase() === matching.toLowerCase()
  );
}
function fuzzyMatch(arrayName, stringArg) {
  return arrayName.filter((matching) => matching.startsWith(stringArg));
}
function matchName(arrayName, stringArg) {
  return arrayName.filter((matching) => matching.name === stringArg);
}
