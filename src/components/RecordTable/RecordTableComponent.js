import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import firestoreService from '../../firebase/firebaseServices';

import styles from './styles';
import { updateRecords } from '../../actions/ui';

function RecordTableComponent({ records }) {

    const { uid: userId } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleDeleteRecord = (recordId) => {

        const recordsFiltered = records.filter(record => record.recordId !== recordId);
        dispatch(updateRecords(recordsFiltered));
        firestoreService.saveRecord(recordsFiltered, userId);
        console.log(recordsFiltered);

    }


    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>#</DataTable.Title>
                <DataTable.Title numeric>Weight</DataTable.Title>
                <DataTable.Title numeric>Height</DataTable.Title>
                <DataTable.Title numeric>BMI</DataTable.Title>
                <DataTable.Title numeric>Delete</DataTable.Title>
            </DataTable.Header>

            {records && records.map((record, key) => {
                return (
                    <DataTable.Row key={record.recordId} style={styles.row}>
                        <DataTable.Cell >
                            <Text style={styles.text}>{key + 1}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.text}>{record.weight}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.text}>{record.height}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <Text style={styles.text}>{record.bmiScore}</Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                            <TouchableOpacity
                                style={styles.icon}
                                onPress={() => handleDeleteRecord(record.recordId)}
                            >
                                <FontAwesome5
                                    name="trash"
                                    size={15}
                                    color='white'
                                />
                            </TouchableOpacity>
                        </DataTable.Cell>
                    </DataTable.Row>
                )
            })}


        </DataTable>
    );
}

export default RecordTableComponent;