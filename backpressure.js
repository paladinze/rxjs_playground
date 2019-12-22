const { Observable, from, interval } = require("rxjs");
const {
  map,
  filter,
  take,
  scan,
  tap,
  debounceTime,
  throttleTime,
  bufferCount,
} = require("rxjs/operators");


console.log('throttle: help reduce backpressure, but loosy ')
const ob = interval(500);
const throttleOb = ob.pipe(throttleTime(3000), take(2));
throttleOb.subscribe(console.log);

console.log('buffer: keep all the data, but not listen to them all at once')
const bufferedOb = ob.pipe(bufferCount(3), take(4));
bufferedOb.subscribe(console.log)