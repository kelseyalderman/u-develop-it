// Central hub that pulls all routes together
const express = require("express");
const router = express.Router();

// Import candidate routes
router.use(require("./candidateRoutes"));

// Import party routes
router.use(require("./partyRoutes"));

// Import voter routes
router.use(require("./voterRoutes"));

// Import votes routes
router.use(require("./voteRoutes"));

module.exports = router;
