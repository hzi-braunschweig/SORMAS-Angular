/* eslint-disable @typescript-eslint/no-redeclare */

export type PersonAddressType =
  | 'HOME'
  | 'PLACE_OF_RESIDENCE'
  | 'PLACE_OF_EXPOSURE'
  | 'PLACE_OF_WORK'
  | 'PLACE_OF_ISOLATION'
  | 'EVENT_LOCATION'
  | 'OTHER_ADDRESS';

export const PersonAddressType = {
  HOME: 'HOME' as PersonAddressType,
  PLACEOFRESIDENCE: 'PLACE_OF_RESIDENCE' as PersonAddressType,
  PLACEOFEXPOSURE: 'PLACE_OF_EXPOSURE' as PersonAddressType,
  PLACEOFWORK: 'PLACE_OF_WORK' as PersonAddressType,
  PLACEOFISOLATION: 'PLACE_OF_ISOLATION' as PersonAddressType,
  EVENTLOCATION: 'EVENT_LOCATION' as PersonAddressType,
  OTHERADDRESS: 'OTHER_ADDRESS' as PersonAddressType,
};
