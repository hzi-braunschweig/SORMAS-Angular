import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { LocaleSelectComponent } from './locale-select/locale-select.component';
import { TableComponent } from './table/table.component';
import { DialogModule } from './dialog';
import { CollapsableBoxComponent } from './collapsable-box/collapsable-box.component';
import { InpageNavComponent } from './inpage-nav/inpage-nav.component';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { CardModule } from './card/card.module';
import { DateCardModule } from './date-card/date-card.module';
import { PipesModule } from '../_pipes/pipes.module';
import { NewEpidNumberComponent } from './widgets/new-epid-number/new-epid-number.component';
import { FollowUpStatusComponent } from './widgets/follow-up-status/follow-up-status.component';
import { ExposuresListComponent } from './widgets/exposures-list/exposures-list.component';
import { ActivitiesListComponent } from './widgets/activities-list/activities-list.component';
import { SymptomsGroupSelectComponent } from './widgets/symptoms-group-select/symptoms-group-select.component';
import { AddressesListComponent } from './widgets/addresses-list/addresses-list.component';
import { NewAddressComponent } from './widgets/new-address/new-address.component';
import { ContactFiltersComponent } from './contact-filters/contact-filters.component';
import { FiltersComponent } from './filters/filters.component';
import { DebounceDirective } from '../_directives/debounce.directive';
import { AddEditBaseModalComponent } from './modals/add-edit-base-modal/add-edit-base-modal.component';
import { ActionMenuComponent } from './action-menu/action-menu.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EdgePanelComponent } from './edge-panel/edge-panel.component';
import { TableDataComponent } from './table/table-data/table-data.component';
import { PersonContactsListComponent } from './widgets/person-contacts-list/person-contacts-list.component';
import { NewPersonContactComponent } from './widgets/new-person-contact/new-person-contact.component';
import { GpsCoordsComponent } from './widgets/gps-coords/gps-coords.component';
import { AddressButtonComponent } from './widgets/address-button/address-button.component';

@NgModule({
  declarations: [
    LocaleSelectComponent,
    TableComponent,
    InpageNavComponent,
    CollapsableBoxComponent,
    FormActionsComponent,
    NewEpidNumberComponent,
    FollowUpStatusComponent,
    ExposuresListComponent,
    ActivitiesListComponent,
    SymptomsGroupSelectComponent,
    AddressesListComponent,
    NewAddressComponent,
    ContactFiltersComponent,
    FiltersComponent,
    DebounceDirective,
    AddEditBaseModalComponent,
    ActionMenuComponent,
    DropdownMenuComponent,
    SidebarComponent,
    EdgePanelComponent,
    TableDataComponent,
    PersonContactsListComponent,
    NewPersonContactComponent,
    GpsCoordsComponent,
    AddressButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    TableVirtualScrollModule,
    DialogModule,
    CardModule,
    DateCardModule,
    PipesModule,
    TranslateModule,
  ],
  exports: [
    LocaleSelectComponent,
    TableComponent,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    InpageNavComponent,
    CollapsableBoxComponent,
    FormActionsComponent,
    CardModule,
    DateCardModule,
    PipesModule,
    TranslateModule,
    ContactFiltersComponent,
    FiltersComponent,
    DebounceDirective,
    ActionMenuComponent,
    DropdownMenuComponent,
    SidebarComponent,
    EdgePanelComponent,
  ],
  entryComponents: [AddEditBaseModalComponent, TableDataComponent],
})
export class SharedModule {}
