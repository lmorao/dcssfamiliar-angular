import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character} from '../../shared/models/character.model'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileSource = new BehaviorSubject(new Character());

  profile = this.profileSource.asObservable();

  updateProfile(profile) {
    this.profileSource.next(profile);
  }
  get() {
    return this.profile;
  }
  constructor() { }
}
