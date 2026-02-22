import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const email = localStorage.getItem('userEmail')?.trim();

  if (!email) return next(req);

  return next(
    req.clone({
      setHeaders: { 'x-user': email }
    })
  );
};