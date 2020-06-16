(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.library = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * 元数据管理器
     * @deprecated 当有启用第一个装饰器方法的时候，在源码的地方就会生成一个现在这样的方法，里面会判定 Reflect.metadata 是否是一个方法，然后会把元数据的 type 和 值 传过来 这个值 是根据泛型的名字创建的
     *
     * @example
     *   function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }
     */
    Object.assign(Reflect, {
        /**
         * @param metadataKey 目前这个key暂时为design:type 其它的需要暂时看用途
         * metadataValue 返回的是一个方法，如果是string number等系统类型话就会有名称分别对String Number等，
         * 如果是自定义的泛型类型，在开发模式下会以类为名称，如果混淆以后，类的name字段就没了，需要用装饰方法给类单独绑定唯一ID，
         */
        metadata: function (metadataKey, metadataValue) {
            console.log(metadataValue.prototype);
            console.log(metadataKey, metadataValue, metadataValue.name);
            // console.log(typeof metadataValue);
        },
    });

    var Logic = /** @class */ (function () {
        function Logic() {
        }
        return Logic;
    }());
    Object.assign(Logic.prototype, { id: 1 });

    var Main = /** @class */ (function () {
        function Main() {
            this.getTest = 2;
            this.mmm = new Logic();
        }
        __decorate([
            logType //必须要有一个装饰器，才能启动元数据
            ,
            __metadata("design:type", Number)
        ], Main.prototype, "getTest", void 0);
        __decorate([
            logType,
            __metadata("design:type", Object)
        ], Main.prototype, "ttt", void 0);
        __decorate([
            logType,
            __metadata("design:type", Logic)
        ], Main.prototype, "mmm", void 0);
        return Main;
    }());
    function logType(target, key) {
        // console.log(logType);
        // var t = Reflect.getMetadata("design:type", target, key);
        // console.log(`${key} type: ${t.name}`);
    }
    // console.log(Main.prototype);
    // console.log(Reflect["getMetadata"]("design:type", Main.prototype, "getTest"));
    // console.log(Reflect);
    // console.log(Reflect.getMetadata("design:type", Main.prototype, "getTest"));

    exports.Main = Main;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=library.js.map
