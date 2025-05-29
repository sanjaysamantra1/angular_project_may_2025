import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  // write the logic before the request is sent
  if (req.url.includes('users')) {
    console.log('I am Retry Interceptor');
    return next(req).pipe(retry(1));
  } else {
    return next(req);
  }
};
