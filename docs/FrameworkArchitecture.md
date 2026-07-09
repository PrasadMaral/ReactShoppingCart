# Enterprise Framework Architecture

## Application Overview

# Enterprise Framework Architecture

## 1. Purpose
This document describes the current Playwright automation framework for the React Shopping Cart application and outlines how it can evolve into an enterprise-grade test architecture. The framework is built around Playwright, the Page Object Model, JSON-driven test data, and CI execution through GitHub Actions.

## 2. Current Framework Overview
The repository uses a lightweight but structured automation approach with the following key pieces:
- Playwright as the automation engine
- Page Object Model for UI interactions
- Test specs for business flow validation
- Externalized test data in JSON format
- Centralized configuration for browser and environment settings
- CI execution through GitHub Actions

## 3. Folder Structure and Responsibilities

### Root-level files
- [package.json](package.json): Defines the project dependencies, scripts, and package metadata.
- [playwright.config.js](playwright.config.js): Central configuration for test directory, browsers, base URL, reporters, retries, and parallelism.

### Pages layer
- [pages/Homepage.js](pages/Homepage.js): Encapsulates selectors and reusable actions for the product catalog, filters, cart drawer, and cart summary.
- Responsibility: Keep test code free from UI selectors and low-level interactions.
- Benefit: Improves readability and makes future UI changes easier to manage.

### Tests layer
- [tests/addtoCart.spec.js](tests/addtoCart.spec.js): Contains the executable end-to-end test scenario for adding products by price and validating cart behavior.
- [tests/seed.spec.ts](tests/seed.spec.ts): Provides a minimal seed setup for the Playwright planner and test workflow.
- Responsibility: Express business intent using page-object methods and assertions.
- Benefit: Tests become concise and focused on outcomes rather than UI mechanics.

### Test Data layer
- [test-data/productData.json](test-data/productData.json): Stores sample inputs such as target prices used by the tests.
- Responsibility: Separate test inputs from logic and assertions.
- Benefit: Supports data-driven scenarios and easier maintenance.

### Utilities layer
- [utils](utils): Presently empty, but intended for shared helpers such as custom assertions, wait utilities, date/time formatting, and browser setup helpers.
- Responsibility: Host reusable logic that is not tied to a single page object.
- Benefit: Reduces duplication and standardizes common actions.

### Specifications / documentation layer
- [specs/README.md](specs/README.md): Stores test planning and documentation context.
- Responsibility: Provide business context, test strategy documents, and planning references.
- Benefit: Makes the framework easier to understand for new team members.

### CI / automation layer
- [.github/workflows/playwright.yml](.github/workflows/playwright.yml): Executes the Playwright suite in GitHub Actions on push and pull request events.
- Responsibility: Provide automated regression execution in a repeatable environment.
- Benefit: Enables continuous validation and faster feedback loops.

## 4. Layer Responsibilities

### 1. Pages layer
The Pages layer is the foundation of the framework. It contains page-specific locators and methods for:
- Navigation to the app
- Product catalog inspection
- Size-filter interaction
- Add-to-cart actions
- Cart drawer interaction
- Cart summary validation

This layer follows the Page Object Model and creates a boundary between the UI and the test logic.

### 2. Tests layer
The Tests layer contains scenario-based automation that verifies business behavior. Example responsibilities:
- Arrange the test environment
- Call page-object methods
- Validate expected outcomes through assertions

This keeps tests readable and aligned with user journeys.

### 3. Test Data layer
The Test Data layer decouples data from test logic. This is important for maintaining test cases that need different product sets, price combinations, or environment-specific inputs.

### 4. Utilities layer
Utilities are meant for helper functions that are shared across test modules, such as:
- Wait wrappers
- Custom locator helpers
- Data parsing utilities
- Common assertion helpers
- Environment variable handling

### 5. Configuration layer
Configuration is centralized in [playwright.config.js](playwright.config.js) to avoid scattered setup. It governs:
- Base URL
- Headless mode
- Browser projects
- Reporter format
- Retry behavior on CI
- Parallelism strategy

### 6. GitHub Actions layer
The CI workflow installs dependencies, downloads browsers, runs tests, and publishes the Playwright HTML report as an artifact. This allows the framework to run consistently in a cloud environment.

## 5. Design Decisions

### Page Object Model
The current framework uses a simple page object for the home/catalog experience. This is a strong foundation because it avoids brittle direct selectors inside tests and improves reusability.

### Externalized Test Data
Using [test-data/productData.json](test-data/productData.json) keeps the test inputs separate from logic and supports future data-driven expansion.

### Centralized Configuration
The Playwright config consolidates runtime settings so the framework remains easier to maintain.

### CI-First Execution
The GitHub Actions workflow ensures that automation can run automatically on every relevant change, not only on local machines.

### Browser Coverage
The initial setup targets Chromium, which is suitable for a starter framework. It can be extended to Firefox and WebKit as the suite grows.

## 6. Reusability and Maintainability
The framework is reusable in several ways:
- Page objects can be reused across multiple tests
- Common interaction methods can be extended to support additional pages
- Test data can be reused for multiple scenarios
- CI configuration can run the same suite in different environments

As the project grows, maintainability will improve further by introducing:
- Shared fixtures for browser setup
- Custom commands and helper utilities
- A common assertion library
- Environment-specific configs for QA, staging, and production

## 7. Scalability Considerations
The current implementation is a solid baseline, but to support enterprise-scale automation it should evolve in the following ways:
- Introduce more page objects for each major screen, such as Cart, Checkout, and Product Detail pages
- Split tests by domain, such as catalog, cart, and checkout
- Add fixtures and hooks for login, environment setup, and teardown
- Introduce a utilities and support layer for API and data handling
- Create dedicated test data files by feature or scenario
- Add cross-browser and multi-environment execution strategies

## 8. Execution Flow
The automation execution flow is as follows:
1. Playwright loads the configuration from [playwright.config.js](playwright.config.js).
2. The selected test file is executed.
3. The test initializes a page object from [pages/Homepage.js](pages/Homepage.js).
4. The page object navigates to the application URL.
5. The test interacts with the UI through page-object methods.
6. Assertions validate the behavior and outcomes.
7. The test result is reported through the configured reporter and, in CI, uploaded as an artifact.

## 9. Strengths of the Current Framework
- Clear separation of concerns between tests and UI logic
- Minimal and understandable structure for a starter automation suite
- Good fit for a single-page shopping cart experience
- Easy to expand with additional pages and scenarios
- Integration with CI through GitHub Actions

## 10. Improvement Opportunities for Enterprise Readiness
To mature this framework into a robust enterprise automation suite, the following enhancements are recommended:
- Add a dedicated utilities package for common operations
- Introduce fixtures for browser context and test setup
- Separate test suites by feature and priority
- Add stronger reporting and screenshots on failure
- Implement environment-based configuration for dev, QA, and production
- Expand browser and device matrix coverage
- Add API-based validation alongside UI flows

## 11. Summary
The current framework already demonstrates a good foundation for Playwright automation by combining page objects, test data separation, centralized configuration, and CI execution. With a few architectural enhancements, it can scale into a reliable enterprise-grade test automation platform for regression and end-to-end validation.


## Test Scenarios

### 1. Framework Structure

**Seed:** `tests/seed.spec.ts`

#### 1.1. Architecture documentation generated for the repository structure

**File:** `docs/FrameworkArchitecture.md`

**Steps:**
  1. Review the project layout and current Playwright implementation
    - expect: The document captures the folder structure, layer responsibilities, design decisions, scalability, and execution flow.
