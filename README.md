[![Build Status](https://travis-ci.org/ruff-drivers/fc-22.svg)](https://travis-ci.org/ruff-drivers/fc-22)

# FC-22 Harmful Gas Detector Driver for Ruff

FC-22 harmful gas detector driver using ADC interface.

## Supported Engines

* Ruff: ~1.2.0

## Supported Models

- [fc-22](https://rap.ruff.io/devices/fc-22)

## Installing

Execute following command and enter a **supported model** to install.

```sh
# Please replace `<device-id>` with a proper ID.
# And this will be what you are going to query while `$('#<device-id>')`.
rap device add <device-id>

# Then enter a supported model, for example:
# ? model: fc-22
# ? value (number) for argument "thresholdVoltage": (1)
# ? value (number) for argument "interval": (1000)
```

### Arguments

#### `thresholdVoltage`

The threshold voltage to trigger `alarm` or `clear` event, should be a number between `0`~`5`, defaults to `1`.

#### `interval`

The interval (in milliseconds) between two detections, defaults to `1000`.

## Usage

Here is the basic usage of this driver.

```js
$('#<device-id>').on('alarm', function () {
    console.log('Harmful gas detected!');
});

$('#<device-id>').on('clear', function () {
    console.log('Harmful gas cleared!');
});
```

## API References

### Events

#### `alarm`

Event `alarm` is emitted if the sensor ADC voltage gets higher than the threshold.

#### `clear`

Event `clear` is emitted if the sensor ADC voltage falls below the threshold.

## Contributing

Contributions to this project are warmly welcome. But before you open a pull request, please make sure your changes are passing code linting and tests.

You will need the latest [Ruff SDK](https://ruff.io/) to install rap dependencies and then to run tests.

### Installing Dependencies

```sh
npm install
rap install
```

### Running Tests

```sh
npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Nanchao Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
