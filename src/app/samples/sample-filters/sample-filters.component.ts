import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from '../../_services/filter.service';
import { Filter } from '../../_models/common';

@Component({
  selector: 'app-sample-filters',
  templateUrl: './sample-filters.component.html',
  styleUrls: ['./sample-filters.component.scss'],
})
export class SampleFiltersComponent implements OnInit {
  @Input() drawer: any = {};

  filtersForm = new FormGroup({});
  allFilters: Filter[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      search: new FormControl(),
      sample: new FormControl(),
      status: new FormControl(),
      sampleType: new FormControl(),
      testResults: new FormControl(),
      specimenCondition: new FormControl(),
      caseClassification: new FormControl(),
      disease: new FormControl(),
      region: new FormControl(),
      district: new FormControl(),
      laboratory: new FormControl(),
      dateFilter: new FormControl(),
      startDate: new FormControl(),
      dueDate: new FormControl(),
    });
  }

  filtersToArray(): void {
    const keys: string[] = Object.keys(this.filtersForm.value);
    const values: string[] = Object.values(this.filtersForm.value);
    this.allFilters = [];
    values.forEach((e, i) => {
      if (values[i] !== null) {
        this.allFilters.push({ field: keys[i], value: values[i] });
      }
    });
    this.filterService.setFilters(this.allFilters);
  }

  resetFilters(): void {
    this.initFiltersForm();
    this.filtersToArray();
  }
  onFormChange(): void {
    this.filtersToArray();
  }
}