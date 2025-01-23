# Change Log

## v7.0.0

v7.0.0 adds support for CollectionSpace 8.1, and requires cspace-ui version 10.

- Aded the annotation group fields (`annotationGroupList/annotationGroup`) to the record editor for Object records.

### Breaking Changes

- On the record editor form for Object records:
  - The field Object Count Unit (`objectCountUnit`) has been added to the field group Object Count Group. If this version of the anthropology profile is used with an older CollectionSpace server, values entered in these fields will not be saved.

## v6.0.0

v6.0.0 adds support for CollectionSpace 8.0, and requires cspace-ui version 9.

### Breaking Changes

- On the record editor form for Object records:
  - The number of objects field (`numberOfObjects`) has been replaced with the repeating object count group (`objectCountGroupList/objectCountGroup`). If this version of the public art profile is used with an older CollectionSpace server, values entered in the repeating group will not be saved.

## v5.0.0

### Breaking Changes

There are no breaking changes from version 4.

## v4.0.0

### Breaking Changes

- v4.0.0 requires cspace-ui version 7, and a CollectionSpace 7.1 server. On the record editor form for Object records, copyright fields have been added. These fields are defined in cspace-ui 7.0.0/CollectionSpace 7.1, but not in prior versions. To use this version of cspace-ui-plugin-profile-publicart with an older version of CollectionSpace, these fields should be hidden; otherwise, any values entered will not be saved.

## v3.0.0

### Breaking Changes

- v3.0.0 requires cspace-ui version 6, and a CollectionSpace 7 server.

- Object record:
  - The annotation field group (`annotationGroupList`) has been added to the record editor form. These fields are defined in cspace-ui version 6.0.0, but not in prior versions. To use this version of cspace-ui-plugin-profile-publicart with an older version of cspace-ui, this field group should be hidden; otherwise, any values entered will not be saved.

- Group record:
  - The Checklist field group (`checklistGroupList`) has been added to the record editor form. These fields are defined in CollectionSpace 7, but not in prior versions. To use this version of cspace-ui-plugin-profile-publicart with an older CollectionSpace server, this field group should be hidden; otherwise, any values entered will not be saved.

## v2.0.0

v2.0.0 adds support for CollectionSpace 6.0.

### Breaking Changes

- v2.0.0 requires cspace-ui version 4. If you've customized this profile, see the cspace-ui 4.0.0 change log for configuration changes that may be needed.

- Place record:
  - A new field, `addrGroupList/addrGroup/addressCounty`, has been added to the record editor form. This field exists in CollectionSpace 6.0, but not in older versions of CollectionSpace. To use this version of the public art profile with an older CollectionSpace server, this new field should be hidden; otherwise, if a value is entered, the record will fail to save.
