from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
# from webdriver_manager.core.utils import ChromeType # Uncomment if using Chromium

def test1():
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install())) # Use Chrome
    # driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install())) # Use Chromium

    driver.get("https://www.google.com")
    print(driver.title)
    driver.quit()

if __name__ == "__main__":
    test1()