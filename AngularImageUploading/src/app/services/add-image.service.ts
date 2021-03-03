import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { environment as ENV } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddImageService {

  constructor(private http: HttpClient) { }

  addProduct(data, file: File) {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('image', file)

    var URL = BASE_URL + ENV.CREATE_PRODUCT;
    return this.http.post(URL, formData);
  }

  getAllProduct() {
    var URL = BASE_URL + ENV.GET_All_PRODUCT;
    return this.http.get(URL);
  }
}
