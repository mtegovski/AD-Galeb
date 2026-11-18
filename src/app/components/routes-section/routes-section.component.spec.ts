import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RoutesSectionComponent } from './routes-section.component';

const cardTitles = () => {
  const fixture = TestBed.createComponent(RoutesSectionComponent);
  fixture.detectChanges();
  const el = fixture.nativeElement as HTMLElement;
  return [...el.querySelectorAll('app-relation-card h3')].map(h => h.textContent!.trim());
};

describe('RoutesSectionComponent', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({imports: [RoutesSectionComponent], providers: [provideRouter([])]});
  });

  it('shows the six featured routes without a last search', () => {
    expect(cardTitles()).toEqual(['Охрид', 'Скопје', 'Битола', 'Кочани', 'Ниш', 'Белград']);
  });

  it('moves a featured route that was last searched to the front', () => {
    localStorage.setItem('galeb.lastSearch.intercity', JSON.stringify({from: 'OHR', to: 'BIT'}));
    expect(cardTitles()).toEqual(['Битола', 'Охрид', 'Скопје', 'Кочани', 'Ниш', 'Белград']);
  });

  it('adds any other last search first and keeps six cards', () => {
    localStorage.setItem('galeb.lastSearch.intercity', JSON.stringify({from: 'VEL', to: 'PRI'}));
    const titles = cardTitles();
    expect(titles).toHaveLength(6);
    expect(titles[0]).toBe('Прилеп');
    expect(titles).not.toContain('Белград');
  });

  it('ignores an invalid last search', () => {
    localStorage.setItem('galeb.lastSearch.intercity', JSON.stringify({from: 'SKP', to: 'SKP'}));
    expect(cardTitles()[0]).toBe('Охрид');
  });
});
