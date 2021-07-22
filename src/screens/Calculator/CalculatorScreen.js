import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, View } from 'react-native';

import AccentText from '../../components/AccentText/AccentTextComponent';
import AlertComponent from '../../components/Alert/AlertComponent';
import Button from '../../components/Button/ButtonComponent';
import InputNumeric from '../../components/InputNumeric/InputNumericComponent';
import Screen from '../../components/ScreenTag/ScreenTagComponent';
import Separator from '../../components/Separator/SeparatorComponent';
import Title from '../../components/Title/TitleComponent';
import { selectCalculatorImage } from '../../utility/selectImageCalculator';
import { LinearGradient } from 'expo-linear-gradient';
import firestoreService from '../../firebase/firebaseServices';

import styles from './styles';
import colors from '../../config/colors';

function CalculatorScreen(props) {

  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [bmiScore, setBmiScore] = useState(0);
  const [bmiImage, setBmiImage] = useState(selectCalculatorImage(bmiScore));
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const { records } = useSelector(state => state.ui);
  const { uid: userId } = useSelector(state => state.auth);


  useEffect(() => {

    // Every time the records change it is stored in the fireStore database.
    // firestoreService.saveRecord(records, userId);
    setBmiImage(selectCalculatorImage(bmiScore));

  }, [bmiScore, dispatch])

  const calculateBmi = (weight, height) => {

    const normalizedWeight = parseFloat(weight);
    const normalizeHeight = parseFloat(height) / 100;

    if (normalizedWeight <= 0 || normalizeHeight <= 0 || height === null || weight === null) {
      setWeight(null);
      setHeight(null);
      return setShowAlert(true);
    }

    // Calculate BMI only if there are numeric entries
    const result = (typeof normalizedWeight === 'number' && typeof normalizeHeight === 'number') ?
      (normalizedWeight / (normalizeHeight * normalizeHeight)).toFixed(1)
      : 0;

    setBmiScore(result);
    dispatch(lastBmi(weight, height, result));

  }

  const handleSaveRecord = () => {
    if ((parseFloat(height)) <= 0 || parseFloat(weight) <= 0) {
      setWeight(null);
      setHeight(null);
      return setShowAlert(true);
    }
    calculateBmi(weight, height);
    dispatch(saveRecord());
  }

  return (
    <Screen style={styles.container}>
      <Title marginTop={20}>BMI Calculator</Title>
      <View style={styles.calculator}>
        <LinearGradient
          // Background Linear Gradient
          colors={['transparent',colors.background]}
          style={styles.backgroundCalculator}
        />
        <Image
          source={bmiImage}
          resizeMode={'contain'}
          style={styles.image}
        />
        <AccentText style={styles.bmiNumber}> {bmiScore} </AccentText>
        <AccentText style={styles.bmiText}> BMI </AccentText>
        <Separator style={styles.separator} />
        <InputNumeric
          label='Weight (Kg):'
          onChangeText={setWeight}
          value={weight}
        />
        <InputNumeric
          label='Height (cm):'
          onChangeText={setHeight}
          value={height}
        />

        <Button
          title="Calculate"
          marginTop={10}
          onPress={() => { calculateBmi(weight, height) }}
        />
        <Button
          title="Save record"
          color='secondary'
          marginTop={0}
          onPress={() => { handleSaveRecord() }}
        />

        <AlertComponent
          title={'Error: Invalid measurement.'}
          message={'Please enter a valid height or weight value.'}
          onShow={showAlert}
          onHide={() => { setShowAlert(false) }}
        />

      </View>

    </Screen>
  );
}



export default CalculatorScreen;