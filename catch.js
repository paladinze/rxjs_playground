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
  delay,
  catchError,
  retry,
} = require("rxjs/operators");

console.log('catch error')

const sub = new Subject();

sub.pipe(
  catchError(err => of('something broke')),
  retry(2)
)