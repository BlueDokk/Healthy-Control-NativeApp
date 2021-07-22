import React, { useState, useEffect } from 'react';
import { Image, View, Alert } from 'react-native';

import AccentText from '../../components/AccentText/AccentTextComponent';
import AlertComponent from '../../components/Alert/AlertComponent';
import Button from '../../components/Button/ButtonComponent';
import InputNumeric from '../../components/InputNumeric/InputNumericComponent';
import Screen from '../../components/ScreenTag/ScreenTagComponent';
import Separator from '../../components/Separator/SeparatorComponent';
import Title from '../../components/Title/TitleComponent';

import styles from './styles';

function CalculatorScreen(props) {

  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {

    console.log(weight);

  }, [weight])


  const validateWeight = (value) => {
    if (value <= 0 || value === '-') {
      setWeight(null);
      return setShowAlert(true)
    }
    return setWeight(value);
  }

  const validateHeight = (value) => {
    if (value <= 0 || value === '-') {
      setHeight(null);
      return setShowAlert(true);
    }
    return setHeight(value);
  }



  return (
    <Screen style={styles.container}>
      <Title marginTop={20}>BMI Calculator</Title>
      <View style={styles.calculator}>
        <Image
          source={require('../../../assets/images/normal.png')}
          style={styles.image}
        />
        <AccentText style={styles.bmiNumber}> 21.0 </AccentText>
        <AccentText style={styles.bmiText}> BMI </AccentText>
        <Separator style={styles.separator} />
        <InputNumeric
          label='Weight (Kg):'
          onChangeText={validateWeight}
          value={weight}
        />
        <InputNumeric
          label='Height (cm):'
          onChangeText={validateHeight}
          value={height}
        />

        <Button
          title="Calculate"
          marginTop={10}
        />
        <Button
          title="Save record"
          color='secondary'
          marginTop={0}
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