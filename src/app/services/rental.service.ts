import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDto } from '../models/rentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ListResponseModel<RentalDto>>
  {
    let newPath=environment.apiUrl+"rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath)
  }
}
