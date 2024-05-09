'use strict';

/**
 * student-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-list.student-list');
