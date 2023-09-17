import { transformJSON } from "../src/transformer";
import { JSONData, Mapping } from "../src/types";

describe("JSON Transformation", () => {
  it("should transform JSON keys according to the provided mapping", () => {
    const jsonData: JSONData = {
      page_d: 1,
      fruits: ["apple", "banana", "cherry"],
      color: "red",
    };

    const mapping: Mapping = {
      page_d: "page",
      fruits: "Fruits",
      color: "Color",
    };

    const transformedData: JSONData = transformJSON(jsonData, mapping);

    expect(transformedData).toEqual({
      page: 1,
      Fruits: ["apple", "banana", "cherry"],
      Color: "red",
    });
  });

  it("should handle unmapped keys by keeping them unchanged", () => {
    const jsonData: JSONData = {
      page: 2,
      fruits: ["kiwi", "mango"],
      color: "green",
    };

    const mapping: Mapping = {
      page: "Page",
      fruits: "Fruits",
    };

    const transformedData: JSONData = transformJSON(jsonData, mapping);

    expect(transformedData).toHaveProperty("color");
    expect(transformedData.color).toEqual("green");
  });
});
