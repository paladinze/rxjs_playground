const {
  Observable,
  Subject,
  BehaviorSubject,
} = require('rxjs');
const { 
  share,
  shareReplay,
  publish
} = require('rxjs/operators');

console.log('subject: late subscribe will not get data')
const subject = new Subject();
subject.subscribe(console.log)
subject.next(1)
subject.next(2)
subject.subscribe(console.log)

console.log('behaveSubject: similar to subject, but keeps currentValue')
const behaveSubject = new BehaviorSubject('Ze');
behaveSubject.subscribe(console.log)
behaveSubject.next('Cheng')
behaveSubject.subscribe(console.log)