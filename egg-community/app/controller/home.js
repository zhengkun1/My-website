'use strict';

// const Controller = require('egg').Controller;

module.exports = app => {
  class HomeController extends app.Controller {
    * getUserId() {
      const { user, password } = this.ctx.request.body;
      this.ctx.body = yield this.service.text.getUserId(user, password);
    }
    * register() {
      const { user, password } = this.ctx.request.body;
      this.ctx.body = yield this.service.text.register(user, password);
    }
  }

  return HomeController;
};
