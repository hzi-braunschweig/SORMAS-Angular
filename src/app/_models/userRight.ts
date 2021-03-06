/* eslint-disable @typescript-eslint/no-redeclare */

export type UserRight =
  | 'CASE_CREATE'
  | 'CASE_VIEW'
  | 'CASE_EDIT'
  | 'CASE_TRANSFER'
  | 'CASE_REFER_FROM_POE'
  | 'CASE_INVESTIGATE'
  | 'CASE_CLASSIFY'
  | 'CASE_CHANGE_DISEASE'
  | 'CASE_CHANGE_EPID_NUMBER'
  | 'CASE_DELETE'
  | 'CASE_IMPORT'
  | 'CASE_EXPORT'
  | 'CASE_SHARE'
  | 'CASE_ARCHIVE'
  | 'CASE_VIEW_ARCHIVED'
  | 'CASE_MERGE'
  | 'PERSON_VIEW'
  | 'PERSON_EDIT'
  | 'PERSON_DELETE'
  | 'SAMPLE_CREATE'
  | 'SAMPLE_VIEW'
  | 'SAMPLE_EDIT'
  | 'SAMPLE_EDIT_NOT_OWNED'
  | 'SAMPLE_DELETE'
  | 'SAMPLE_TRANSFER'
  | 'SAMPLE_EXPORT'
  | 'SAMPLE_VIEW_ARCHIVED'
  | 'PATHOGEN_TEST_CREATE'
  | 'PATHOGEN_TEST_EDIT'
  | 'PATHOGEN_TEST_DELETE'
  | 'ADDITIONAL_TEST_VIEW'
  | 'ADDITIONAL_TEST_CREATE'
  | 'ADDITIONAL_TEST_EDIT'
  | 'ADDITIONAL_TEST_DELETE'
  | 'CONTACT_CREATE'
  | 'CONTACT_IMPORT'
  | 'CONTACT_VIEW'
  | 'CONTACT_ASSIGN'
  | 'CONTACT_EDIT'
  | 'CONTACT_DELETE'
  | 'CONTACT_CLASSIFY'
  | 'CONTACT_CONVERT'
  | 'CONTACT_EXPORT'
  | 'CONTACT_VIEW_ARCHIVED'
  | 'CONTACT_REASSIGN_CASE'
  | 'MANAGE_EXTERNAL_SYMPTOM_JOURNAL'
  | 'VISIT_CREATE'
  | 'VISIT_EDIT'
  | 'VISIT_DELETE'
  | 'VISIT_EXPORT'
  | 'TASK_CREATE'
  | 'TASK_VIEW'
  | 'TASK_EDIT'
  | 'TASK_ASSIGN'
  | 'TASK_VIEW_ARCHIVED'
  | 'TASK_DELETE'
  | 'TASK_EXPORT'
  | 'ACTION_CREATE'
  | 'ACTION_DELETE'
  | 'ACTION_EDIT'
  | 'EVENT_CREATE'
  | 'EVENT_VIEW'
  | 'EVENT_EDIT'
  | 'EVENT_EXPORT'
  | 'EVENT_ARCHIVE'
  | 'EVENT_DELETE'
  | 'EVENT_VIEW_ARCHIVED'
  | 'EVENTPARTICIPANT_CREATE'
  | 'EVENTPARTICIPANT_EDIT'
  | 'EVENTPARTICIPANT_DELETE'
  | 'EVENTPARTICIPANT_IMPORT'
  | 'WEEKLYREPORT_CREATE'
  | 'WEEKLYREPORT_VIEW'
  | 'USER_CREATE'
  | 'USER_EDIT'
  | 'USER_VIEW'
  | 'CONFIGURATION_ACCESS'
  | 'OUTBREAK_CONFIGURE_ALL'
  | 'OUTBREAK_CONFIGURE_RESTRICTED'
  | 'SEND_MANUAL_EXTERNAL_MESSAGES'
  | 'STATISTICS_ACCESS'
  | 'STATISTICS_EXPORT'
  | 'DATABASE_EXPORT_ACCESS'
  | 'PERFORM_BULK_OPERATIONS'
  | 'MANAGE_PUBLIC_EXPORT_CONFIGURATION'
  | 'PERFORM_BULK_OPERATIONS_CASE_SAMPLES'
  | 'INFRASTRUCTURE_CREATE'
  | 'INFRASTRUCTURE_EDIT'
  | 'INFRASTRUCTURE_VIEW'
  | 'INFRASTRUCTURE_VIEW_ARCHIVED'
  | 'INFRASTRUCTURE_EXPORT'
  | 'INFRASTRUCTURE_IMPORT'
  | 'INFRASTRUCTURE_ARCHIVE'
  | 'USER_RIGHTS_MANAGE'
  | 'DASHBOARD_SURVEILLANCE_ACCESS'
  | 'DASHBOARD_CONTACT_ACCESS'
  | 'DASHBOARD_CONTACT_VIEW_TRANSMISSION_CHAINS'
  | 'DASHBOARD_CAMPAIGNS_ACCESS'
  | 'CASE_MANAGEMENT_ACCESS'
  | 'THERAPY_VIEW'
  | 'PRESCRIPTION_CREATE'
  | 'PRESCRIPTION_EDIT'
  | 'PRESCRIPTION_DELETE'
  | 'TREATMENT_CREATE'
  | 'TREATMENT_EDIT'
  | 'TREATMENT_DELETE'
  | 'CLINICAL_COURSE_VIEW'
  | 'CLINICAL_COURSE_EDIT'
  | 'CLINICAL_VISIT_CREATE'
  | 'CLINICAL_VISIT_EDIT'
  | 'CLINICAL_VISIT_DELETE'
  | 'PORT_HEALTH_INFO_VIEW'
  | 'PORT_HEALTH_INFO_EDIT'
  | 'POPULATION_MANAGE'
  | 'DOCUMENT_TEMPLATE_MANAGEMENT'
  | 'QUARANTINE_ORDER_CREATE'
  | 'LINE_LISTING_CONFIGURE'
  | 'LINE_LISTING_CONFIGURE_NATION'
  | 'AGGREGATE_REPORT_VIEW'
  | 'AGGREGATE_REPORT_EXPORT'
  | 'AGGREGATE_REPORT_EDIT'
  | 'SEE_PERSONAL_DATA_IN_JURISDICTION'
  | 'SEE_PERSONAL_DATA_OUTSIDE_JURISDICTION'
  | 'SEE_SENSITIVE_DATA_IN_JURISDICTION'
  | 'SEE_SENSITIVE_DATA_OUTSIDE_JURISDICTION'
  | 'CAMPAIGN_VIEW'
  | 'CAMPAIGN_EDIT'
  | 'CAMPAIGN_ARCHIVE'
  | 'CAMPAIGN_DELETE'
  | 'CAMPAIGN_FORM_DATA_VIEW'
  | 'CAMPAIGN_FORM_DATA_EDIT'
  | 'CAMPAIGN_FORM_DATA_ARCHIVE'
  | 'CAMPAIGN_FORM_DATA_DELETE'
  | 'CAMPAIGN_FORM_DATA_EXPORT'
  | 'BAG_EXPORT'
  | 'SORMAS_TO_SORMAS_SHARE'
  | 'LAB_MESSAGES';

