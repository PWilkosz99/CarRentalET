import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import {
  StyleSheet, TouchableOpacity, Text, View,
} from 'react-native';


describe('EndDateScreen', () => {
    it('has 3 children', () => {
        const tree = renderer.create(<EndDateScreenTester />).toJSON();
        expect(tree.children.length).toBe(3);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<EndDateScreenTester/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});



//temporary solution
function EndDateScreenTester() {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Select end date</Text>
        <Text style={styles.subtitle}>Date you want to end rent your car</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({});