const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const { authenticate } = require("../../decorators");

const { validateBody } = require("../../decorators");

const schemas = require("../../schemas");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscribeSchema),
  authenticate,
  ctrl.changeSubscription
);

module.exports = router;
