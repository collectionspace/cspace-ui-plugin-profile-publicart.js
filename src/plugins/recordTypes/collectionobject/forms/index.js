import defaultForm from './default';
import tombstoneForm from './tombstone';

export default (configContext) => ({
  default: defaultForm(configContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
  public: {
    disabled: true,
  },
  timebased: {
    disabled: true,
  },
  tombstone: tombstoneForm(configContext),
});
