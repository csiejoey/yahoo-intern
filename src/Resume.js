import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './Resume.css';

injectTapEventPlugin();

const { Component } = React;

class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 1,				// 1-3: pic, 4: video
			english: true,
			languageBtnName: 'Chinese Version',
			resume: 'Résumé',
			motivation: 'Motivation',
			academic: 'Academic Record',
			portfolio: 'Portfolio',
			selectedIndex: 0,
		}
		this.switchLanguage = this.switchLanguage.bind(this);
	}
	
	content() {
		const { id, english } = this.state;
		if (id === 4) {
			return (
				<div>
					<video width='100%' autoPlay='autoPlay' controls='controls' src='yahoo_mv_4_21_2.mp4' />
				</div>
			) 
		} else if (english) {
			if (id === 3) {
				return (
					<div>
						<img width='100%' src={'img/pic' + id + '.jpg'} />
					</div>
				)
			} else {
				return (
					<div>
						<img width='100%' src={'img/pic' + id + '.png'} />
					</div>
				)
			}
		} else {
			if (id === 3) {
				return (
					<div>
						<img width='100%' src={'img/pic' + id + '_2.jpg'} />
					</div>
				)
			} else {
				return (
					<div>
						<img width='100%' src={'img/pic' + id + '_2.png'} />
					</div>
				)
			}
		}
	}

	select(index) {
		console.log(index);
		this.setState({
			selectedIndex: index,
		});
	}

	setContent(id) {
		this.setState({
			id: id,
		});
	}

	switchLanguage() {
		const { id, english, tabsName } = this.state;
		let languageBtnName, newTabsName, resume, motivation, academic, portfolio;
		if (english) {
			languageBtnName = '英文版';
			resume = '履歷';
			motivation = '動機';
			academic = '成績單';
			portfolio = '作品集';
		} else {
			languageBtnName = 'Chinese Version';
			resume = 'Résumé';
			motivation = 'Motivation';
			academic = 'Academic Record';
			portfolio = 'Portfolio';
		}
		if (id === 4 && english) {
			languageBtnName = '就已 - 即時通';
		} else if (id === 4) {
			languageBtnName = 'Joey - Yahoo Live Messenger';
		}
		this.setState({
			english: !english,
			languageBtnName: languageBtnName,
			resume: resume,
			motivation: motivation,
			academic: academic,
			portfolio: portfolio,
		});
	}

	render() {
		return (
			<div id='container' style={{display: 'flex',
									    flexDirection: 'column',
									    alignItems: 'center',
									    textAlign: 'center',
									    margin: '50px 0 50px 0',}}>
				<div id='subContainer' style={{width: '80%', boxShadow: '2px 0 3px grey'}}>
					<Tabs inkBarStyle={{background: 'darkgrey', margin: '0.3px 0 0 0'}}>
						<Tab label={this.state.resume} onClick={() => this.setContent(1)} style={{backgroundColor: '#E0E0E0'}}>
						</Tab>
						<Tab label={this.state.motivation} onClick={() => this.setContent(2)} style={{backgroundColor: '#E0E0E0'}}>
						</Tab>
						<Tab label={this.state.academic} onClick={() => this.setContent(3)} style={{backgroundColor: '#E0E0E0'}}>
						</Tab>
						<Tab label={this.state.portfolio} onClick={() => this.setContent(4)} style={{backgroundColor: '#E0E0E0'}}>
						</Tab>
					</Tabs>
					
					<div id='picDiv'>
						{this.content()}
					</div>

					<div>
						<RaisedButton onClick={this.switchLanguage} label={this.state.languageBtnName} fullWidth={true} style={{padding: '5px 0 5px'}} />
					</div>
				</div>
			</div>
		)
	}
}

export default Resume;