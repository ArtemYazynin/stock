import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Contract } from "src/models/contract.interface";

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  private counter: number = 0;
  readonly dataSet: { [key: number]: Contract[] } = {
    0: [
      { id: `i-a`, name: `Сбер`, removed: false },
      { id: `i-b`, name: `Газпром`, removed: false },
      { id: `i-c`, name: `Лукойл`, removed: false },
      { id: `i-d`, removed: true },
      { id: `i-e`, removed: true },
    ],
    1: [
      { id: `i-a`, name: `Сбер`, removed: false },
      // { id: `i-b`, name: `Газпром`, removed: false },
      { id: `i-c`, name: `Лукойл`, removed: false },
      { id: `i-d`, name: `Роснефть`, removed: false },
    ],
    2: [
      { id: `i-a`, name: `Сбер`, removed: false },
      { id: `i-b`, name: `Газпром`, removed: false },
      { id: `i-c`, name: `Лукойл`, removed: false },
      { id: `i-d`, removed: true },
    ],
    3: [
      { id: `i-a`, name: `Сбер`, removed: false },
      { id: `i-b`, name: `Газпром`, removed: false },
      { id: `i-c`, name: `Лукойл`, removed: false },
      { id: `i-d`, name: `Роснефть`, removed: false },
      { id: `i-e`, name: `Норникель`, removed: false },
    ],
  }

  getContracts(): Observable<Contract[]> {
    if (this.counter > 3) {
      this.counter = 0;
    }
    console.log(this.counter)
    const result : Contract[] = this.dataSet[this.counter];
    this.counter++;
    return of(result)
  }
}
