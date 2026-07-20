const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />

            <Field name="alternativeIdentifierGroupList">
              <Field name="alternativeIdentifierGroup">
                <Field name="alternativeIdentifier" />
                <Field name="alternativeIdentifierNote" />
              </Field>
            </Field>

            <Field name="accessionDate" subpath="ns2:acquisitions_publicart" />

            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>

            <Field name="acquisitionDates" subpath="ns2:acquisitions_publicart">
              <Field name="acquisitionDate" />
            </Field>

            <Field name="acquisitionMethod" />
          </Col>

          <Col>
            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>

            <Field name="owners">
              <Field name="owner" />
            </Field>

            <Field name="acquisitionDescription" />

            <Field name="acquisitionReason" />
          </Col>
        </Cols>

        <Field name="approvalGroupList">
          <Field name="approvalGroup">
            <Field name="approvalGroup" />
            <Field name="approvalIndividual" />
            <Field name="approvalStatus" />
            <Field name="approvalDate" />
            <Field name="approvalNote" />
          </Field>
        </Field>
        <Field name="acquisitionNote" />

        <Row>
          <Field name="acquisitionFundingList">
            <Field name="acquisitionFunding">
              <Field name="acquisitionFundingCurrency" />
              <Field name="acquisitionFundingValue" />
              <Field name="acquisitionFundingSource" />
              <Field name="acquisitionFundingSourceProvisos" />
            </Field>
          </Field>
        </Row>

        <Field name="creditLine" />
      </Panel>

      {extensions.commission.form}
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
