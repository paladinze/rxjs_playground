const { Observable, from } = require("rxjs");
const { map, filter, take, scan, tap } = require("rxjs/operators");

// combine operators through pipe
const sourceOb = from([1, 2, 3, 4, 5])
const modifiedOb = sourceOb.pipe(
  tap(n => console.log(`tapped: ${n}`)),
  filter(n => n < 5),
  map(n => n * 2),
  scan((acc, val) => acc + val ), // same as reduce
  take(3) // take 3 and complete
)
modifiedOb.subscribe(console.log)