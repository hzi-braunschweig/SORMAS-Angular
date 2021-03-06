import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  private apiUrl: string;

  setApiUrl(apiUrl: string): void {
    this.apiUrl = apiUrl;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  getRange(start: number, end: number, step = 1): number[] {
    const output = [];
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
    return output;
  }

  getYears(start = 1900, end?: number): any[] {
    const years = this.getRange(start, end ?? new Date().getFullYear());
    return years.map((x) => ({ key: x, value: x }));
  }

  getMonths(language = 'en'): any[] {
    const months = this.getRange(0, 11);
    return months.map((x) => ({
      key: x,
      value: new Intl.DateTimeFormat(language, { month: 'long' }).format(new Date().setMonth(x)),
    }));
  }

  getDaysForMonth(month?: number, year?: number): any[] {
    const maxDays = new Date(
      year ?? new Date().getFullYear(),
      (month ?? new Date().getMonth()) + 1,
      0
    ).getDate();
    const days = this.getRange(1, maxDays);
    return days.map((x) => ({ key: x, value: x }));
  }
}
