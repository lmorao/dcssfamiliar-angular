import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Skills } from '../../shared/models/skills.model'

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsSource = new BehaviorSubject( new Skills() );

  skills = this.skillsSource.asObservable();

  updateSkills(s) {
    this.skillsSource.next(s);
  }

  constructor() { }
}
