echo "Running Test Case Generation..."  
rm -rf allure-results
isodate=$(date '+%Y-%m-%d_%H-%M-%S')
npx playwright test generate.main.spec.ts
echo "Running Test Cases..."
npx playwright test main.runeachtest.spec.ts --headed --reporter=html
echo "Generating Report..."
npx playwright show-report