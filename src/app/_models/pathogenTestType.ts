/* eslint-disable @typescript-eslint/no-redeclare */

export type PathogenTestType =
  | 'ANTIBODY_DETECTION'
  | 'ANTIGEN_DETECTION'
  | 'RAPID_TEST'
  | 'CULTURE'
  | 'HISTOPATHOLOGY'
  | 'ISOLATION'
  | 'IGM_SERUM_ANTIBODY'
  | 'IGG_SERUM_ANTIBODY'
  | 'IGA_SERUM_ANTIBODY'
  | 'INCUBATION_TIME'
  | 'INDIRECT_FLUORESCENT_ANTIBODY'
  | 'DIRECT_FLUORESCENT_ANTIBODY'
  | 'MICROSCOPY'
  | 'NEUTRALIZING_ANTIBODIES'
  | 'PCR_RT_PCR'
  | 'GRAM_STAIN'
  | 'LATEX_AGGLUTINATION'
  | 'CQ_VALUE_DETECTION'
  | 'SEQUENCING'
  | 'DNA_MICROARRAY'
  | 'OTHER';

export const PathogenTestType = {
  ANTIBODYDETECTION: 'ANTIBODY_DETECTION' as PathogenTestType,
  ANTIGENDETECTION: 'ANTIGEN_DETECTION' as PathogenTestType,
  RAPIDTEST: 'RAPID_TEST' as PathogenTestType,
  CULTURE: 'CULTURE' as PathogenTestType,
  HISTOPATHOLOGY: 'HISTOPATHOLOGY' as PathogenTestType,
  ISOLATION: 'ISOLATION' as PathogenTestType,
  IGMSERUMANTIBODY: 'IGM_SERUM_ANTIBODY' as PathogenTestType,
  IGGSERUMANTIBODY: 'IGG_SERUM_ANTIBODY' as PathogenTestType,
  IGASERUMANTIBODY: 'IGA_SERUM_ANTIBODY' as PathogenTestType,
  INCUBATIONTIME: 'INCUBATION_TIME' as PathogenTestType,
  INDIRECTFLUORESCENTANTIBODY: 'INDIRECT_FLUORESCENT_ANTIBODY' as PathogenTestType,
  DIRECTFLUORESCENTANTIBODY: 'DIRECT_FLUORESCENT_ANTIBODY' as PathogenTestType,
  MICROSCOPY: 'MICROSCOPY' as PathogenTestType,
  NEUTRALIZINGANTIBODIES: 'NEUTRALIZING_ANTIBODIES' as PathogenTestType,
  PCRRTPCR: 'PCR_RT_PCR' as PathogenTestType,
  GRAMSTAIN: 'GRAM_STAIN' as PathogenTestType,
  LATEXAGGLUTINATION: 'LATEX_AGGLUTINATION' as PathogenTestType,
  CQVALUEDETECTION: 'CQ_VALUE_DETECTION' as PathogenTestType,
  SEQUENCING: 'SEQUENCING' as PathogenTestType,
  DNAMICROARRAY: 'DNA_MICROARRAY' as PathogenTestType,
  OTHER: 'OTHER' as PathogenTestType,
};
