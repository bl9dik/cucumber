Feature: Test Eureka smoke scenario 
@appium
 Scenario: Login with invalid credentials
 Given I click Login button
 When I type name and password
 Then I click Login
 