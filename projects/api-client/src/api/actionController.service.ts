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

import { ActionDto } from '../model/actionDto';
import { PushResult } from '../model/pushResult';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class ActionControllerService {
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
   *
   *
   * @param since
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAll(
    since: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<ActionDto>>;
  public getAll(
    since: number,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<ActionDto>>>;
  public getAll(
    since: number,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<ActionDto>>>;
  public getAll(
    since: number,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (since === null || since === undefined) {
      throw new Error('Required parameter since was null or undefined when calling getAll.');
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

    return this.httpClient.request<Array<ActionDto>>(
      'get',
      `${this.basePath}/actions/all/${encodeURIComponent(String(since))}`,
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
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getAllUuids(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
  public getAllUuids(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<string>>>;
  public getAllUuids(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<string>>>;
  public getAllUuids(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
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

    return this.httpClient.request<Array<string>>('get', `${this.basePath}/actions/uuids`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   *
   *
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getByUuids(
    body?: Array<string>,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<ActionDto>>;
  public getByUuids(
    body?: Array<string>,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<ActionDto>>>;
  public getByUuids(
    body?: Array<string>,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<ActionDto>>>;
  public getByUuids(
    body?: Array<string>,
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

    return this.httpClient.request<Array<ActionDto>>('post', `${this.basePath}/actions/query`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }

  /**
   *
   *
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public postActions(
    body?: Array<ActionDto>,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Array<PushResult>>;
  public postActions(
    body?: Array<ActionDto>,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<Array<PushResult>>>;
  public postActions(
    body?: Array<ActionDto>,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<Array<PushResult>>>;
  public postActions(
    body?: Array<ActionDto>,
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

    return this.httpClient.request<Array<PushResult>>('post', `${this.basePath}/actions/push`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress,
    });
  }
}
