const getAboutUsLink = require("../src/mshurafa/language.js");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});
