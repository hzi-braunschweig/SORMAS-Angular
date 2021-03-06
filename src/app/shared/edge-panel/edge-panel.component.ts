import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN,
  EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN,
  EDGE_PANEL_TYPE,
  EdgePanelType,
  BREAKPOINTS,
} from '../../app.constants';
import { PANEL_CONFIG } from './edge-panel-config-data';
import { BaseService } from '../../_services/api/base.service';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-edge-panel',
  templateUrl: './edge-panel.component.html',
  styleUrls: ['./edge-panel.component.scss'],
})
export class EdgePanelComponent implements OnInit, OnDestroy {
  @Input() resourceService: BaseService<any>;
  @Input() scopeId: string | undefined;
  @Input() type: EdgePanelType = EDGE_PANEL_TYPE.TASK;

  items: any[] = [];
  initialSize: number;
  config: any;
  subscriptions: Subscription[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    const filters = [
      {
        field: 'caze',
        value: {
          uuid: this.scopeId,
        },
      },
    ];

    this.config = PANEL_CONFIG[this.type];

    this.subscriptions.push(
      this.resourceService?.getAll(null, null, filters).subscribe({
        next: (response: any) => {
          this.items = response.elements;
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      })
    );

    this.subscriptions.push(
      this.breakpointObserver
        .observe([`(max-width: ${BREAKPOINTS.lg}px)`, `(min-width: ${BREAKPOINTS.xxl}px)`])
        .subscribe((state) => {
          this.initialSize = state.matches
            ? EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN
            : EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN;
        })
    );
  }

  create(): void {
    // eslint-disable-next-line no-console
    console.log('open modal');
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
