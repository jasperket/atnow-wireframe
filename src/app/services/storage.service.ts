import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData<T>(key: string, defaultData: T[]): T[] {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    this.setData(key, defaultData);
    return defaultData;
  }

  setData<T>(key: string, data: T[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Get next ID based on current data
  getNextId(key: string): number {
    const counterKey = `${key}_counter`;
    let currentId = parseInt(localStorage.getItem(counterKey) || '0', 10);
    
    // If no counter, find max ID in current data (fallback)
    if (currentId === 0) {
      const data = this.getData<any>(key, []);
      if (data.length > 0) {
        currentId = Math.max(...data.map(item => item.id || 0));
      }
    }
    
    const nextId = currentId + 1;
    localStorage.setItem(counterKey, nextId.toString());
    return nextId;
  }

  // Helper for single object
  getItem<T>(key: string, defaultValue: T): T {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  }

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
