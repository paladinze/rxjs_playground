const { 
  Observable,
  of,
  from,
  interval,
} = require('rxjs');


console.log("create a raw observable")
const rawObservable = Observable.create(observer => {
  observer.next('1')
  observer.next('2')
  observer.complete()
  observer.next('4')
})
rawObservable.subscribe(data => console.log(data))

console.log("of: create an observable from a value")
const ofObservable = of(1)
ofObservable.subscribe(console.log)

console.log("from: create observable from array of promise or iterable")
const fromObservable = from('ze.cheng')
fromObservable.subscribe(console.log)

console.log("creates sequential number every interval of time")
const intervalObservable = interval(1000)
intervalObservable.subscribe(console.log)