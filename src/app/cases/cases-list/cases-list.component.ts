import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaseService } from '../../_services/api/case.service';
import { CaseItem } from '../../_models/case';

import * as constants from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit {
  cases: CaseItem[] = [];

  constructor(
    public caseService: CaseService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getCases();
  }

  getCases(): void {
    this.caseService.getAll({ page: 0, size: constants.PAGE_SIZE }).subscribe({
      next: (response: any) => {
        this.cases = response.elements;
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }

  onRowSelect(event: any): void {
    this.router.navigate([`/cases/case/${event.rowItem.uuid}/details`]);
  }
}
