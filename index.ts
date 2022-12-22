import { interval, timer, Subject } from 'rxjs';
import { share, take, tap } from 'rxjs/operators';

const source = interval(1000).pipe(
  take(2),
  tap((x) => console.log('Emits: ', x)),

  //Comment share to see the difference in the output
  share(),
  //share({ resetOnRefCountZero: () => timer(1000) })
);

//Note : Mark the comma between subscriptions
setTimeout(
  () => source.subscribe((v) => console.log('subscription1: ', v)),
  1500
),
  source.subscribe((v) => console.log('subscription2: ', v));
//source.pipe(take(1)).subscribe((v) => console.log('subscription3: ', v));
