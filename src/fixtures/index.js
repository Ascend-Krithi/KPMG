const base = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const test = base.test.extend({
  page: async ({ page }, use, testInfo) => {
    await use(page);
    
    if (testInfo.status !== testInfo.expectedStatus) {
      const queuePath = path.join('test-results', 'healing-queue.json');
      const errorContext = {
        testName: testInfo.title,
        testFile: testInfo.file,
        error: testInfo.error?.message || 'Unknown error',
        timestamp: new Date().toISOString()
      };
      
      let queue = [];
      if (fs.existsSync(queuePath)) {
        queue = JSON.parse(fs.readFileSync(queuePath, 'utf-8'));
      }
      queue.push(errorContext);
      
      fs.mkdirSync(path.dirname(queuePath), { recursive: true });
      fs.writeFileSync(queuePath, JSON.stringify(queue, null, 2));
    }
  }
});

const expect = base.expect;

module.exports = { test, expect };