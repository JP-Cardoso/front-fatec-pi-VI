import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setLocalStorage(name: string, item: any) {
    localStorage.setItem(name, item);
  }

  getLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name) || '{}')
  }

  removeLocalStorage(name: string) {
    localStorage.removeItem(name)
  }

  clearAll() {
    localStorage.clear();
  }
}
