// Import required modules
const encryptionUtils = require('./encryption/encryptionUtils');
const requestParser = require('./request/requestParser');
const requestGenerator = require('./request/requestGenerator');
const participantProcessor = require('./participant/participantProcessor');

// Initialize and configure the SDK
function initialize(config) {
  // Initialize SDK with provided configuration
  // e.g., configure authentication, endpoints, etc.

  // Return an object with methods to interact with the SDK
  return {
    processParticipantRequest: participantProcessor.processRequest,
  };
}

// Export the initialize function
module.exports = {
  initialize,
};
