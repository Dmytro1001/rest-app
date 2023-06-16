const express = require("express");

const ctrl = require("../../controllers/auth-controllers");

const { authenticate, validateBody, upload } = require("../../decorators");

const schemas = require("../../schemas");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verify);

router.post(
  "/verify",
  validateBody(schemas.verifySchema),
  ctrl.resendVerifiEmail
);

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

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  ctrl.changeAvatar
);

module.exports = router;
