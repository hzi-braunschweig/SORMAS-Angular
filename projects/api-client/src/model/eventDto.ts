/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.51.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Disease } from './disease';
import { EventInvestigationStatus } from './eventInvestigationStatus';
import { EventSourceType } from './eventSourceType';
import { EventStatus } from './eventStatus';
import { LocationDto } from './locationDto';
import { TypeOfPlace } from './typeOfPlace';
import { UserReferenceDto } from './userReferenceDto';
import { YesNoUnknown } from './yesNoUnknown';

export interface EventDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  eventStatus: EventStatus;
  eventInvestigationStatus?: EventInvestigationStatus;
  eventInvestigationStartDate?: Date;
  eventInvestigationEndDate?: Date;
  externalId?: string;
  eventTitle?: string;
  eventDesc: string;
  nosocomial?: YesNoUnknown;
  startDate?: Date;
  endDate?: Date;
  reportDateTime: Date;
  reportingUser: UserReferenceDto;
  eventLocation?: LocationDto;
  typeOfPlace?: TypeOfPlace;
  srcType?: EventSourceType;
  srcFirstName?: string;
  srcLastName?: string;
  srcTelNo?: string;
  srcEmail?: string;
  srcMediaWebsite?: string;
  srcMediaName?: string;
  srcMediaDetails?: string;
  disease?: Disease;
  diseaseDetails?: string;
  surveillanceOfficer?: UserReferenceDto;
  typeOfPlaceText?: string;
  reportLat?: number;
  reportLon?: number;
  reportLatLonAccuracy?: number;
  multiDayEvent?: boolean;
}