Playwright Automation Framework

📌 Project Overview

This project is an end-to-end test automation framework using Playwright with TypeScript to test a Todo Management Application. It follows the Page Object Model (POM) structure and includes reporting, screenshots for every step, and CI/CD integration.


📂 todo-automation/
├── 📂 tests/                 # Test cases
│   ├── addTodo.test.ts       # Test for adding a new todo
│   ├── editTodo.test.ts      # Test for editing a todo
│   ├── deleteTodo.test.ts    # Test for deleting a todo
│
├── 📂 pages/                 # Page Object Model (POM)
│   ├── TodoPage.ts           # Page methods for interacting with the Todo app
│
├── 📂 playwright-report/      # Reports and screenshots (auto-generated)
│
├── playwright.config.ts       # Playwright configuration
├── package.json               # Dependencies & scripts
├── README.md                  # Project documentation

1️⃣ Install Dependencies

Ensure Node.js (v16+) is installed, then run:

npm install

2️⃣ Run Tests

To execute all tests, use:

npx install Playwright

npx playwright test

To run tests in headed mode (with UI):

npx playwright test --headed

3️⃣ View Reports

After running tests, view the HTML report:
