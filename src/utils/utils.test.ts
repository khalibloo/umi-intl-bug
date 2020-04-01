import { formatPrice } from "./utils";

describe("formatPrice tests", () => {
  test("(USD, 30) should return $30.00", () => {
    expect(formatPrice("USD", 30)).toEqual("$30.00");
  });
});
