const {
  Observable,
  from,
  interval,
  of,
  combineLatest,
  merge
} = require("rxjs");
const {
  map,
  filter,
  take,
  scan,
  tap,
  debounceTime,
  throttleTime,
  bufferCount,
  switchMap,
  delay
} = require("rxjs/operators");

console.log("combine: combine multiple observables into a single stream, produce a new value everytime input observable do");

const randAsync = Observable.create(o => o.next(Math.random()));
const randAsyncDelayed = randAsync.pipe(delay(1000));

const combo = combineLatest([
  randAsyncDelayed,
  randAsync,
  randAsync,
  randAsync,
])
combo.subscribe(console.log)