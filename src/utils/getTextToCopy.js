import { text } from "../text";

export function getTextToCopy(count){
  const copyTextArray = Array(count)
    .fill()
    .map((_, index) => text[index]);
  const charLength = copyTextArray.join().length;
  const copyText = copyTextArray.join("\n\n");
  console.log(charLength);
  return { copyText, charLength };
};