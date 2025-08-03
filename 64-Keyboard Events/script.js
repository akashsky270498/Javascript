// const h2 = document.querySelector("h2");
// h2.addEventListener("keypress", (e) => {
//   console.log(e.key);
// });

// window.addEventListener("keypress", (e) => {
//   console.log("Key Code: ", e.code);
//   console.log("Key Value: ", e.key);
// });

// window.addEventListener("keydown", (e) => {
//   console.log("Key Code: ", e.code);
//   console.log("Key Value: ", e.key);
// });

window.addEventListener("keyup", (e) => {
  console.log("Key Code: ", e.code);
  console.log("Key Value: ", e.key);
});
/*
🎯 JavaScript Key Events: keydown, keypress, keyup

1. keydown:
   - Fires **when any key is pressed down**.
   - Works for **all keys**, including Shift, Ctrl, Alt, Arrow keys, Function keys (F1–F12), etc.
   - Triggers **before** the character is printed (useful for preventing default behavior).
   - ✅ Most commonly used for full key detection.

2. keypress:
   - Deprecated (but still supported in some browsers).
   - Fires **only for printable character keys** (like letters, numbers, symbols).
   - ❌ Does NOT fire for modifier keys like Shift, Ctrl, Alt, or navigation keys.
   - Generally not recommended to use now.

3. keyup:
   - Fires **when a key is released**.
   - Works for **all keys**, like keydown.
   - Useful for checking what key was released or resetting states.

📝 Notes:
- Modern practice prefers using `keydown` and `keyup`.
- `keypress` is obsolete in the latest specs (not reliable across devices).
- Some special keys like `Fn` may not trigger any event, depending on hardware.
*/
