# SCRUM-30044 Request Form Custom Fields Automation

## Overview
This repository contains Playwright automation scripts for testing request form custom fields functionality (SCRUM-30044).

## Test Coverage
- **TS-001**: Request Form Custom Fields Display (5 test cases)
- **TS-002**: Admin Form Configuration (7 test cases)

## Project Structure
```
src/
├── data/
│   └── request-form-test-data.js
├── pages/
│   ├── locators/
│   │   ├── login.locators.js
│   │   ├── request-form.locators.js
│   │   └── admin-form-config.locators.js
│   ├── login.page.js
│   ├── request-form.page.js
│   └── admin-form-config.page.js
├── tests/
│   └── application/
│       ├── SCRUM-30044-TS-001-TC-001.spec.js
│       ├── SCRUM-30044-TS-001-TC-002.spec.js
│       ├── SCRUM-30044-TS-001-TC-003.spec.js
│       ├── SCRUM-30044-TS-001-TC-004.spec.js
│       ├── SCRUM-30044-TS-001-TC-005.spec.js
│       ├── SCRUM-30044-TS-002-TC-001.spec.js
│       ├── SCRUM-30044-TS-002-TC-002.spec.js
│       ├── SCRUM-30044-TS-002-TC-003.spec.js
│       ├── SCRUM-30044-TS-002-TC-004.spec.js
│       ├── SCRUM-30044-TS-002-TC-005.spec.js
│       ├── SCRUM-30044-TS-002-TC-006.spec.js
│       └── SCRUM-30044-TS-002-TC-007.spec.js
└── fixtures/
    └── index.js
```

## Installation
```bash
npm install
npx playwright install
```

## Running Tests
```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Debug tests
npm run test:debug

# View test report
npm run report
```

## Test Cases

### TS-001: Request Form Custom Fields Display
1. TC-001: Verify all admin-configured custom fields are displayed
2. TC-002: Verify different field types (text, dropdown, checkbox, date picker)
3. TC-003: Verify mandatory and optional field indicators
4. TC-004: Verify field labels and help text/tooltips
5. TC-005: Verify behavior when no custom fields are configured

### TS-002: Admin Form Configuration
1. TC-001: Verify admin can access form configuration interface
2. TC-002: Verify admin can add a new custom field
3. TC-003: Verify admin can edit an existing custom field
4. TC-004: Verify admin can delete a custom field
5. TC-005: Verify newly added field is visible to all users
6. TC-006: Verify non-admin users cannot access form configuration
7. TC-007: Verify role-based visibility of fields

## Framework Features
- Page Object Model (POM) design pattern
- Centralized test data management
- Reusable locator strategies
- Comprehensive error handling
- Screenshot and video capture on failure
- HTML test reporting

## Author
Automation Engineer