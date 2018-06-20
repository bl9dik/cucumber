package testdefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.Hook;

public class AppiumScenario {

	private WebDriver driver;
	
		public AppiumScenario() {
			this.driver = Hook.getDriver();}
	
	@Given("^I click Login button$")
	public void I_click_Login_button() throws Throwable {
		driver.findElement(By.id("edu.ucsf.eureka:id/log_in_btn")).click();
		Assert.assertTrue(driver.findElement(By.id("edu.ucsf.eureka:id/Login_to_your_account_txt")).isDisplayed());
		
	
	}

	@When("^I type name and password$")
	public void I_type_name_and_password() throws Throwable {
		driver.findElement(By.id("edu.ucsf.eureka:id/Email_or_mobile_etxt")).sendKeys("asdfg");
		driver.findElement(By.id("edu.ucsf.eureka:id/login_password_etxt")).sendKeys("123456");
		
	}

	@Then("^I click Login$")
	public void I_click_Login() throws Throwable {
		driver.findElement(By.id("edu.ucsf.eureka:id/log_in_btn")).click();
		Assert.assertTrue(driver.findElement(By.id("edu.ucsf.eureka:id/Login_to_your_account_txt")).isDisplayed());
	  
	}
}