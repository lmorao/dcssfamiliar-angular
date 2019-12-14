import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileSource = new BehaviorSubject(
    {
      "str": 1,
      "int": 1,
      "dex": 1,
      "xl": 1,
    }
  );

  profile = this.profileSource.asObservable();

  updateProfile(profile) {
    this.profileSource.next(profile);
  }
  constructor() { }
}
