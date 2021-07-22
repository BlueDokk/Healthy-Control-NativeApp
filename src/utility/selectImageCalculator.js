import imagesCalculator from '../config/imagesCalculator';

export const selectCalculatorImage = (bmi) => {

    if (bmi <= 18.4) {
        return imagesCalculator.underWeight;
    };
    if (18.5 <= bmi && bmi <= 24.9) {
        return imagesCalculator.normal;
    };
    if (25 <= bmi && bmi <= 29.9) {
        return imagesCalculator.overWeight;
    };
    if (30 <= bmi && bmi <= 34.9) {
        return imagesCalculator.obese;
    };
    if (35 <= bmi) {
        return imagesCalculator.extremlyObese;
    };
}