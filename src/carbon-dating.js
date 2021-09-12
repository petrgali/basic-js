import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const validator = [
    (sample) => { return typeof sample === 'string' },
    (sample) => { return !isNaN(parseInt(sample)) },
    (sample) => { return parseFloat(sample) <= MODERN_ACTIVITY },
    (sample) => { return parseFloat(sample) > 0 }
]
export default function dateSample(sampleActivity) {
    const ln = 0.693
    for (let isValid of validator) {
        if (!isValid(sampleActivity)) return false
    }
    return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (ln / HALF_LIFE_PERIOD))
}