import { ConvertToASCII } from "../src/index.js";
import assert from "assert";
import testcase from "./testcase.js";

testcase.forEach(el=>{
    assert.strictEqual(ConvertToASCII('bijoy',el.unicode),el.ascii,'Unicode to Bijoy conversion failed');
});

console.log("All tests passed!");


