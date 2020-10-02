import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangedPriceService {

  constructor(protected http: HttpClient) { }

  getChangedPriceService() {
    return this.http.get('http://localhost/reception/product/changed_price/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDE2NTI1NDIsImF1ZCI6ImRkNGE4YTY0YTY0MmViZjk5MGNiNjViNDU0ZjlkMDI0YTIyYjEzZmUiLCJkYXRhIjp7InVzdWFyaW8iOiJiZXN0d2F5YXBwLnVzdWFyaW8iLCJwYXNzd29yZCI6IkJlc3R3YXltYXJrZXQyMDIwQCJ9fQ.evkXYy2zInibM5lC0MI-BasReg9Xedc7dm8vfgdMXtw');
  }

  getProductNew(){
    return this.http.get('http://localhost/reception/product/new_product/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDE2NTI1NDIsImF1ZCI6ImRkNGE4YTY0YTY0MmViZjk5MGNiNjViNDU0ZjlkMDI0YTIyYjEzZmUiLCJkYXRhIjp7InVzdWFyaW8iOiJiZXN0d2F5YXBwLnVzdWFyaW8iLCJwYXNzd29yZCI6IkJlc3R3YXltYXJrZXQyMDIwQCJ9fQ.evkXYy2zInibM5lC0MI-BasReg9Xedc7dm8vfgdMXtw');
  }

  deleteProduct(id:number){
    return this.http.get(`http://localhost/reception/product/changed_price/discard/?wp_id=${id}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDE2NTI1NDIsImF1ZCI6ImRkNGE4YTY0YTY0MmViZjk5MGNiNjViNDU0ZjlkMDI0YTIyYjEzZmUiLCJkYXRhIjp7InVzdWFyaW8iOiJiZXN0d2F5YXBwLnVzdWFyaW8iLCJwYXNzd29yZCI6IkJlc3R3YXltYXJrZXQyMDIwQCJ9fQ.evkXYy2zInibM5lC0MI-BasReg9Xedc7dm8vfgdMXtw`);
    
  }

  postActualizarProduct(product:any){
    return this.http.post('http://localhost/reception/product/new_product/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDE2NTI1NDIsImF1ZCI6ImRkNGE4YTY0YTY0MmViZjk5MGNiNjViNDU0ZjlkMDI0YTIyYjEzZmUiLCJkYXRhIjp7InVzdWFyaW8iOiJiZXN0d2F5YXBwLnVzdWFyaW8iLCJwYXNzd29yZCI6IkJlc3R3YXltYXJrZXQyMDIwQCJ9fQ.evkXYy2zInibM5lC0MI-BasReg9Xedc7dm8vfgdMXtw',product);
  }





}
  