import { defineMessages } from 'react-intl';

export default {
  ulan: {
    disabled: true,
  },
  shared: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.shared.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared',
      },
      collectionName: {
        id: 'vocab.organization.shared.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Organizations',
      },
      itemName: {
        id: 'vocab.organization.shared.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Shared Organization',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(organization_shared)',
    },
    disableAltTerms: true,
  },
};
