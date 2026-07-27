import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />

            <Field name="publicartCollections" subpath="ns2:collectionobjects_publicart">
              <Field name="publicartCollection" />
            </Field>

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="contentConcepts">
              <Field name="contentConcept" />
            </Field>

            <Field name="computedCurrentLocation" />
          </Col>
        </Row>

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Field name="title" embedded label="" />
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="objectNameList">
              <Field name="objectNameGroup" tabular={false}>
                <Field name="objectName" embedded label="" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="owners">
              <Field name="owner" />
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Field name="materialGroupList">
            <Field name="materialGroup" tabular={false}>
              <Field name="material" embedded label="" />
            </Field>
          </Field>

          <Col />
        </Row>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Field
          name="publicartProductionDateGroupList"
          subpath="ns2:collectionobjects_publicart"
        >
          <Field name="publicartProductionDateGroup">
            <Field name="publicartProductionDate" />
            <Field name="publicartProductionDateType" />
          </Field>
        </Field>

        <Field
          name="publicartProductionPersonGroupList"
          subpath="ns2:collectionobjects_publicart"
        >
          <Field name="publicartProductionPersonGroup">
            <Field name="publicartProductionPerson" />
            <Field name="publicartProductionPersonRole" />
            <Field name="publicartProductionPersonType" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.tombstone.name',
      defaultMessage: 'Tombstone Template',
    },
  }),
  template: template(configContext),
});
