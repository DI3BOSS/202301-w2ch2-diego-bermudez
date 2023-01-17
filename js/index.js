import strictEquals from "./strictEquals/strictEquals.js";
import testStrictEquals from "./tester/tester.js";

console.log(`

| valueA  | valueB | RESULT       | RESULT            
|         |        | strictEquals | testStrictEquals  
|-------- |------- |------------- |------------------ 
| 1       | 1      | ${strictEquals(1, 1)}         |  ${testStrictEquals(1, 1)}
| NaN     | NaN    | ${strictEquals(NaN, NaN)}        |  ${testStrictEquals(
  NaN,
  NaN
)}
| 0       | -0     | ${strictEquals(0, -0)}         |  ${testStrictEquals(
  0,
  -0
)}
| -0      | 0      | ${strictEquals(-0, 0)}         |  ${testStrictEquals(
  -0,
  0
)} 
| 1       | "1"    | ${strictEquals(1, "1")}        |  ${testStrictEquals(
  1,
  "1"
)}
| true    | false  | ${strictEquals(true, false)}        |  ${testStrictEquals(
  true,
  false
)}
| false   | false  | ${strictEquals(
  false,
  false
)}         |  ${testStrictEquals(false, false)}
| "Water" | "oil"  | ${strictEquals(
  "Water",
  "Oil"
)}        |  ${testStrictEquals("Water", "Oil")}

strictEquals function ${strictEquals};

`);
