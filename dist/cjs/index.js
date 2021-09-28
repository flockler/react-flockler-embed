"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FLOCKLER_IFRAME_ORIGIN = 'https://plugins.flockler.com';
var RESIZE_EVENT_NAME = 'FlockerIframeResizeEvent';
var RECEIVED_EVENT_NAME = 'FlockerIframeResizeReceivedEvent';
var handleFlocklerIframeResizeEvent = function (event) {
    var _a;
    if (event.origin !== FLOCKLER_IFRAME_ORIGIN)
        return;
    if (event.data.eventName !== RESIZE_EVENT_NAME)
        return;
    var iframe = document.querySelector('iframe#flockler-embed-iframe-' + event.data.embedUuid);
    if (iframe) {
        iframe.height = event.data.nativeHeight;
        (_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage({ eventName: RECEIVED_EVENT_NAME }, '*');
    }
};
function FlocklerEmbed(_a) {
    var siteUuid = _a.siteUuid, embedUuid = _a.embedUuid, _b = _a.style, style = _b === void 0 ? {} : _b, rest = __rest(_a, ["siteUuid", "embedUuid", "style"]);
    react_1.default.useEffect(function () {
        window.addEventListener('message', handleFlocklerIframeResizeEvent, false);
        return function () {
            window.removeEventListener('message', handleFlocklerIframeResizeEvent);
        };
    }, [handleFlocklerIframeResizeEvent]);
    var styling = __assign({ display: 'block', border: 'none', width: '100%' }, style);
    return (react_1.default.createElement("iframe", __assign({ src: "https://plugins.flockler.com/embed/iframe/" + siteUuid + "/" + embedUuid, id: "flockler-embed-iframe-" + embedUuid, style: styling }, rest)));
}
exports.default = FlocklerEmbed;
