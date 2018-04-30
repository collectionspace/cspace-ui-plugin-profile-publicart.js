export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
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
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termDisplayName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termName',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_common/placeTermGroupList/placeTermGroup/termLanguage',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_publicart/placementType',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_publicart/placementEnvironment',
      },
      {
        op: OP_EQ,
        path: 'ns2:places_publicart/publicartPlaceOwnerGroupList/publicartPlaceOwnerGroup/owner',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:places_common/placeNote',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
