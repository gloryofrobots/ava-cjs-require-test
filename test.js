import test from "ava";



test("Test CJS", async t => {
  let cjs = require("./cjs.cjs");
  t.is(cjs.data, "cjs"); 
});

