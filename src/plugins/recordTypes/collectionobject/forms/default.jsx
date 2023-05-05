const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />
            <Field name="numberOfObjects" />

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>

            <Field name="publicartCollections" subpath="ns2:collectionobjects_publicart">
              <Field name="publicartCollection" />
            </Field>

            <Field name="recordStatus" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="contentConcepts">
              <Field name="contentConcept" />
            </Field>

            <Field name="distinguishingFeatures" />

            <Field name="comments">
              <Field name="comment" />
            </Field>

            <Field name="computedCurrentLocation" />
          </Col>
        </Row>

        <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
          <Field name="annotationGroup">
            <Field name="annotationType" />
            <Field name="annotationNote" />
            <Field name="annotationDate" />
            <Field name="annotationAuthor" />
          </Field>
        </Field>

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Panel>
              <Row>
                <Col>
                  <Field name="title" />
                  <Field name="titleLanguage" />
                </Col>

                <Col>
                  <Field name="titleType" />

                  <Field name="titleTranslationSubGroupList">
                    <Field name="titleTranslationSubGroup">
                      <Field name="titleTranslation" />
                      <Field name="titleTranslationLanguage" />
                    </Field>
                  </Field>
                </Col>
              </Row>
            </Panel>
          </Field>
        </Field>

        <Field name="objectNameList">
          <Field name="objectNameGroup">
            <Field name="objectName" />
            <Field name="objectNameNote" />
          </Field>
        </Field>

        <Row>
          <Field name="owners">
            <Field name="owner" />
          </Field>

          <Col />
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Field name="materialGroupList">
          <Field name="materialGroup">
            <Field name="material" />
            <Field name="materialComponentNote" />
          </Field>
        </Field>

        {extensions.dimension.form}

        <Panel name="textInscript" collapsible collapsed>
          <Field name="textualInscriptionGroupList">
            <Field name="textualInscriptionGroup">
              <Panel>
                <Field name="inscriptionContent" />

                <Row>
                  <Col>
                    <Field name="inscriptionContentInscriber" />
                    <Field name="inscriptionContentPosition" />
                  </Col>

                  <Col>
                    <Field name="inscriptionContentType" />
                  </Col>
                </Row>
              </Panel>
            </Field>
          </Field>
        </Panel>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Field name="publicartProductionDateGroupList" subpath="ns2:collectionobjects_publicart">
          <Field name="publicartProductionDateGroup">
            <Field name="publicartProductionDate" />
            <Field name="publicartProductionDateType" />
          </Field>
        </Field>

        <Field name="publicartProductionPersonGroupList" subpath="ns2:collectionobjects_publicart">
          <Field name="publicartProductionPersonGroup">
            <Field name="publicartProductionPerson" />
            <Field name="publicartProductionPersonRole" />
            <Field name="publicartProductionPersonType" />
          </Field>
        </Field>

        <Field name="objectProductionNote" />
      </Panel>

      <Panel name="rights" collapsible collapsed>
        <Field name="rightsGroupList">
          <Field name="rightsGroup">
            <Panel>
              <Row>
                <Field name="rightType" />

                <Row>
                  <Field name="rightBeginDate" />
                  <Field name="rightEndDate" />
                </Row>
              </Row>

              <Field name="rightHolderGroupList">
                <Field name="rightHolderGroup">
                  <Field name="rightHolder" />
                  <Field name="rightHolderContact" />
                </Field>
              </Field>

              <Row>
                <Field name="rightJurisdiction" />
                <Field name="standardizedRightStatement" />
              </Row>

              <Field name="rightStatement" />
              <Field name="rightNote" />
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="rightsin" collapsible collapsed>
        <Field name="rightsInGroupList">
          <Field name="rightsInGroup">
            <Panel>
              <Row>
                <Field name="rightInTypes">
                  <Field name="rightInType" />
                </Field>

                <Row>
                  <Field name="rightInBeginDate" />
                  <Field name="rightInEndDate" />
                </Row>
              </Row>

              <Row>
                <Field name="agreementSent" />
                <Field name="agreementReceived" />
                <Field name="agreementSigned" />
              </Row>

              <Cols>
                <Col>
                  <Field name="rightInRestrictions">
                    <Field name="rightInRestriction" />
                  </Field>
                </Col>

                <Col>
                  <Field name="rightReproductionStatement" />
                </Col>
              </Cols>

              <Field name="rightInNote" />
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
