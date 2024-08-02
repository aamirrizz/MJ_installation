"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadGeneratedEntities = LoadGeneratedEntities;
__exportStar(require("./generated/entity_subclasses"), exports);
/**
 * This function is used to force the generated entities to be loaded. This is necessary because of the way that tree shaking works in webpack.
 * If you don't import this function and execute it, then the generated entities will not be included in the build. This is because the entities are not directly
 * referenced in this file, so webpack doesn't know that they are needed. By importing this function and calling it, webpack will include the generated entities
 * in the build.
 *
 * @export
 * @returns {void}
 * @example
 * import { LoadGeneratedEntities } from 'mj_core'
 * LoadGeneratedEntities()
 */
function LoadGeneratedEntities() {
}
//# sourceMappingURL=index.js.map