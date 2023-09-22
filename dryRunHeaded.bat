@echo off
@RD /S /Q "./allure-results"
copy .env.%1 .env
SET isodate=%date:~10,4%-%date:~7,2%-%date:~4,2%-%time:~0,2%-%time:~3,2%-%time:~6,2%
echo %isodate%
npx playwright test generate.main.spec.ts && npx playwright test main.runEachTest.spec.ts --headed