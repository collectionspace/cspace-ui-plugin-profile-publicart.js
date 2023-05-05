import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    StructuredDateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:acquisitions_commission': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/acquisition/domain/commission',
        },
      },
      commissioningBodyList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        commissioningBody: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.commission.commissioningBody.name',
                defaultMessage: 'Commissioning body',
              },
            }),
            repeating: true,
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local,person/shared,organization/local,organization/shared',
              },
            },
          },
        },
      },
      commissionDate: {
        [config]: {
          dataType: DATA_TYPE_STRUCTURED_DATE,
          messages: defineMessages({
            name: {
              id: 'field.ext.commission.commissionDate.name',
              defaultMessage: 'Commission date',
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
      commissionBudgetGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        commissionBudgetGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.commission.commissionBudgetGroup.name',
                defaultMessage: 'Budget',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
            },
          },
          commissionBudgetType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.commission.commissionBudgetType.fullName',
                  defaultMessage: 'Budget type',
                },
                name: {
                  id: 'field.ext.commission.commissionBudgetType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'budgettype',
                },
              },
            },
          },
          commissionBudgetTypeNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.commission.commissionBudgetTypeNote.fullName',
                  defaultMessage: 'Budget note',
                },
                name: {
                  id: 'field.ext.commission.commissionBudgetTypeNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
          commissionProjectedValueCurrency: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.commission.commissionProjectedValueCurrency.fullName',
                  defaultMessage: 'Projected value currency',
                },
                groupName: {
                  id: 'field.ext.commission.commissionProjectedValueCurrency.groupName',
                  defaultMessage: 'Projected value currency',
                },
                name: {
                  id: 'field.ext.commission.commissionProjectedValueCurrency.name',
                  defaultMessage: 'Currency',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'currency',
                },
              },
            },
          },
          commissionProjectedValueAmount: {
            [config]: {
              dataType: DATA_TYPE_FLOAT,
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.commission.commissionProjectedValueAmount.fullName',
                  defaultMessage: 'Projected value amount',
                },
                groupName: {
                  id: 'field.ext.commission.commissionProjectedValueAmount.groupName',
                  defaultMessage: 'Projected value amount',
                },
                name: {
                  id: 'field.ext.commission.commissionProjectedValueAmount.name',
                  defaultMessage: 'Amount',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          commissionActualValueCurrency: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.commission.commissionActualValueCurrency.fullName',
                  defaultMessage: 'Actual value currency',
                },
                groupName: {
                  id: 'field.ext.commission.commissionActualValueCurrency.groupName',
                  defaultMessage: 'Actual value currency',
                },
                name: {
                  id: 'field.ext.commission.commissionActualValueCurrency.name',
                  defaultMessage: 'Currency',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'currency',
                },
              },
            },
          },
          commissionActualValueAmount: {
            [config]: {
              dataType: DATA_TYPE_FLOAT,
              messages: defineMessages({
                fullName: {
                  id: 'field.ext.commission.commissionActualValueAmount.fullName',
                  defaultMessage: 'Actual value amount',
                },
                groupName: {
                  id: 'field.ext.commission.commissionActualValueAmount.groupName',
                  defaultMessage: 'Actual value amount',
                },
                name: {
                  id: 'field.ext.commission.commissionActualValueAmount.name',
                  defaultMessage: 'Amount',
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
  };
};
