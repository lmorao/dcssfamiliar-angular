import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsSource = new BehaviorSubject(
    {
    fighting: { level: 0, display: "Fighting"},
    "short blades": { level: 0, display: "Short Blades"},
    "long blades":{ level: 0,display: "Long Blades"},
    maces:{ level: 0,display: "Maces & Flails"},
    axes:{ level: 0,display: "Axes"},
    polearms:{ level: 0,display: "Polearms"},
    staves:{ level: 0,display: "Staves"},
    unarmed:{ level: 0,display: "Unarmed"},
    }
    );

  skills = this.skillsSource.asObservable();

  updateSkills(skills) {
    this.skillsSource.next(skills);
  }

  constructor() { }
}
