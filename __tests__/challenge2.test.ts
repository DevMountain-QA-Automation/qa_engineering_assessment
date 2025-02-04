import { Widgets } from "./pages/Widgets";
import * as palindromes from "./assets/palindromes.json";

describe("palindrome testing", () => {
  let widget = new Widgets();
  beforeEach(async () => {
    await widget.navigate();
  });
  afterAll(async () => {
    await widget.driver.quit();
  });
  palindromes.palindrome.forEach((palindrome) => {
    test(`"${palindrome}" should be a palindrome`, async () => {
      let results = await widget.checkPalindrome(palindrome);
      expect(results).toContain("true");
    });
  });
  palindromes["non-palindrome"].forEach((nonpalindrome) => {
    test(`"${nonpalindrome}" should not be a palindrome`, async () => {
      let results = await widget.checkPalindrome(nonpalindrome);
      expect(results).toContain("false");
    });
  });
});
