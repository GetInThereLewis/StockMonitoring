import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { stockListing } from '../stockListing';
@Injectable({
  providedIn: 'root'
})
export class RequestDataService {

  constructor(
    private http: HttpClient
  ) { 
  }
    
  searchForEpisode(id: string, episodeName: string): Observable<stockListing[]> {
      const url = 'http://localhost:8000/api/getlistingby/?episodeId';

      const headers = new HttpHeaders()
        .set('Accept', 'application/json');
      
      const params = new HttpParams()
        .set('id', id)
        .set('episodeName', episodeName);

      return this.http.get<stockListing[]>(url, {headers, params});

  }
}
