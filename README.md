# gatsby-plugin-datadog-rum

Gatsby plugin to add Datadog Real User Monitoring (RUM) to your site.

Learn more about Datadog [here](https://www.datadoghq.com/).

## Install

`npm install --save gatsby-plugin-datadog-rum`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-datadog-rum",
    options: {
      applicationId: [YOUR_APP_ID],
      clientToken: '[YOUR_CLIENT_TOKEN]',
      site: 'datadoghq.com',
      sampleRate: 100,
      enabled: !IS_DEV,
    }
  }
];
```

Options available are same as the [Datadog initialization parameters](https://docs.datadoghq.com/real_user_monitoring/browser/#configuration). Additionally, the parameter `enabled` (boolean) is available to easily turn the plugin integration on/off.

`datadogRum` is also available on the global window object, so you can use it for [Error collection](https://docs.datadoghq.com/real_user_monitoring/browser/collecting_browser_errors/?tab=npm#collect-errors-manually) or [Custom user actions](https://docs.datadoghq.com/real_user_monitoring/browser/tracking_user_actions/?tab=npm#custom-user-actions), etc.

