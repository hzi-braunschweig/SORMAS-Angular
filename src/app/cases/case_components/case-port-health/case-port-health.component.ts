import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import {
  FORM_DATA_CASE_PORT_HEALTH_AIRPORT,
  FORM_DATA_CASE_PORT_HEALTH_GROUNDCROSSING,
  FORM_DATA_CASE_PORT_HEALTH_SEAPORT,
  FORM_DATA_CASE_PORT_HEALTH_OTHER,
} from './case-port-health-form-data';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { PointOfEntryType } from '../../../_models/pointOfEntryType';

@Component({
  selector: 'app-case-port-health',
  templateUrl: './case-port-health.component.html',
  styleUrls: ['./case-port-health.component.scss'],
})
export class CasePortHealthComponent {
  myFormElements: FormBase<any>[] = [];
  formData: any;

  public resourceService: BaseService<any>;

  constructor(private formElementControlService: FormElementControlService) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    const poe = caseItem?.pointOfEntry?.pointOfEntryType;
    switch (poe) {
      case PointOfEntryType.AIRPORT:
        this.formData = FORM_DATA_CASE_PORT_HEALTH_AIRPORT;
        break;
      case PointOfEntryType.SEAPORT:
        this.formData = FORM_DATA_CASE_PORT_HEALTH_SEAPORT;
        break;
      case PointOfEntryType.GROUNDCROSSING:
        this.formData = FORM_DATA_CASE_PORT_HEALTH_GROUNDCROSSING;
        break;
      default:
        this.formData = FORM_DATA_CASE_PORT_HEALTH_OTHER;
        break;
    }
    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }
}
