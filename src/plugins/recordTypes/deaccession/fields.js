export default (configContext) => {
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
