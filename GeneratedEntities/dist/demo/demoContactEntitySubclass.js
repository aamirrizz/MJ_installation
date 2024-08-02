"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDemoEntity = void 0;
//import { ContactBaseEntity } from "../generated/entity_subclasses";
const core_1 = require("@memberjunction/core");
const global_1 = require("@memberjunction/global");
// STUB base class-  you would DELETE this and use a real base class from ../generated/entity_subclasses instead
class ContactBaseEntityStub extends core_1.BaseEntity {
    get FirstName() {
        return "";
    }
    set FirstName(value) {
    }
}
// Super simple example of a sub-class for an example Contacts entity  doesn't do anything but you can see here you can do stuff with sub-class overrides
// Also, important, if you're going to override the getter/setter for a property, you MUST call super.propertyName in the getter/setter AND you must also
// override BOTH the getter and setter, otherwise you'll get a runtime error! This is because the getter/setter is actually a single property on the object
let ContactDemoEntity = class ContactDemoEntity extends ContactBaseEntityStub /*here you would change this to sub-class the real base class from ../generated/entity_subclasses */ {
    get FirstName() {
        console.log("I'm getting the FirstName property from the sub-class!");
        return super.FirstName;
    }
    set FirstName(value) {
        super.FirstName = value;
        console.log("I'm setting the FirstName property from the sub-class!");
    }
};
exports.ContactDemoEntity = ContactDemoEntity;
exports.ContactDemoEntity = ContactDemoEntity = __decorate([
    (0, global_1.RegisterClass)(core_1.BaseEntity, 'Contacts', 1)
], ContactDemoEntity);
//# sourceMappingURL=demoContactEntitySubclass.js.map