echo "Running Test Case Generation..."
rm -rf allure-results
isodate=$(date '+%Y-%m-%d-%H-%M-%S')
npx playwright test generate.main.spec.ts
echo "Running Test Cases..."
npx playwright test main.runeachtest.spec.ts --headed --reporter=line,allure-playwright