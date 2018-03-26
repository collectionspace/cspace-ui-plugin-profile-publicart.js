import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    TextInput,
    StructuredDateInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:places_common': {
        placeGeoRefGroupList: {
          placeGeoRefGroup: {
            [config]: {
              view: {
                props: {
                  tabular: true,
                },
              },
            },
          },
        },
      },
      'ns2:places_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/place/local/publicart',
          },
        },
        placementType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_publicart.placementType.name',
                defaultMessage: 'Placement type',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'placementTypes',
              },
            },
          },
        },
        placementEnvironment: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.places_publicart.placementEnvironment.name',
                defaultMessage: 'Placement environment',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'placementEnvironments',
              },
            },
          },
        },
        publicartPlaceOwnerGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartPlaceOwnerGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.places_publicart.publicartPlaceOwnerGroup.name',
                  defaultMessage: 'Ownership',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            owner: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_publicart.owner.name',
                    defaultMessage: 'Owner',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local',
                  },
                },
              },
            },
            ownerType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_publicart.ownerType.fullName',
                    defaultMessage: 'Owner type',
                  },
                  name: {
                    id: 'field.places_publicart.ownerType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'placeOwnerTypes',
                  },
                },
              },
            },
            ownershipDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.places_publicart.ownershipDateGroup.fullName',
                    defaultMessage: 'Ownership date',
                  },
                  name: {
                    id: 'field.places_publicart.ownershipDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            ownershipNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.places_publicart.ownershipNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};