"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_js_1 = __importDefault(require("./api.js"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
const port = 8081;
const options = {
    allowedHeaders: [
        'X-ACCESS_TOKEN',
        'Access-Control-Allow-Origin',
        'Authorization',
        'Origin',
        'x-requested-with',
        'Content-Type',
        'Content-Range',
        'Content-Disposition',
        'Content-Description',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: [
        'http://localhost:3000',
    ],
    preflightContinue: false,
};
server.use((0, cors_1.default)(options));
server.use(express_1.default.json());
server.get("/healthcheck", (req, res) => {
    res.status(200).send("ok");
});
server.use('/v1', api_js_1.default);
server.listen(port, () => {
    console.log('Listening on port ' + port);
});
//# sourceMappingURL=server.js.map