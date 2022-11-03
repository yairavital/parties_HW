import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PartiesService {
  constructor() {}
  parties = [
    'ליכוד',
    'עבודה',
    'מחנה ממלכתי',
    'יש עתיד',
    `ש"ס`,
    'ישראל ביתנו',
    'צינות דתית',
    'יהדות התורה',
    `רע"ם`,
    'צעירים בוערים',
    `חד"ש - תע"ל`,
    'מרצ',
  ];
  Delete(party: string) {
    let index = this.parties.indexOf(party);
    this.parties.splice(index, 1);
  }
  Edit(party: string) {
    debugger;
    let index = this.parties.indexOf(party);
    let newParty = prompt('enter the new name for the party', party);
    if (newParty != null) {
      this.parties[index] = newParty;
    }
  }
}
