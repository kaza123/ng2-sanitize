System.registerDynamic("src/sanitizeHtml.pipe", ["@angular/core", "@angular/platform-browser"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var platform_browser_1 = $__require("@angular/platform-browser");
    var SanitizeHtml = function () {
        function SanitizeHtml(_sanitizer) {
            this._sanitizer = _sanitizer;
        }
        SanitizeHtml.prototype.transform = function (v) {
            return this._sanitizer.bypassSecurityTrustHtml(v);
        };
        SanitizeHtml = __decorate([core_1.Injectable(), core_1.Pipe({
            name: 'sanitizeHtml',
            pure: false // required to update the value when the promise is resolved
        }), __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])], SanitizeHtml);
        return SanitizeHtml;
    }();
    exports.SanitizeHtml = SanitizeHtml;
    return module.exports;
});
System.registerDynamic("ng2-sanitize", ["./src/sanitizeHtml.pipe"], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var sanitizeHtml_pipe_1 = $__require("./src/sanitizeHtml.pipe");
  exports.SanitizeHtml = sanitizeHtml_pipe_1.SanitizeHtml;
  return module.exports;
});