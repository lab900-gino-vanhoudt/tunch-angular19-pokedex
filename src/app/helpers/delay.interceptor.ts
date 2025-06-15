import { HttpInterceptorFn } from '@angular/common/http';
import { delay } from 'rxjs';

// to properly see and handle the loading state, we add a delay to all http requests
export const delayInterceptor: HttpInterceptorFn = (req, next) => {
  const delayInMs = 1000;
  return next(req).pipe(delay(delayInMs));
};
