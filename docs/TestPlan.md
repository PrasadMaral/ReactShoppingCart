# Enterprise QA Test Plan

## Application Overview

# Enterprise QA Test Plan

## 1. Overview
This plan covers functional and regression testing for the React Shopping Cart application available at the product catalog UI. The application exposes a product listing page, size filters, add-to-cart behavior, and a cart drawer that summarizes quantity and totals. The plan is designed for enterprise-quality validation using Playwright-based automation and targeted exploratory checks.

## 2. Scope
### In scope
- Product catalog rendering and count display
- Size filter selection and product list updates
- Product card interactions and Add to cart actions
- Cart drawer opening and closing
- Cart item quantity and subtotal calculations
- Cart summary totals and item visibility
- Basic browser compatibility and responsive behavior
- Automated regression coverage for the core shopping flow

### Out of scope
- Payment processing and checkout
- User authentication and account management
- Order history, persistence, and backend administration
- Inventory management and supplier integration
- Advanced promotions, coupons, or loyalty workflows

## 3. Objectives
- Validate that users can browse products and add them to the cart successfully
- Confirm cart quantity and pricing calculations are correct
- Ensure filters and catalog behavior remain stable across supported browsers
- Detect regressions in the core shopping journey through automation
- Provide a structured quality gate for release readiness

## 4. Assumptions
- The application is deployed and reachable in QA and production-like environments
- Product data is available and deterministic for test execution
- No authentication is required to access core functionality
- Cart behavior is session-based unless explicitly stated otherwise
- Playwright is available and test automation can run in CI and local environments

## 5. Risks
- Price and quantity calculations may be incorrect in the cart summary
- Filter interactions may not update the list as expected across breakpoints
- UI changes may break element selectors used by automation
- Browser-specific rendering issues may impact usability
- Performance degradation may occur when rendering a large catalog

## 6. Entry Criteria
- Application build is deployed to the target environment
- Core URLs are reachable
- Test data and environment variables are configured
- Browsers required for testing are installed
- Smoke test baseline is available

## 7. Exit Criteria
- All critical and high-priority test cases pass
- No open critical defects remain
- Automated regression suite passes in the target environment
- Test evidence and results are reviewed and signed off
- Any known issues are documented with severity and workaround

## 8. Test Strategy
### Approach
- Use a mix of smoke, functional, regression, exploratory, and compatibility testing
- Automate the primary end-to-end flows with Playwright
- Perform manual exploratory checks for usability and visual issues
- Validate both positive and negative scenarios

### Types of testing
- Smoke testing: confirm the catalog, filters, and cart can be used immediately
- Functional testing: verify product list, filter behavior, and cart calculations
- Regression testing: ensure new changes do not break existing flows
- Exploratory testing: identify issues not covered by scripted tests
- Compatibility testing: validate behavior on supported browsers and viewport sizes

## 9. Environments
- Local development: for rapid automation and debugging
- QA/Staging: for pre-release validation
- Production-like/Pre-production: for final release confidence
- Supported browsers: Chromium, Firefox, and WebKit where available

## 10. Test Data
- Catalog products with visible names and prices
- Size filter values: XS, S, M, ML, L, XL, XXL
- Price values used by the current automation suite: 10.90 and 14.90
- Empty-cart and non-empty-cart states
- Different viewport sizes for responsive validation

## 11. High-Level Feature Coverage
### Catalog and product discovery
- Product cards render correctly
- Product count is displayed accurately
- Product names and prices are visible

### Filtering
- Selecting one or more size filters updates the displayed products
- Unselecting filters restores the expected catalog view

### Cart operations
- Add to cart from product cards
- Open and close cart drawer
- Validate cart item list and quantity increments
- Validate subtotal and grand total calculations

### UI and usability
- Buttons and controls are visible and clickable
- Empty and populated cart states behave predictably
- Layout remains usable on common screen sizes

## 12. Test Cases at a Glance
- Verify product catalog loads successfully
- Verify product count is displayed correctly
- Verify size filters apply and remove correctly
- Verify product can be added to the cart
- Verify cart drawer displays the correct selected items
- Verify cart summaries show accurate quantity and totals
- Verify the app remains stable after repeated add-to-cart actions
- Verify the UI behaves correctly in different browsers and screen sizes


## Test Scenarios

### 1. Core Shopping Flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Catalog loads and product inventory is visible

**File:** `tests/catalog-smoke.spec.js`

**Steps:**
  1. Open the product catalog page
    - expect: The product count and product cards are visible

#### 1.2. Size filters update the catalog correctly

**File:** `tests/filtering.spec.js`

**Steps:**
  1. Select one or more size filters
    - expect: The visible product list updates accordingly
    - expect: The product count changes to match the filtered results

#### 1.3. Products can be added to the cart

**File:** `tests/cart-add.spec.js`

**Steps:**
  1. Add one or more products to the cart
    - expect: The cart count updates
    - expect: The selected products appear in the cart drawer

#### 1.4. Cart totals and subtotals are calculated correctly

**File:** `tests/cart-summary.spec.js`

**Steps:**
  1. Review the cart drawer after adding products
    - expect: Each item shows the correct quantity
    - expect: The subtotal and grand total match the expected values
