import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellListService {
  private spellList1Source = new BehaviorSubject( new Array() );
  private spellList2Source = new BehaviorSubject(new Array());
  spellList1 = this.spellList1Source.asObservable();
  spellList2 = this.spellList2Source.asObservable();

  updateSpellList1(spellList) {
    this.spellList1Source.next(spellList);
  }
  updateSpellList2(spellList) {
    this.spellList2Source.next(spellList);
  }
  getSpellList1() {
    return this.spellList1
  }
  getSpellList2() {
    return this.spellList1
  }



  constructor() { }
}
