exports.onClientEntry = function(_, pluginParams) {
  if (pluginParams.enabled !== false) {
    require.ensure(['@datadog/browser-rum'], function(require) {
      const Datadog = require('@datadog/browser-rum');
      Datadog.datadogRum.init(pluginParams);
      window.datadogRum = Datadog.datadogRum;
    });
  }
};