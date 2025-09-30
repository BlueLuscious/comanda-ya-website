import { BaseError } from "../../base/base.error.js";

/**
 * Base Handler of Errors.
 */
export class BaseErrorHandler {
    
    /**
     * Executes a synchronous function and handles any thrown errors.
     *
     * If the error is an instance of BaseError, it logs the error using its `log` method.
     * Otherwise, it logs a generic error message to the console.
     *
     * @param {Function} fn - The synchronous function to execute safely.
     * @returns {void}
     */
    handle(fn) {
        try {
            fn();
        } catch (error) {
            if (error instanceof BaseError) {
                error.log();
                // error.display();
            } else {
                console.error(`[BaseErrorHandler] Unknown Error: ${error}`);
            }
        }
    }

    /**
     * Executes an asynchronous function and handles any thrown errors.
     *
     * If the error is an instance of BaseError, it logs the error using its `log` method.
     * Otherwise, it logs a generic error message to the console.
     *
     * @param {Function} fn - The asynchronous function (returns a Promise) to execute safely.
     * @returns {Promise<void>}
     */
    async handleAsync(fn) {
        try {
            await fn();
        } catch (error) {
            if (error instanceof BaseError) {
                error.log();
                // error.display();
            } else {
                console.error(`[BaseErrorHandler] Unknown Async Error:`, error);
            }
        }
    }

}
