export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Panel,
    Row,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

  return (
    <Panel name="checklist" collapsible collapsed>
      <Field name="checklistGroupList" subpath="ns2:groups_checklist">
        <Field name="checklistGroup">
          <Panel>
            <Row>
              <Field name="checklistType" />
              <Field name="checklistOpenDate" />
              <Field name="checklistCloseDate" />
            </Row>

            <Field name="checklistNote" />

            <Field name="checklistItemGroupList">
              <Field name="checklistItemGroup">
                <Field name="checklistItem" />
                <Field name="checklistAssignee" />
                <Field name="checklistStatus" />
                <Field name="checklistStatusDate" />
              </Field>
            </Field>
          </Panel>
        </Field>
      </Field>
    </Panel>
  );
};
