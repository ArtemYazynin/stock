import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ContractsService } from './services/contracts.service';
import { switchMap, tap } from 'rxjs/operators';
import { Contract } from 'src/models/contract.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isVisibleAverage = true;
  items$: Observable<Map<string, Contract>> = interval(1000)
    .pipe(
      switchMap(() => this.service.getContracts()),
      tap(x => {
        x
      })
    )

  constructor(private service: ContractsService) {

  }
  ngOnInit(): void {

  }

  showAverage() {
    this.isVisibleAverage = !this.isVisibleAverage
  }
}
