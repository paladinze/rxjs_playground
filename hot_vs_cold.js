const {
  Observable
} = require('rxjs');
const { 
  share,
  shareReplay,
  publish
} = require('rxjs/operators');


console.log('create a cold observable')
const cold = Observable.create(observer => {
  observer.next(Math.random() * 100)
})
cold.subscribe(console.log)
cold.subscribe(console.log)

console.log('create a hot(multicast) observable')
const hot = cold.pipe(shareReplay())
hot.subscribe(console.log)
hot.subscribe(console.log)