# gatsby-plugin-datadog-rum

Gatsby plugin to add Datadog Real User Monitoring (RUM) to your Gatsby site.

Learn more about Datadog [here](https://www.datadoghq.com/).

## Install

`npm install --save gatsby-plugin-datadog-rum`

## How to setup

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: "gatsby-plugin-datadog-rum",
    options: {
      applicationId: 'YOUR_APP_ID',
      clientToken: 'YOUR_CLIENT_TOKEN',
      site: 'datadoghq.com',
      sessionSampleRate: 100,
      enabled: !IS_DEV,
    }
  }
];
```

Options available are same as the [Datadog initialization parameters](https://docs.datadoghq.com/real_user_monitoring/browser/#configuration). Additionally, the parameter `enabled` (boolean) is available to easily turn the plugin integration on/off.

## How to use

RUM data will automatically be collected.

`datadogRum` is available on the global window object, so you can use it for [manual error collection](https://docs.datadoghq.com/real_user_monitoring/browser/collecting_browser_errors/?tab=npm#collect-errors-manually) and [custom user actions](https://docs.datadoghq.com/real_user_monitoring/browser/tracking_user_actions/?tab=npm#custom-user-actions), etc.

