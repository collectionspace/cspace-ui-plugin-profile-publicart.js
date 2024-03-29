/* global cspaceUIPluginProfilePublicArt */
/* The cspaceUIPluginProfilePublicArt global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/publicart.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '5000',
  pluginInfo: {
    cspaceUIPluginProfilePublicArt: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfilePublicArt.name',
          defaultMessage: 'Public Art profile',
        },
      }),
      packageName: cspaceUIPluginProfilePublicArt.packageName,
      packageVersion: cspaceUIPluginProfilePublicArt.packageVersion,
      buildNum: cspaceUIPluginProfilePublicArt.buildNum,
      repositoryUrl: cspaceUIPluginProfilePublicArt.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfilePublicArt.packageVersion,
    },
  },
  plugins: plugins.map((plugin) => plugin()),
});
