import { AndroidUiautomator2Driver } from `appium-uiautomator2-driver`

let defaultCaps = {
  app: 'path/to/your.apk',
  deviceName: 'Android',
  platformName: 'Android',
  automationName: 'uiautomator2'
};

let driver = new AndroidUiautomator2Driver();
await driver.createSession(defaultCaps);