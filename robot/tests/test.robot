*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Library           SeleniumLibrary
Test Teardown     Close All Browsers
Suite Teardown     Close All Browsers

*** Variables ***
${HOST}                 localhost
${PORT}                 3000
${BROWSER}              Chrome
${DELAY}                0
${VALID USER}           demo
${VALID PASSWORD}       mode
${SERVER}               http://${HOST}:${PORT}
${LOGIN URL}            ${SERVER}/login
${WELCOME URL}          http://${SERVER}/welcome.html
${ERROR URL}            http://${SERVER}/error.html

*** Test Cases ***
Welcome Page
    Open Browser To Login Page
    Login Page Should Be Open
    Go To Login Page
    [Teardown]    Close All Browsers

*** Keywords ***
Open Browser To Login Page
    Open Browser    ${SERVER}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Login Page Should Be Open

Login Page Should Be Open
    Title Should Be    React App

Go To Login Page
    Go To    ${LOGIN URL}
    Login Page Should Be Open

Close Browser
    Close Browser