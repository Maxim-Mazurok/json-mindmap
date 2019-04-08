import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {
  private configuration = new Subject<ControlsConfig>();

  setConfiguration(configuration: ControlsConfig) {
    this.configuration.next(configuration);
  }

  getConfiguration(): Observable<ControlsConfig> {
    return this.configuration.asObservable();
  }
}
