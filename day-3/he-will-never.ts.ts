"use strict";

// Things are a little bit messed up here
// Your job is to decode the "notSoCrypticMessage" by using the "lookupTable" object
// Assemble the fragments into the "result" variable

export function heWillNever() {
  let result = "";
  const notSoCrypticMessage: number[] = [
    1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11,
  ];

  const lookupTable: Record<number, string> = {
    7: "run around and desert you",
    50: "tell a lie and hurt you ",
    49: "make you cry, ",
    2: "let you down",
    12: "give you up, ",
    1: "Never gonna ",
    11: "\n",
    3: "say goodbye ",
  };

  // write your code here
  for (let i = 0; i < notSoCrypticMessage.length; i++) {
    result+=lookupTable[notSoCrypticMessage[i]];
  }

  console.log(result);
}

heWillNever();