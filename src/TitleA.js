import React, { Component } from 'react';
import styled from 'styled-components';

const TitleA = styled.div`
	color: red;
	font-size: ${props => props.highlight? '2em' : '1em'}
`;

export default TitleA;
