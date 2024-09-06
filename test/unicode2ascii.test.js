import { ConvertToASCII,ConvertToUnicode } from "../src/index.js";
import assert from "assert";
import testcase from "./testcase.js";

// unicode to bijoy
testcase.forEach((el) => {
  assert.strictEqual(
    ConvertToASCII("bijoy", el.unicode),
    el.ascii,
    "Unicode to Bijoy conversion failed"
  );
});

// bijoy to unicode
testcase.forEach((el) => {
  assert.strictEqual(
    ConvertToUnicode("bijoy", el.ascii),
    el.unicode,
    "Bijoy to Unicode conversion failed"
  );
});

console.log("All tests passed!");
