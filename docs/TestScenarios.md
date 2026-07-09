# QA Test Scenarios

## Application Overview

QA Test Scenarios for the React Shopping Cart application. This document covers functional, negative, boundary, edge case, exploratory, and end-to-end scenarios for catalog browsing, size filtering, add-to-cart behavior, cart summary calculations, and responsive usability.

## Test Scenarios

### 1. Catalog and Product Discovery

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC-FUNC-001: Catalog loads successfully with visible products

**File:** `tests/catalog.spec.js`

**Steps:**
  1. Open the product catalog page from a fresh browser session.
    - expect: The product count is displayed.
    - expect: Product cards render with visible names and prices.

#### 1.2. TC-FUNC-002: Product count reflects the visible catalog correctly

**File:** `tests/catalog-count.spec.js`

**Steps:**
  1. Open the catalog and inspect the displayed product count.
    - expect: The count matches the visible number of product cards.
    - expect: The count remains accurate after filtering and reset.

#### 1.3. TC-NEG-001: Catalog handles delayed or missing product data gracefully

**File:** `tests/catalog-error-handling.spec.js`

**Steps:**
  1. Simulate a slow or unavailable product response.
    - expect: The UI remains stable and shows a graceful loading or error state if applicable.
    - expect: The user is not left with a broken blank screen.

#### 1.4. TC-EDGE-001: Catalog remains stable after refresh

**File:** `tests/catalog-refresh.spec.js`

**Steps:**
  1. Refresh the product catalog page after browsing.
    - expect: The catalog reloads successfully.
    - expect: Products and count return to the default expected state.

### 2. Filtering and Product Selection

**Seed:** `tests/seed.spec.ts`

#### 2.1. TC-FUNC-003: Size filters update the visible catalog

**File:** `tests/filtering.spec.js`

**Steps:**
  1. Select one or more size filters from the sidebar.
    - expect: Only matching products remain visible.
    - expect: The product count updates accordingly.

#### 2.2. TC-NEG-002: No results state appears when filters exclude all products

**File:** `tests/filter-no-results.spec.js`

**Steps:**
  1. Apply a filter combination that should return no products.
    - expect: The UI clearly displays that no products match the selected criteria.
    - expect: The user can reset or adjust the filters.

#### 2.3. TC-BND-001: Boundary behavior when all size filters are selected

**File:** `tests/filter-boundary.spec.js`

**Steps:**
  1. Select all available size filters.
    - expect: The catalog remains responsive.
    - expect: The product list and count do not break or become inconsistent.

#### 2.4. TC-EXP-001: Exploratory review of filter usability and layout

**File:** `tests/filter-exploratory.spec.js`

**Steps:**
  1. Review the filter section across common screen widths.
    - expect: Filters are intuitive and readable.
    - expect: The layout remains usable and uncluttered.

### 3. Cart Operations

**Seed:** `tests/seed.spec.ts`

#### 3.1. TC-FUNC-004: A single product can be added to the cart

**File:** `tests/cart-add-single.spec.js`

**Steps:**
  1. Add one visible product to the cart.
    - expect: The cart counter increases.
    - expect: The selected product appears in the cart drawer.

#### 3.2. TC-FUNC-005: Multiple products can be added to the cart

**File:** `tests/cart-add-multiple.spec.js`

**Steps:**
  1. Add several products from the catalog to the cart.
    - expect: Each selected product appears in the cart drawer.
    - expect: The cart counter reflects the added items.

#### 3.3. TC-NEG-003: Repeated add actions do not create inconsistent cart entries

**File:** `tests/cart-repeat-add.spec.js`

**Steps:**
  1. Add the same product multiple times.
    - expect: The cart quantity updates correctly.
    - expect: The UI does not show broken or duplicate inconsistent entries.

#### 3.4. TC-EDGE-002: Rapid repeated clicks on Add to cart remain stable

**File:** `tests/cart-rapid-click.spec.js`

**Steps:**
  1. Rapidly click Add to cart several times on the same product.
    - expect: The cart state remains stable.
    - expect: The UI does not freeze or show incorrect quantities.

#### 3.5. TC-FUNC-006: Cart drawer can be opened and closed cleanly

**File:** `tests/cart-drawer.spec.js`

**Steps:**
  1. Open and close the cart drawer after adding products.
    - expect: The cart drawer displays cart content when opened.
    - expect: Closing it returns the user to the catalog without losing the cart state.

### 4. Cart Totals and Pricing

**Seed:** `tests/seed.spec.ts`

#### 4.1. TC-FUNC-007: Subtotal and grand total are calculated correctly

**File:** `tests/cart-pricing.spec.js`

**Steps:**
  1. Add products with known prices to the cart and inspect the summary.
    - expect: Each item shows the correct quantity and price.
    - expect: Subtotal and grand total values match expected arithmetic.

#### 4.2. TC-BND-002: Decimal price handling remains accurate

**File:** `tests/cart-price-precision.spec.js`

**Steps:**
  1. Add products with decimal prices to the cart.
    - expect: Prices display with two decimal places.
    - expect: Totals are calculated without rounding defects.

#### 4.3. TC-NEG-004: Empty cart state behaves predictably

**File:** `tests/cart-empty.spec.js`

**Steps:**
  1. Open the cart when no products have been added.
    - expect: The UI shows an empty or neutral state.
    - expect: No misleading totals or broken values appear.

#### 4.4. TC-EDGE-003: Cart totals remain correct after refresh or navigation

**File:** `tests/cart-refresh.spec.js`

**Steps:**
  1. Refresh the page or navigate away and back after adding items to the cart.
    - expect: The cart contents and totals remain consistent with the last action.
    - expect: The user can continue shopping without data loss.

### 5. Cross-Platform and End-to-End

**Seed:** `tests/seed.spec.ts`

#### 5.1. TC-FUNC-008: End-to-end shopping journey from catalog to cart

**File:** `tests/e2e-shopping-flow.spec.js`

**Steps:**
  1. Browse the catalog, apply a filter, add products, and open the cart.
    - expect: The selected products and totals appear as expected in the cart drawer.
    - expect: The end-to-end flow completes without visible errors.

#### 5.2. TC-BND-003: Responsive behavior at mobile and desktop viewports

**File:** `tests/responsive.spec.js`

**Steps:**
  1. Resize the browser to mobile and desktop sizes.
    - expect: Catalog, filters, cart button, and cart drawer remain usable and readable.
    - expect: No critical layout overlap or clipping occurs.

#### 5.3. TC-EXP-002: Exploratory review of keyboard navigation and accessibility affordances

**File:** `tests/accessibility-exploratory.spec.js`

**Steps:**
  1. Navigate the catalog and cart using keyboard-only interaction.
    - expect: Interactive controls are focusable and behave predictably.
    - expect: The experience remains usable without a mouse.

#### 5.4. TC-EXP-003: Exploratory review of visual consistency and overall usability

**File:** `tests/visual-exploratory.spec.js`

**Steps:**
  1. Review the app for layout consistency, clarity, and overall user experience.
    - expect: The shopping flow feels intuitive and visually consistent.
    - expect: Any obvious usability issues are documented for follow-up.
