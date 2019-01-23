// javascript

const wdio = require("webdriverio");

const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "5.0",
    deviceName: "Nexus_5X_API_21",
    app:"C:/Users/berkin.tatlisu/Desktop/shop/client/android/app/build/outputs/apk/debug/app-debug.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);

async()=> {const evey = await client.findElement("accessibility id","testi");  console.log(evey)}

/*client.elementSendKeys(elementId.ELEMENT, "Hello World!");
const elementValue = await client.findElement("accessibility id","TextField1");
await client.getElementAttribute(elementValue.ELEMENT,"value").then((attr) => {
assert.equal(attr,"Hello World!");
});
*/