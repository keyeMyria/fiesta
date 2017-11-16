'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styleTypes = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	containerCenter: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	imageContainer: {
		width: 320,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	buttonsContainer: {
		flex: 1
	},
	inputsContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	fullWidthButton: {
		backgroundColor: '#00aec7',
		height: 70,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	fullWidthButtonText: {
		fontSize: 24,
		color: 'white'
	},
	wordContainer: {
    flexDirection: 'column'
	},
	item2: {
		flexDirection: 'column'
	}
});
export default styleTypes;
