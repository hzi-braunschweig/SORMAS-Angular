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
 */ /* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../encoder';

import { Observable } from 'rxjs';

import { ExternalVisitDto } from '../model/externalVisitDto';
import { PersonQuarantineEndDto } from '../model/personQuarantineEndDto';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ExternalVisitsControllerService {
  protected basePath = '/sormas-rest';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * Get follow up end dates
   * Get latest follow up end date assigned to the specified person. Note: Only returns values for persons who have their symptom journal status set to ACCEPTED! Only returns values changed after {since}, which is interpreted as a UNIX timestamp.
   * @param since
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getLatestFollowUpEndDates(
    since: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<string>;
  public getLatestFollowUpEndDates(
    since: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<string>>;
  public getLatestFollowUpEndDates(
    since: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<string>>;
  public getLatestFollowUpEndDates(
    since: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (since === null || since === undefined) {
      throw new Error(
        'Required parameter since was null or undefined when calling getLatestFollowUpEndDates.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<string>(
      'get',
      `${this.basePath}/visits-external/followUpEndDates/${encodeURIComponent(String(since))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   *
   *
   * @param since
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getLatestQuarantineEndDates(
    since: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<PersonQuarantineEndDto>>;
  public getLatestQuarantineEndDates(
    since: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<PersonQuarantineEndDto>>>;
  public getLatestQuarantineEndDates(
    since: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<PersonQuarantineEndDto>>>;
  public getLatestQuarantineEndDates(
    since: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (since === null || since === undefined) {
      throw new Error(
        'Required parameter since was null or undefined when calling getLatestQuarantineEndDates.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<Array<PersonQuarantineEndDto>>(
      'get',
      `${this.basePath}/visits-external/quarantineEndDates/${encodeURIComponent(String(since))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Get person information
   * Get some personal data for a specific person
   * @param personUuid
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPersonByUuid(
    personUuid: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<string>;
  public getPersonByUuid(
    personUuid: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<string>>;
  public getPersonByUuid(
    personUuid: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<string>>;
  public getPersonByUuid(
    personUuid: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (personUuid === null || personUuid === undefined) {
      throw new Error(
        'Required parameter personUuid was null or undefined when calling getPersonByUuid.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<string>(
      'get',
      `${this.basePath}/visits-external/person/${encodeURIComponent(String(personUuid))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Get API version
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getVersion(observe?: 'body', reportProgress?: boolean): Observable<string>;
  public getVersion(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<string>>;
  public getVersion(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
  public getVersion(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<string>('get', `${this.basePath}/visits-external/version`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   * Check person validity
   * Check if a the Uuid given as parameter exists in SORMAS.
   * @param personUuid
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public isValidPersonUuid(
    personUuid: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<string>;
  public isValidPersonUuid(
    personUuid: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<string>>;
  public isValidPersonUuid(
    personUuid: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<string>>;
  public isValidPersonUuid(
    personUuid: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (personUuid === null || personUuid === undefined) {
      throw new Error(
        'Required parameter personUuid was null or undefined when calling isValidPersonUuid.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<string>(
      'get',
      `${this.basePath}/visits-external/person/${encodeURIComponent(String(personUuid))}/isValid`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }

  /**
   * Save visits
   * Upload visits with all symptom and disease related data to SORMAS.
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postExternalVisits(
    body?: Array<ExternalVisitDto>,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<string>;
  public postExternalVisits(
    body?: Array<ExternalVisitDto>,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<string>>;
  public postExternalVisits(
    body?: Array<ExternalVisitDto>,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<string>>;
  public postExternalVisits(
    body?: Array<ExternalVisitDto>,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json; charset=UTF-8'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<string>('post', `${this.basePath}/visits-external`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   * Save symptom journal status
   *
   * @param personUuid
   * @param body status may be one of the following:&lt;br/&gt;UNREGISTERED: User has not yet sent any state&lt;br/&gt;REGISTERED: After successful registration in SymptomJournal&lt;br/&gt;ACCEPTED: User has accepted a confirmation&lt;br/&gt;REJECTED: User has rejected (declined) a confirmation&lt;br/&gt;DELETED: User was deleted
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postSymptomJournalStatus(
    personUuid: string,
    body?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<string>;
  public postSymptomJournalStatus(
    personUuid: string,
    body?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<string>>;
  public postSymptomJournalStatus(
    personUuid: string,
    body?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<string>>;
  public postSymptomJournalStatus(
    personUuid: string,
    body?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (personUuid === null || personUuid === undefined) {
      throw new Error(
        'Required parameter personUuid was null or undefined when calling postSymptomJournalStatus.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json; charset=UTF-8'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json; charset=UTF-8'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.request<string>(
      'post',
      `${this.basePath}/visits-external/person/${encodeURIComponent(String(personUuid))}/status`,
      {
        body: body,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress,
      }
    );
  }
}
