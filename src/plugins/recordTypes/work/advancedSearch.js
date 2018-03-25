export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termDisplayName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termName',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workTermGroupList/workTermGroup/termLanguage',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/workType',
      },
      {
        op: OP_RANGE,
        path: 'ns2:works_common/workDateGroupList/workDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:works_common/creatorGroupList/creatorGroup/creator',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
