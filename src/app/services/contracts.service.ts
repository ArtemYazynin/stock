import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Contract } from "src/models/contract.interface";
import { DataSourceService } from "./data-source.service";

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
  private readonly max = 99999;
  private cache: Map<string, Contract> = new Map();
  constructor(private ds: DataSourceService) {
  }
  getContracts(): Observable<any> {
    return this.ds.getContracts()
      .pipe(
        map(contracts => {
          contracts.forEach(element => {
            if (element.removed) {
              this.cache.delete(element.id);
            } else if (!this.cache.has(element.id)) {
              this.cache.set(element.id, element)
            }
          });

          return this.cache;
        })
      );
  }

  getContractQuoutes() {

  }

  private generateContract(): Contract {
    const random = Math.floor(Math.random() * this.max)
    const res: Contract = {
      id: `i-${random}`,
      name: this.getRandomString(1),
      removed: this.getRandomBoolean()
    };
    return res;
  }

  private getRandomString(length: number) {
    var result = '';
    // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return `i-${result}`;
  }

  private getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }
}
