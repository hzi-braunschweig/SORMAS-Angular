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
import { DistrictReferenceDto } from './districtReferenceDto';
import { FeatureType } from './featureType';
import { RegionReferenceDto } from './regionReferenceDto';

export interface FeatureConfigurationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  featureType?: FeatureType;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  disease?: Disease;
  endDate?: Date;
  enabled?: boolean;
}