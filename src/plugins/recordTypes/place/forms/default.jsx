const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
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
        <Field name="placeTermGroupList">
          <Field name="placeTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="historicalStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="nameDetail">
                <Field name="nameAbbrev" />
                <Field name="nameNote" />
                <Field name="nameDateGroup" />
              </InputTable>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="placementType" subpath="ns2:places_publicart" />
          <Field name="placementEnvironment" subpath="ns2:places_publicart" />
        </Row>

        <Field name="publicartPlaceOwnerGroupList" subpath="ns2:places_publicart">
          <Field name="publicartPlaceOwnerGroup">
            <Field name="owner" />
            <Field name="ownerType" />
            <Field name="ownershipDateGroup" />
            <Field name="ownershipNote" />
          </Field>
        </Field>

        <Field name="placeNote" />

        {extensions.address.form}
      </Panel>

      <Panel name="geoRefInfo" collapsible collapsed>
        <Field name="placeGeoRefGroupList">
          <Field name="placeGeoRefGroup">
            <Field name="decimalLatitude" />
            <Field name="decimalLongitude" />
            <Field name="geoRefDateGroup" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
