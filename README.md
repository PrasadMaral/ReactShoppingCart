# React Shopping Cart Playwright Enterprise Automation Framework

## Application Overview

# React Shopping Cart Playwright Enterprise Automation Framework

A professional Playwright-based automation framework for validating the React Shopping Cart application end to end. This repository demonstrates a structured enterprise-style test automation approach using the Page Object Model, externalized test data, Playwright configuration, and GitHub Actions CI/CD integration.

## Project Overview
This repository contains an automation framework designed to test the React Shopping Cart application through browser-based end-to-end scenarios. The framework focuses on product discovery, filtering, cart interaction, pricing validation, and regression testing.

The current implementation is intentionally modular and easy to extend for additional features such as checkout, persistence, responsive testing, and multi-environment execution.

## Features
- End-to-end UI validation of the shopping cart experience
- Product catalog browsing and inventory verification
- Size filter interaction and catalog updates
- Add-to-cart behavior validation
- Cart drawer inspection and summary verification
- Pricing and subtotal calculations checks
- Playwright-based browser automation for Chromium
- HTML reporting for test execution results
- GitHub Actions-based continuous integration
- Structured documentation for test planning and framework architecture

## Tech Stack
- JavaScript / ES Modules
- Playwright Test
- Node.js
- GitHub Actions
- HTML Reporter
- JSON-based test data

## Project Structure
```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── docs/
│   ├── ExecutionWorkflow.md
│   ├── FailureAnalysisReport.md
│   ├── FrameworkArchitecture.md
│   ├── MCP-AI-Usage.md
│   ├── qa-test-plan.md
│   ├── TestPlan.md
│   └── TestScenarios.md
├── pages/
│   └── Homepage.js
├── specs/
│   └── README.md
├── test-data/
│   └── productData.json
├── tests/
│   ├── addtoCart.spec.js
│   └── seed.spec.ts
├── utils/
├── package.json
├── playwright.config.js
└── README.md
```

## Framework Architecture Summary
The framework follows a simple but scalable architecture built around the following layers:

- Pages layer: encapsulates UI selectors and reusable interactions in page objects
- Tests layer: contains business-focused Playwright scenarios
- Test Data layer: stores data inputs separately from test logic
- Configuration layer: centralizes environment and browser settings in Playwright config
- CI layer: executes automation through GitHub Actions

This separation improves maintainability, reduces duplication, and makes future enhancements easier to implement.

## Prerequisites
Before running the framework, ensure you have:
- Node.js installed on your machine
- npm available
- A working internet connection to reach the demo application
- Playwright browser dependencies installed

## Installation
Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd ReactShoppingCart
npm install
```

Install Playwright browsers if you have not already done so:

```bash
npx playwright install
```

## Running Tests
Run the Playwright suite in headless mode:

```bash
npx playwright test
```

## Running Tests in Headed and Headless Mode
### Headless mode
```bash
npx playwright test
```

### Headed mode
```bash
npx playwright test --headed
```

## Multi-environment Execution
The framework is designed to support environment-based execution through the Playwright configuration and environment variables.

Example:

```bash
BASE_URL=https://your-qa-environment.example.com/products npx playwright test
```

You can extend this approach for development, QA, staging, and production environments.

## GitHub Actions CI/CD
The repository includes a GitHub Actions workflow that automatically runs the Playwright suite on push and pull request events.

Workflow details:
- checks out the repository
- installs Node.js and dependencies
- installs Playwright browsers
- runs the Playwright tests
- uploads the Playwright HTML report as an artifact

The workflow definition is available in:
- .github/workflows/playwright.yml

## Playwright HTML Report
Playwright generates an HTML report after test execution.

To view the report locally after a run:

```bash
npx playwright show-report
```

The report is also published as a workflow artifact in GitHub Actions.

## Folder Structure
```text
pages/                # Page object classes
tests/                # Playwright test specifications
utils/                # Shared helper utilities
specs/                # Test planning and documentation
test-data/            # Externalized test data
.github/workflows/    # CI/CD workflows
docs/                 # Project documentation
```

## MCP & AI Agents Usage
Playwright MCP and AI agents were used to support the project in several ways:
- analyzing the React Shopping Cart UI and behavior
- generating test plans and structured QA scenarios
- helping design automation coverage for core user journeys
- supporting failure analysis and troubleshooting
- improving maintainability through modular documentation and architecture guidance

This approach accelerated test planning and helped document the automation framework in a professional, reusable way.

## Future Enhancements
Planned improvements for the framework include:
- adding more page objects for additional application screens
- expanding test coverage for cart and checkout flows
- introducing fixtures and reusable helpers
- adding support for multiple browsers and mobile emulation
- integrating API validation alongside UI testing
- improving reporting with screenshots and trace linking on failure

## Author
Prasad Maral


## Test Scenarios
