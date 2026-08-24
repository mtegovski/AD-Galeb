import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      question: $localize`:@@faqQ1:Дали Обилет е официјален партнер на Галеб?`,
      answer: $localize`:@@faqA1:Да, Обилет е официјален партнер на Галеб.`,
      open: false,
    },
    {
      question: $localize`:@@faqQ2:Дали треба да ги испринтам картите пред патување?`,
      answer: $localize`:@@faqA2:Препорачано е но не е обавезно да ги имате испринтани картите од Обилет.`,
      open: false,
    },
    {
      question: $localize`:@@faqQ3:Кога треба да пристигнам на станица пред тргнување?`,
      answer: $localize`:@@faqA3:Најдобро е да пристигнете 15-20 минути пред тргнување.`,
      open: false,
    },
    {
      question: $localize`:@@faqQ4:Дали треба да платам дополнително за багаж?`,
      answer: $localize`:@@faqA4:Не, не треба да платите дополнително за багаж.`,
      open: false,
    },
    {
      question: $localize`:@@faqQ5:Како можам да купам карта?`,
      answer: $localize`:@@faqA5:Онлајн преку Обилет, на шалтер на билетара или директно во автобусот доколку има слободно место. Во автобусот може да се купи само еднонасочна карта.`,
      open: false,
    },
    {
      question: $localize`:@@faqQ6:Каде застануваат автобусите?`,
      answer: $localize`:@@faqA6:Сите автобуси застануваат на главните градски станици. Во Скопје има уште две постојки пред главната станица, кои се означени во распоредот на самата страна.`,
      open: false,
    },
    {
      question: $localize`:@@faqQ7:Дали автобусите возат секој ден?`,
      answer: $localize`:@@faqA7:Да, сите автобуски линии возат секој ден.`,
      open: false,
    },
  ];

  toggle(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
