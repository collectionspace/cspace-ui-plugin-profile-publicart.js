export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:exits_common': {
        owners: {
          owner: {
            [config]: {
              view: {
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
        exitAgentGroupList: {
          exitAgentGroup: {
            agent: {
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
        approvalStatusGroupList: {
          approvalStatusGroup: {
            individual: {
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
      },
    },
  };
};
