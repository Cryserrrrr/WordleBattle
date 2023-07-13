import styled from 'styled-components';

const IconDiv = styled.div`
	color: ${props => props.color||null};
	height: ${props => props.height && props.height[props.height.length-1] == '%' ?
	 props.height : `${props.height||24}px`};
	width: ${props => props.width && props.width[props.width.length-1] == '%' ?
	 props.width : `${props.width||24}px`};
	min-height: ${props => props.height && props.height[props.height.length-1] == '%' ?
	 props.height : `${props.height||24}px`};
	min-width: ${props => props.width && props.width[props.width.length-1] == '%' ?
	 props.width : `${props.width||24}px`};
	display: flex;
	align-items: center;
	justify-content: center;
	& svg {
		height: 100%;
		width: 100%;
	}
`;

export default IconDiv;