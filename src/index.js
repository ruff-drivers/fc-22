/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var driver = require('ruff-driver');

var prototype = {
    _setupTimer: function () {
        clearInterval(this._timer);
        this._timer = setInterval(this._handler.bind(this), this._interval);
    },
    _handler: function () {
        var that = this;

        this._adc.getVoltage(function (error, voltage) {
            if (error) {
                that.emit('error', error);
                return;
            }

            if (voltage >= that._thresholdVoltage) {
                if (that._safe) {
                    that._safe = false;
                    that.emit('alarm');
                }
            } else {
                // eslint-disable-next-line no-lonely-if
                if (!that._safe) {
                    that._safe = true;
                    that.emit('clear');
                }
            }
        });
    }
};

Object.defineProperties(prototype, {
    interval: {
        get: function () {
            return this._interval;
        },
        set: function (interval) {
            this._interval = interval;
            this._setupTimer();
        }
    },
    thresholdVoltage: {
        get: function () {
            return this._thresholdVoltage;
        },
        set: function (voltage) {
            this._thresholdVoltage = voltage;
        }
    }
});

module.exports = driver({
    attach: function (inputs, context) {
        this._adc = inputs['adc'];

        var args = context.args;

        this._thresholdVoltage = args.thresholdVoltage || 1;
        this._interval = args.interval || 1000;

        this._safe = true;

        this._setupTimer();
    },
    exports: prototype
});
