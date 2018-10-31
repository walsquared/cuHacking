// React Native imports
import React, {Component} from 'react';
import {Dimensions, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

const MILLS_PER_WEEK = 6.048e+8;
const MILLS_PER_DAY = 8.64e+7;
const MILLS_PER_HOUR = 3.6e+6;
const MILLS_PER_MINUTE = 60000;
const MILLS_PER_SECOND = 1000;

export default class CountdownPage extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			hackDay: new Date(2019, 1, 16, 9),
			weeksUntilHackDay: '',
			daysUntilHackDay: '',
			hoursUntilHackDay: '',
			minutesUntilHackDay: '',
			secondsUntilHackDay: ''
		}
	}

	componentDidMount()
	{
		const padNumber = (number) => number < 10 ? '0' + number : '' + number;
		const calculateTimeRemaining = () =>
		{
			var today = Date.now();
			var millsUntilhackDay = this.state.hackDay.getTime() - today;

			var weeksUntilHackDay = padNumber(Math.floor(millsUntilhackDay / MILLS_PER_WEEK));
			var daysUntilHackDay = padNumber(Math.floor((millsUntilhackDay - (weeksUntilHackDay * MILLS_PER_WEEK)) / MILLS_PER_DAY));
			var hoursUntilHackDay = padNumber(Math.floor((millsUntilhackDay - (weeksUntilHackDay * MILLS_PER_WEEK) - (daysUntilHackDay * MILLS_PER_DAY)) / MILLS_PER_HOUR));
			var minutesUntilHackDay = padNumber(Math.floor((millsUntilhackDay - (weeksUntilHackDay * MILLS_PER_WEEK) - (daysUntilHackDay * MILLS_PER_DAY) - (hoursUntilHackDay * MILLS_PER_HOUR)) / MILLS_PER_MINUTE));
			var secondsUntilHackDay = padNumber(Math.floor((millsUntilhackDay - (weeksUntilHackDay * MILLS_PER_WEEK) - (daysUntilHackDay * MILLS_PER_DAY) - (hoursUntilHackDay * MILLS_PER_HOUR) - (minutesUntilHackDay * MILLS_PER_MINUTE)) / MILLS_PER_SECOND));

			this.setState({weeksUntilHackDay, daysUntilHackDay, hoursUntilHackDay, minutesUntilHackDay, secondsUntilHackDay});
		}

		setInterval(calculateTimeRemaining, 1000);
	}

	countdownTimer()
	{
		return (
			<View style = {{paddingBottom: 5}}>
				<View style = {[containerStyle.screenSection, {flexDirection: 'row'}]}>
					<View style = {containerStyle.timeUnitBox1}>
						<Text style = {textStyle.light(100, 'center', 'white')}>{this.state.weeksUntilHackDay}</Text>
						<Text style = {textStyle.bold(16, 'center', 'white')}>weeks</Text>
					</View>
					<View style = {containerStyle.timeUnitBox1}>
						<Text style = {textStyle.light(100, 'center', 'white')}>{this.state.daysUntilHackDay}</Text>
						<Text style = {textStyle.bold(16, 'center', 'white')}>days</Text>
					</View>
				</View>
				<View style = {[containerStyle.screenSection, {flexDirection: 'row'}]}>
					<View style = {containerStyle.timeUnitBox2}>
						<Text style = {textStyle.regular(45, 'center', 'white')}>{this.state.hoursUntilHackDay}</Text>
						<Text style = {textStyle.bold(16, 'center', 'white')}>hours</Text>
					</View>
					<View style = {containerStyle.timeUnitBox2}>
						<Text style = {textStyle.regular(45, 'center', 'white')}>{this.state.minutesUntilHackDay}</Text>
						<Text style = {textStyle.bold(16, 'center', 'white')}>min</Text>
					</View>
					<View style = {containerStyle.timeUnitBox2}>
						<Text style = {textStyle.regular(45, 'center', 'white')}>{this.state.secondsUntilHackDay}</Text>
						<Text style = {textStyle.bold(16, 'center', 'white')}>sec</Text>
					</View>
				</View>
			</View>
		);
	}
	render()
	{
		var {height} = Dimensions.get('window');
		var screenheight = height / 2;
		return (
			<View style = {[
				containerStyle.screen,
				{
					backgroundColor: 'black',
					minHeight: screenheight
				}
			]}>
				{this.countdownTimer()}
				<View style = {containerStyle.screenSection}>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(40, 'center', 'white')}>What is cuHacking?</Text>
						<Text style = {textStyle.light(20, 'center', 'white')}>
							Carleton University's cuHacking is the largest hackathon in Ottawa. The hackathon takes place over 24 hours, non-stop! Students can compete against each other and themselves to take their projects from concept to reality.
						</Text>
					</View>
				</View>
			</View>
		);
	}
}