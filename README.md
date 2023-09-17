# tiny JSON Transformer

![Tests](https://github.com/reallytinyorg/tinyjsontransformer/actions/workflows/test.yml/badge.svg)

tiny JSON Transformer is an npm package for transforming JSON data based on a provided mapping. It allows you to easily rename keys in a JSON object according to a predefined mapping, inspired by how Go handles JSON.

## Installation

You can install JSON Transformer via npm:

```bash
npm install tinyjsontransformer --save
```

## Usage

```
import { transformJSON, JSONData, Mapping } from 'tinyjsontransformer';

// Sample JSON data
const jsonData: JSONData = {
  "page_random": 1,
  "Fruits": ["apple", "banana", "cherry"],
  "color_random": "red"
};

// Define a mapping to transform keys
const mapping: Mapping = {
  "page_random": "page",
  "Fruits": "fruits",
  "color_random": "color"
};

// Transform the JSON data
const transformedData: JSONData = transformJSON(jsonData, mapping);

console.log(transformedData);
```

## Output

```
{
  "page": 1,
  "fruits": ["apple", "banana", "cherry"],
  "color": "red"
}
```

### Todo

- [x] Add tests workflow on PR
- [ ] Add semantic-release for automated version management
- [ ] Add release status
- [ ] Add generic return type, so that user has control over mapped type

## Author

Aobakwe

GitHub: [aobakwewastaken](https://github.com/aobakwewastaken)
