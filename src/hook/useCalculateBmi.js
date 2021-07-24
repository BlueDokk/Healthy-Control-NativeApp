import React, { useState } from 'react'

export default useCalculateBmi = (weight, height) => {
    
    const [weightState, setWeightState] = useState(null);
    const [heightState, setHeightState] = useState(null);
    const [bmi, setBmi] = useState(0);
    const [error, setError] = useState(false);

    const normalizedWeight = parseFloat(weight);
    const normalizeHeight = parseFloat(height) / 100;

    if (!weight || !height || normalizedWeight <= 0 || normalizeHeight <= 0) {
        setWeightState(null);
        setHeightState(null);
        return setError(true);
    }else{
        
        // Calculate BMI only if there are numeric entries.
        const result = normalizedWeight / (normalizeHeight * normalizeHeight).toFixed(1);
        setBmi(result);
    }

    return {bmi, error}
}
