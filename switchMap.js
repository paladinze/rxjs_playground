const { Observable, from, interval, of } = require("rxjs");
const {
  map,
  filter,
  take,
  scan,
  tap,
  debounceTime,
  throttleTime,
  bufferCount,
  switchMap
} = require("rxjs/operators");

console.log("switchMap: start with an observable, then switch to another");
const user = of({ uid: Math.random() });
const fetchOrder = userId => {
  return of(`order data for ${userId}`);
};
const orders = user.pipe(switchMap(({ uid }) => fetchOrder(uid)));
orders.subscribe(console.log);
