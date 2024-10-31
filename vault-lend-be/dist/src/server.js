"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_js_1 = __importDefault(require("./api.js"));
const server = (0, express_1.default)();
const port = 8081;
server.use(express_1.default.json());
server.use('/v1', api_js_1.default);
server.listen(port, () => {
    console.log('Listening on port ' + port);
});
//# sourceMappingURL=server.js.map