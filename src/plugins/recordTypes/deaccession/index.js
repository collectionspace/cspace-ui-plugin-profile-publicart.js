import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    deaccession: {
      fields: fields(configContext),
    },
  },
});
