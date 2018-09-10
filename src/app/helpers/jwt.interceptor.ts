import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class JwtInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any> , next:HttpHandler):Observable<HttpEvent<any>>{    
       
        
            req = req.clone({withCredentials:true});        
            return next.handle(req);

    }
}