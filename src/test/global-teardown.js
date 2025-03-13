export default async function globalTeardown() {
    console.log('Starting global teardown...');
    
    if (globalThis.browser) {
      await globalThis.browser.close();
    }
  
    console.log('Global teardown complete');
  }