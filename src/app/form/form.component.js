"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var form_model_1 = require("./form-model");
var FormComponent = (function () {
    function FormComponent() {
        this.submitted = false;
        this.genders = ['Male', 'Female'];
        this.model = new form_model_1.FormModel(1, 'manaharan', 'manohar@gmail.com', 'dell', 8095465645, 'male');
    }
    FormComponent.prototype.submitRegistration = function () {
        console.log('submit regisration ');
        this.submitted = true;
    };
    FormComponent.prototype.editRegistration = function () {
        this.submitted = false;
    };
    Object.defineProperty(FormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnInit = function () {
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'form-box',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    }),
    __metadata("design:paramtypes", [])
], FormComponent);
exports.FormComponent = FormComponent;
