#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var chalk_animation_1 = require("chalk-animation");
var figlet_1 = require("figlet");
var sleep = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                setTimeout(resolve, 3000);
            })];
    });
}); };
var welcome = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _welcome;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(chalk_1["default"].green(figlet_1["default"].textSync("C a l c u l a t o r   !")));
                _welcome = chalk_animation_1["default"].rainbow("Welcome to Afraz Calculator");
                return [4 /*yield*/, sleep()];
            case 1:
                _a.sent();
                _welcome.stop();
                return [2 /*return*/];
        }
    });
}); };
await welcome();
var askQuestion = function () { return __awaiter(void 0, void 0, void 0, function () {
    var qus, a, b, c;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1["default"].prompt([
                    {
                        name: "num1",
                        type: "number",
                        message: "Enter 1st number"
                    },
                    {
                        name: "operation",
                        type: "list",
                        message: "Select any of the following operation",
                        choices: [
                            "Addition",
                            "Subtraction",
                            "Multiplication",
                            "Division",
                            "Remainder",
                            "Exponentiation",
                            "Power",
                        ]
                    },
                    {
                        name: "num2",
                        type: "number",
                        message: "Enter 2nd number"
                    },
                ])];
            case 1:
                qus = _a.sent();
                a = qus.num1;
                b = qus.num2;
                c = qus.operation;
                if (c == "Addition") {
                    console.log(chalk_1["default"].red("".concat(a, " + ").concat(b, " = ").concat(a + b)));
                }
                else if (c == "Subtraction") {
                    console.log(chalk_1["default"].red("".concat(a, " - ").concat(b, " = ").concat(a - b)));
                }
                else if (c == "Multiplication") {
                    console.log(chalk_1["default"].red("".concat(a, " x ").concat(b, " = ").concat(a * b)));
                }
                else if (c == "Division") {
                    console.log(chalk_1["default"].red("".concat(a, " / ").concat(b, " = ").concat(a / b)));
                }
                else if (c == "Remainder") {
                    console.log(chalk_1["default"].red("".concat(a, " % ").concat(b, " = ").concat(a % b)));
                }
                else if (c == "Exponentiation") {
                    console.log(chalk_1["default"].red("".concat(a, " ** ").concat(b, " = ").concat(Math.exp(a))));
                }
                else if (c == "Power") {
                    console.log(chalk_1["default"].red("".concat(a, " ^ ").concat(b, " = ").concat(Math.pow(a, b))));
                }
                return [2 /*return*/];
        }
    });
}); };
// await askQuestion();
function runAgain() {
    return __awaiter(this, void 0, void 0, function () {
        var again;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, askQuestion()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, inquirer_1["default"].prompt({
                            name: "restart",
                            type: "input",
                            message: "Run Again ? (y/n)"
                        })];
                case 2:
                    again = _a.sent();
                    _a.label = 3;
                case 3:
                    if (again.restart == "y" || again.restart == "Y") return [3 /*break*/, 0];
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
await runAgain();
