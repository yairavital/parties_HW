import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    parties =[
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
      'מרצ'
    ];
}
