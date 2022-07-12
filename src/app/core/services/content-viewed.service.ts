import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentViewedService {
  constructor() {}

  private getDataStorage(): number[] {
    const storage = localStorage.getItem('viewed');
    return storage ? JSON.parse(storage) : [];
  }

  /**
   * Añadir un contenido a visto en LocalStorage
   */
  addViewed(idContent: number): void {
    let viewedList: number[] = this.getDataStorage();

    if (!viewedList.includes(idContent)) {
      localStorage.setItem(
        'viewed',
        JSON.stringify([...viewedList, idContent])
      );
    }
  }

  /**
   * Ver si un contenido esta marcado como visto
   */
  searchViewed(idContent: number): boolean {
    return this.getDataStorage().includes(idContent);
  }

  removeViewed(idContent: number): void {
    let viewedList: number[] = this.getDataStorage();
    viewedList = viewedList.filter((id) => id !== idContent);
    localStorage.setItem('viewed', JSON.stringify(viewedList));
  }
}
