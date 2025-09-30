/**
 * Base Class for Errors.
 */
export class BaseError extends Error {
    
    /**
     * BaseError Initializer.
     * @param {string} message Text Message
     * @param {string} name Error Name
     * @returns {void}
     */
    constructor(message, name = "BaseError") {
        super(message);
        this.name = name;
        this.timestamp = new Date();
    }

    /**
     * Log an Error
     * @returns {void}
     */
    log() {
        console.error(`[${this.timestamp.toISOString()}] ${this.name}: ${this.message}`);
    }

    // display() {}
}
