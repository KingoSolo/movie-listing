import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const email = localStorage.getItem('userEmail')

  if (email){
     const clone = req.clone({
     setHeaders:{"x-user":email}
  })
  return next(clone)
  }
 
  return next(req);
};
