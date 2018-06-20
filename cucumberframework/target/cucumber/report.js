$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Appium.feature");
formatter.feature({
  "line": 1,
  "name": "Test Eureka smoke scenario",
  "description": "",
  "id": "test-eureka-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "blablabla",
  "description": "",
  "id": "test-eureka-smoke-scenario;blablabla",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@appium"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click LoGin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I type name and password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "AppiumScenario.i_open_the_application()"
});
formatter.result({
  "duration": 168545460,
  "error_message": "java.lang.NullPointerException\r\n\tat testdefinition.AppiumScenario.i_open_the_application(AppiumScenario.java:21)\r\n\tat ✽.Given I open the application(Appium.feature:4)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});