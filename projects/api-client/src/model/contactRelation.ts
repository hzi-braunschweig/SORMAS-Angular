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

export type ContactRelation =
  | 'SAME_HOUSEHOLD'
  | 'FAMILY_MEMBER_OR_FRIEND'
  | 'SAME_ENVIRONMENT'
  | 'MEDICAL_CARE'
  | 'OTHER';

export const ContactRelation = {
  SAMEHOUSEHOLD: 'SAME_HOUSEHOLD' as ContactRelation,
  FAMILYMEMBERORFRIEND: 'FAMILY_MEMBER_OR_FRIEND' as ContactRelation,
  SAMEENVIRONMENT: 'SAME_ENVIRONMENT' as ContactRelation,
  MEDICALCARE: 'MEDICAL_CARE' as ContactRelation,
  OTHER: 'OTHER' as ContactRelation,
};
