import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    exit: {
      fields: fields(configContext),
    },
  },
});
