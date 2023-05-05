import { defineMessages } from 'react-intl';

export default {
  activity: {
    disabled: true,
  },
  worktype: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.worktype.name',
        description: 'The name of the worktype vocabulary.',
        defaultMessage: 'Work Type',
      },
      collectionName: {
        id: 'vocab.concept.worktype.collectionName',
        description: 'The name of a collection of records from the worktype vocabulary.',
        defaultMessage: 'Work Types',
      },
      itemName: {
        id: 'vocab.concept.worktype.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Work Type',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(worktype)',
    },
  },
};
