import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        responsibleDepartments: {
          responsibleDepartment: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'program',
                },
              },
            },
          },
        },
        collection: {
          // Replaced by publicartCollections. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
        inventoryStatusList: {
          inventoryStatus: {
            [config]: {
              defaultValue: null,
            },
          },
        },
        computedCurrentLocation: {
          [config]: {
            searchView: {
              props: {
                source: 'location/local,location/offsite,organization/local,organization/shared,place/local,place/shared',
              },
            },
          },
        },
        objectNameList: {
          objectNameGroup: {
            objectName: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/worktype',
                  },
                },
              },
            },
          },
        },
        materialGroupList: {
          materialGroup: {
            material: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/material',
                  },
                },
              },
            },
          },
        },
        objectProductionDateGroupList: {
          // Replaced by publicartProductionDateGroupList. Hide from search.
          [config]: {
            searchDisabled: true,
          },
        },
      },
      'ns2:collectionobjects_publicart': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/publicart',
          },
        },
        publicartCollections: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartCollection: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_publicart.publicartCollection.name',
                  defaultMessage: 'Collection',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local,organization/shared',
                },
              },
            },
          },
        },
        publicartProductionDateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartProductionDateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_publicart.publicartProductionDateGroup.name',
                  defaultMessage: 'Artwork date',
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
            publicartProductionDate: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionDate.fullName',
                    defaultMessage: 'Artwork date',
                  },
                  groupName: {
                    id: 'field.collectionobjects_publicart.publicartProductionDate.groupName',
                    defaultMessage: 'Date',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                searchView: {
                  type: DateInput,
                },
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            publicartProductionDateType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionDateType.fullName',
                    defaultMessage: 'Artwork date type',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionDateType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'proddatetype',
                  },
                },
              },
            },
          },
        },
        publicartProductionPersonGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publicartProductionPersonGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_publicart.publicartProductionPersonGroup.name',
                  defaultMessage: 'Artwork creator',
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
            publicartProductionPerson: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionPerson.fullName',
                    defaultMessage: 'Artwork creator name',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionPerson.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            publicartProductionPersonRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonRole.fullName',
                    defaultMessage: 'Artwork creator role',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodpersonrole',
                  },
                },
              },
            },
            publicartProductionPersonType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonType.fullName',
                    defaultMessage: 'Artwork creator type',
                  },
                  name: {
                    id: 'field.collectionobjects_publicart.publicartProductionPersonType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'creatorTypes',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
