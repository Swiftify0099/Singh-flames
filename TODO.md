# Fix DealsPopup Selection Functionality

## Approved Plan
- Add state management for selected drink and dip in DealsPopup.jsx
- Make drink and dip selection buttons functional with click handlers and visual feedback
- Update "Add Customized Deal" button to include selected customizations in item name and price
- Ensure popup closes after adding customized deal to order
- Add visual indicators for selected items (highlighting)

## Steps to Complete
- [ ] Update DealsPopup.jsx to add useState for selectedDrink and selectedDip
- [ ] Add onClick handlers to drink and dip buttons with selection logic
- [ ] Add conditional styling for selected items
- [ ] Modify onAddCustomizedDeal call to create customized item with selected drink/dip
- [ ] Ensure popup closes after adding to order
- [ ] Test that customized deals appear correctly in order summary
