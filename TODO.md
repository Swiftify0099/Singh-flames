# Refactoring MainContent.jsx into Maintainable Components

## Approved Plan
- Break down the large MainContent.jsx file into smaller, reusable components without changing existing functionality.
- Create the following components:
  - CategoryGrid: Handles rendering the grid of menu categories.
  - CategoryItems: Handles displaying items for a selected category, including quantity controls and customization.
  - CustomizePizzaPopup: Manages the "Create Your Own" popup, with sub-components:
    - SizeSelector: For selecting pizza size.
    - BaseSelector: For selecting pizza base.
    - SauceSelector: For selecting sauce.
    - ToppingsSelector: For selecting toppings.
- Keep state management in MainContent.jsx and pass props to new components.
- Ensure no changes to existing behavior.

## Steps to Complete
- [ ] Create CategoryGrid component in src/components/CategoryGrid.jsx
- [ ] Create CategoryItems component in src/components/CategoryItems.jsx
- [ ] Create SizeSelector component in src/components/SizeSelector.jsx
- [ ] Create BaseSelector component in src/components/BaseSelector.jsx
- [ ] Create SauceSelector component in src/components/SauceSelector.jsx
- [ ] Create ToppingsSelector component in src/components/ToppingsSelector.jsx
- [ ] Create CustomizePizzaPopup component in src/components/CustomizePizzaPopup.jsx (integrating the selectors)
- [ ] Update MainContent.jsx to import and use the new components, passing appropriate props
- [ ] Test that the refactored code maintains the same functionality (no behavior changes)
