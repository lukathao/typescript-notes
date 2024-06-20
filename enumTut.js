"use strict";
//enums are easy ways to define sets of named constants
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unautheorized";
    LoginError["NoUser"] = "user does not exist";
    LoginError["WrongCredentials"] = "wrong credentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
