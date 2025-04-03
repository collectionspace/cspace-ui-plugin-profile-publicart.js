export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:deaccessions_common': {
        deaccessionApprovalGroupList: {
          deaccessionApprovalGroup: {
            deaccessionApprovalIndividual: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared',
                  },
                },
              },
            },
          },
        },
        exitRecipients: {
          exitRecipient: {
            [config]: {
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
      },
    },
  };
};
