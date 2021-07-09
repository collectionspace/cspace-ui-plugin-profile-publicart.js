export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:works_common': {
        ...extensions.address.fields,
      },
    },
  };
};