export const UserRight = {
  CASECREATE: 'CASE_CREATE' as UserRight,
  CASEVIEW: 'CASE_VIEW' as UserRight,
  CASEEDIT: 'CASE_EDIT' as UserRight,
  CASETRANSFER: 'CASE_TRANSFER' as UserRight,
  CASEREFERFROMPOE: 'CASE_REFER_FROM_POE' as UserRight,
  CASEINVESTIGATE: 'CASE_INVESTIGATE' as UserRight,
  CASECLASSIFY: 'CASE_CLASSIFY' as UserRight,
  CASECHANGEDISEASE: 'CASE_CHANGE_DISEASE' as UserRight,
  CASECHANGEEPIDNUMBER: 'CASE_CHANGE_EPID_NUMBER' as UserRight,
  CASEDELETE: 'CASE_DELETE' as UserRight,
  CASEIMPORT: 'CASE_IMPORT' as UserRight,
  CASEEXPORT: 'CASE_EXPORT' as UserRight,
  CASESHARE: 'CASE_SHARE' as UserRight,
  CASEARCHIVE: 'CASE_ARCHIVE' as UserRight,
  CASEVIEWARCHIVED: 'CASE_VIEW_ARCHIVED' as UserRight,
  CASEMERGE: 'CASE_MERGE' as UserRight,
  PERSONVIEW: 'PERSON_VIEW' as UserRight,
  PERSONEDIT: 'PERSON_EDIT' as UserRight,
  PERSONDELETE: 'PERSON_DELETE' as UserRight,
  SAMPLECREATE: 'SAMPLE_CREATE' as UserRight,
  SAMPLEVIEW: 'SAMPLE_VIEW' as UserRight,
  SAMPLEEDIT: 'SAMPLE_EDIT' as UserRight,
  SAMPLEEDITNOTOWNED: 'SAMPLE_EDIT_NOT_OWNED' as UserRight,
  SAMPLEDELETE: 'SAMPLE_DELETE' as UserRight,
  SAMPLETRANSFER: 'SAMPLE_TRANSFER' as UserRight,
  SAMPLEEXPORT: 'SAMPLE_EXPORT' as UserRight,
  SAMPLEVIEWARCHIVED: 'SAMPLE_VIEW_ARCHIVED' as UserRight,
  PATHOGENTESTCREATE: 'PATHOGEN_TEST_CREATE' as UserRight,
  PATHOGENTESTEDIT: 'PATHOGEN_TEST_EDIT' as UserRight,
  PATHOGENTESTDELETE: 'PATHOGEN_TEST_DELETE' as UserRight,
  ADDITIONALTESTVIEW: 'ADDITIONAL_TEST_VIEW' as UserRight,
  ADDITIONALTESTCREATE: 'ADDITIONAL_TEST_CREATE' as UserRight,
  ADDITIONALTESTEDIT: 'ADDITIONAL_TEST_EDIT' as UserRight,
  ADDITIONALTESTDELETE: 'ADDITIONAL_TEST_DELETE' as UserRight,
  CONTACTCREATE: 'CONTACT_CREATE' as UserRight,
  CONTACTIMPORT: 'CONTACT_IMPORT' as UserRight,
  CONTACTVIEW: 'CONTACT_VIEW' as UserRight,
  CONTACTASSIGN: 'CONTACT_ASSIGN' as UserRight,
  CONTACTEDIT: 'CONTACT_EDIT' as UserRight,
  CONTACTDELETE: 'CONTACT_DELETE' as UserRight,
  CONTACTCLASSIFY: 'CONTACT_CLASSIFY' as UserRight,
  CONTACTCONVERT: 'CONTACT_CONVERT' as UserRight,
  CONTACTEXPORT: 'CONTACT_EXPORT' as UserRight,
  CONTACTVIEWARCHIVED: 'CONTACT_VIEW_ARCHIVED' as UserRight,
  CONTACTREASSIGNCASE: 'CONTACT_REASSIGN_CASE' as UserRight,
  MANAGEEXTERNALSYMPTOMJOURNAL: 'MANAGE_EXTERNAL_SYMPTOM_JOURNAL' as UserRight,
  VISITCREATE: 'VISIT_CREATE' as UserRight,
  VISITEDIT: 'VISIT_EDIT' as UserRight,
  VISITDELETE: 'VISIT_DELETE' as UserRight,
  VISITEXPORT: 'VISIT_EXPORT' as UserRight,
  TASKCREATE: 'TASK_CREATE' as UserRight,
  TASKVIEW: 'TASK_VIEW' as UserRight,
  TASKEDIT: 'TASK_EDIT' as UserRight,
  TASKASSIGN: 'TASK_ASSIGN' as UserRight,
  TASKVIEWARCHIVED: 'TASK_VIEW_ARCHIVED' as UserRight,
  TASKDELETE: 'TASK_DELETE' as UserRight,
  TASKEXPORT: 'TASK_EXPORT' as UserRight,
  ACTIONCREATE: 'ACTION_CREATE' as UserRight,
  ACTIONDELETE: 'ACTION_DELETE' as UserRight,
  ACTIONEDIT: 'ACTION_EDIT' as UserRight,
  EVENTCREATE: 'EVENT_CREATE' as UserRight,
  EVENTVIEW: 'EVENT_VIEW' as UserRight,
  EVENTEDIT: 'EVENT_EDIT' as UserRight,
  EVENTEXPORT: 'EVENT_EXPORT' as UserRight,
  EVENTARCHIVE: 'EVENT_ARCHIVE' as UserRight,
  EVENTDELETE: 'EVENT_DELETE' as UserRight,
  EVENTVIEWARCHIVED: 'EVENT_VIEW_ARCHIVED' as UserRight,
  EVENTPARTICIPANTCREATE: 'EVENTPARTICIPANT_CREATE' as UserRight,
  EVENTPARTICIPANTEDIT: 'EVENTPARTICIPANT_EDIT' as UserRight,
  EVENTPARTICIPANTDELETE: 'EVENTPARTICIPANT_DELETE' as UserRight,
  EVENTPARTICIPANTIMPORT: 'EVENTPARTICIPANT_IMPORT' as UserRight,
  WEEKLYREPORTCREATE: 'WEEKLYREPORT_CREATE' as UserRight,
  WEEKLYREPORTVIEW: 'WEEKLYREPORT_VIEW' as UserRight,
  USERCREATE: 'USER_CREATE' as UserRight,
  USEREDIT: 'USER_EDIT' as UserRight,
  USERVIEW: 'USER_VIEW' as UserRight,
  CONFIGURATIONACCESS: 'CONFIGURATION_ACCESS' as UserRight,
  OUTBREAKCONFIGUREALL: 'OUTBREAK_CONFIGURE_ALL' as UserRight,
  OUTBREAKCONFIGURERESTRICTED: 'OUTBREAK_CONFIGURE_RESTRICTED' as UserRight,
  SENDMANUALEXTERNALMESSAGES: 'SEND_MANUAL_EXTERNAL_MESSAGES' as UserRight,
  STATISTICSACCESS: 'STATISTICS_ACCESS' as UserRight,
  STATISTICSEXPORT: 'STATISTICS_EXPORT' as UserRight,
  DATABASEEXPORTACCESS: 'DATABASE_EXPORT_ACCESS' as UserRight,
  PERFORMBULKOPERATIONS: 'PERFORM_BULK_OPERATIONS' as UserRight,
  MANAGEPUBLICEXPORTCONFIGURATION: 'MANAGE_PUBLIC_EXPORT_CONFIGURATION' as UserRight,
  PERFORMBULKOPERATIONSCASESAMPLES: 'PERFORM_BULK_OPERATIONS_CASE_SAMPLES' as UserRight,
  INFRASTRUCTURECREATE: 'INFRASTRUCTURE_CREATE' as UserRight,
  INFRASTRUCTUREEDIT: 'INFRASTRUCTURE_EDIT' as UserRight,
  INFRASTRUCTUREVIEW: 'INFRASTRUCTURE_VIEW' as UserRight,
  INFRASTRUCTUREVIEWARCHIVED: 'INFRASTRUCTURE_VIEW_ARCHIVED' as UserRight,
  INFRASTRUCTUREEXPORT: 'INFRASTRUCTURE_EXPORT' as UserRight,
  INFRASTRUCTUREIMPORT: 'INFRASTRUCTURE_IMPORT' as UserRight,
  INFRASTRUCTUREARCHIVE: 'INFRASTRUCTURE_ARCHIVE' as UserRight,
  USERRIGHTSMANAGE: 'USER_RIGHTS_MANAGE' as UserRight,
  DASHBOARDSURVEILLANCEACCESS: 'DASHBOARD_SURVEILLANCE_ACCESS' as UserRight,
  DASHBOARDCONTACTACCESS: 'DASHBOARD_CONTACT_ACCESS' as UserRight,
  DASHBOARDCONTACTVIEWTRANSMISSIONCHAINS: 'DASHBOARD_CONTACT_VIEW_TRANSMISSION_CHAINS' as UserRight,
  DASHBOARDCAMPAIGNSACCESS: 'DASHBOARD_CAMPAIGNS_ACCESS' as UserRight,
  CASEMANAGEMENTACCESS: 'CASE_MANAGEMENT_ACCESS' as UserRight,
  THERAPYVIEW: 'THERAPY_VIEW' as UserRight,
  PRESCRIPTIONCREATE: 'PRESCRIPTION_CREATE' as UserRight,
  PRESCRIPTIONEDIT: 'PRESCRIPTION_EDIT' as UserRight,
  PRESCRIPTIONDELETE: 'PRESCRIPTION_DELETE' as UserRight,
  TREATMENTCREATE: 'TREATMENT_CREATE' as UserRight,
  TREATMENTEDIT: 'TREATMENT_EDIT' as UserRight,
  TREATMENTDELETE: 'TREATMENT_DELETE' as UserRight,
  CLINICALCOURSEVIEW: 'CLINICAL_COURSE_VIEW' as UserRight,
  CLINICALCOURSEEDIT: 'CLINICAL_COURSE_EDIT' as UserRight,
  CLINICALVISITCREATE: 'CLINICAL_VISIT_CREATE' as UserRight,
  CLINICALVISITEDIT: 'CLINICAL_VISIT_EDIT' as UserRight,
  CLINICALVISITDELETE: 'CLINICAL_VISIT_DELETE' as UserRight,
  PORTHEALTHINFOVIEW: 'PORT_HEALTH_INFO_VIEW' as UserRight,
  PORTHEALTHINFOEDIT: 'PORT_HEALTH_INFO_EDIT' as UserRight,
  POPULATIONMANAGE: 'POPULATION_MANAGE' as UserRight,
  DOCUMENTTEMPLATEMANAGEMENT: 'DOCUMENT_TEMPLATE_MANAGEMENT' as UserRight,
  QUARANTINEORDERCREATE: 'QUARANTINE_ORDER_CREATE' as UserRight,
  LINELISTINGCONFIGURE: 'LINE_LISTING_CONFIGURE' as UserRight,
  LINELISTINGCONFIGURENATION: 'LINE_LISTING_CONFIGURE_NATION' as UserRight,
  AGGREGATEREPORTVIEW: 'AGGREGATE_REPORT_VIEW' as UserRight,
  AGGREGATEREPORTEXPORT: 'AGGREGATE_REPORT_EXPORT' as UserRight,
  AGGREGATEREPORTEDIT: 'AGGREGATE_REPORT_EDIT' as UserRight,
  SEEPERSONALDATAINJURISDICTION: 'SEE_PERSONAL_DATA_IN_JURISDICTION' as UserRight,
  SEEPERSONALDATAOUTSIDEJURISDICTION: 'SEE_PERSONAL_DATA_OUTSIDE_JURISDICTION' as UserRight,
  SEESENSITIVEDATAINJURISDICTION: 'SEE_SENSITIVE_DATA_IN_JURISDICTION' as UserRight,
  SEESENSITIVEDATAOUTSIDEJURISDICTION: 'SEE_SENSITIVE_DATA_OUTSIDE_JURISDICTION' as UserRight,
  CAMPAIGNVIEW: 'CAMPAIGN_VIEW' as UserRight,
  CAMPAIGNEDIT: 'CAMPAIGN_EDIT' as UserRight,
  CAMPAIGNARCHIVE: 'CAMPAIGN_ARCHIVE' as UserRight,
  CAMPAIGNDELETE: 'CAMPAIGN_DELETE' as UserRight,
  CAMPAIGNFORMDATAVIEW: 'CAMPAIGN_FORM_DATA_VIEW' as UserRight,
  CAMPAIGNFORMDATAEDIT: 'CAMPAIGN_FORM_DATA_EDIT' as UserRight,
  CAMPAIGNFORMDATAARCHIVE: 'CAMPAIGN_FORM_DATA_ARCHIVE' as UserRight,
  CAMPAIGNFORMDATADELETE: 'CAMPAIGN_FORM_DATA_DELETE' as UserRight,
  CAMPAIGNFORMDATAEXPORT: 'CAMPAIGN_FORM_DATA_EXPORT' as UserRight,
  BAGEXPORT: 'BAG_EXPORT' as UserRight,
  SORMASTOSORMASSHARE: 'SORMAS_TO_SORMAS_SHARE' as UserRight,
  LABMESSAGES: 'LAB_MESSAGES' as UserRight,
};
