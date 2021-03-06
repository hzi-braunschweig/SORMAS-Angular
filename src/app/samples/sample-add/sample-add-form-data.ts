import {
  Disease,
  PathogenTestResultType,
  PathogenTestType,
  SampleMaterial,
  SamplePurpose,
  SamplingReason,
  SpecimenCondition,
} from '../../_constants/enums';
import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_DATE,
  FORM_DATA_DATETIME,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
} from '../../_constants/form-data';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const optionsSamplePurpose = pipe.transform(SamplePurpose);
const optionsSampleTypes = pipe.transform(SampleMaterial);
const optionsSampleReasons = pipe.transform(SamplingReason);
const optionsLab = pipe.transform(['lab1', 'lab2']);
const optionsSpecimenCondition = pipe.transform(SpecimenCondition);
const optionsPathogenTestResult = pipe.transform(PathogenTestResultType);
const optionsPathogenTestType = pipe.transform(PathogenTestType);
const optionsDisease = pipe.transform(Disease);
const optionsDiseaseVariant = pipe.transform(['Variant1', 'Variant2']);

export const FORM_DATA_SAMPLE_ADD = [
  {
    id: 'purpose',
    title: 'Sample.samplePurpose',
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'samplePurpose',
        options: optionsSamplePurpose,
      },
    ],
  },
  {
    id: 'sample',
    title: 'Sample',
    required: true,
    fields: [
      {
        ...FORM_DATA_DATETIME,
        label: 'LabMessage.sampleDateTime',
        key: 'sampleDateTime',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sampleMaterial',
        label: 'Sample.sampleMaterial',
        validation: ['required'],
        options: optionsSampleTypes,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sampleMaterialText',
        label: 'Sample.sampleMaterialText',
        dependingOn: 'sampleMaterial',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'samplingReason',
        label: 'Sample.samplingReason',
        validation: ['required'],
        options: optionsSampleReasons,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'samplingReasonDetails',
        label: 'Sample.samplingReasonDetails',
        dependingOn: 'samplingReason',
        dependingOnValues: ['OTHER_REASON'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fieldSampleID',
        label: 'Sample.fieldSampleID',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'lab',
        label: 'Sample.lab',
        options: optionsLab,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'labDetails',
        label: 'Sample.labDetails',
        dependingOn: 'lab',
      },
    ],
  },
  {
    id: 'dispatched',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'shipped',
        label: 'Sample.shipped',
      },
      {
        ...FORM_DATA_DATE,
        key: 'shipmentDate',
        label: 'Sample.shipmentDate',
        validation: ['required'],
        newLine: true,
        dependingOn: 'shipped',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'shipmentDetails',
        label: 'Sample.shipmentDetails',
        dependingOn: 'shipped',
      },
    ],
  },
  {
    id: 'received',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'received',
        label: 'Sample.received',
      },
      {
        ...FORM_DATA_DATE,
        key: 'receivedDate',
        label: 'Sample.receivedDate',
        validation: ['required'],
        newLine: true,
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'labSampleID',
        label: 'Sample.labSampleID',
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'specimenCondition',
        label: 'Sample.specimenCondition',
        options: optionsSpecimenCondition,
        newLine: true,
        validation: ['required'],
        dependingOn: 'received',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'noTestPossibleReason',
        label: 'Sample.noTestPossibleReason',
        validation: ['required'],
        dependingOn: 'specimenCondition',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'comment',
        label: 'Sample.comment',
        className: 'size-full',
        dependingOn: 'received',
      },
    ],
  },
  {
    id: 'testResult',
    title: '',
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'referred',
        label: 'sampleIncludeTestOnCreation',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'pathogenTestResult',
        label: 'PathogenTest.testResult',
        options: optionsPathogenTestResult,
        newLine: true,
        validation: ['required'],
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_DATE,
        key: 'reportDateTime',
        label: 'PathogenTest.reportDate',
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'viaLims',
        label: 'PathogenTest.viaLims',
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'requestedPathogenTests',
        label: 'Sample.typeOfTest',
        options: optionsPathogenTestType,
        newLine: true,
        validation: ['required'],
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'testedDisease',
        label: 'PathogenTest.testedDisease',
        options: optionsDisease,
        newLine: true,
        validation: ['required'],
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'testedDiseaseVariant',
        label: 'PathogenTest.testedDiseaseVariant',
        options: optionsDiseaseVariant,
        dependingOn: 'testedDisease',
        dependingOnValues: ['CORONAVIRUS'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'testedDiseaseDetails',
        label: 'PathogenTest.testedDiseaseDetails',
        dependingOn: 'testedDisease',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'testResultVerified',
        label: 'PathogenTest.testResultVerified',
        dependingOn: 'referred',
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'testDateTime',
        label: 'Sample.resultDate',
        validation: ['required'],
        newLine: true,
        dependingOn: 'referred',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'resultDetails',
        label: 'Sample.resultDetails',
        className: 'size-full',
        dependingOn: 'referred',
      },
    ],
  },
];
