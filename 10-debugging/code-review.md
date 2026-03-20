## Code Review Exercise

P.S. - Used chatgpt for formatting (not for the actual ideas)

## Issue #1: Accessibility (buttons missing labels)

One thing I noticed is that some buttons, like the close popup button, dont have any label or text. This is an issue because screen readers wont know what the button does, since its just an icon.

### Initial code:
```html
<button class="close-popup-button">
  <i class="fa-solid fa-xmark"></i>
</button>
```

### Fix:
```html
<button
  class="close-popup-button"
  aria-label="close popup window"
  title="close popup window">
  <i class="fa-solid fa-xmark"></i>
</button>
```

## Issue #2: Submit button is outside the form

The submit and reset buttons are not inside the `<form>` tag. Because of that, clicking submit might not actually submit the form properly.

This is a functionality issue because the form is not behaving how its supposed to.

### Fix:

Move the buttons inside the form element so it actually works.


## Issue #3: Labels are not using <label>

The form uses `<span>` instead of `<label>` for input labels. This is not good practice and also affects accessibility.

Also users cant click the label to focus the input.

### Initial code:

```html
<span class="form-label">Name</span>
<input type="text" id="name" name="name" />
```

### Fix:

```html
<label class="form-label" for="name">Name</label>
<input type="text" id="name" name="name" />
```

## Issue #4: JS depends too much on HTML structure

In index.js, the code uses multiple parentElement calls to find elements. This is not very safe because if the html changes even a little, the JS will break.

### Example:

```js
const popupSection = event.currentTarget.parentElement.parentElement.parentElement;
```

This is kind of messy and hard to maintain.

### Fix:

Use `.closest()` instead:

```js
const popupSection = event.currentTarget.closest(".popup-section-container");
```


## Issue #5: Checkbox names are inconsistent

The checkboxes all have different names like breed1, breed2, etc. This makes it harder to handle the data later.

### Fix:

Use the same name for all:

```html
<input type="checkbox" name="breeds" value="siamese" />
```

## Issue #6: Fixed widths hurt responsiveness

Some elements like the form have fixed widths (like 700px). This can cause problems on smaller screens.

### Fix:

Use something like:

```css
width: 100%;
max-width: 700px;
```

## Issue #7: No form validation

The form does not have required fields, so users can submit empty inputs.

### Fix:

```html
<input type="email" required />
```
