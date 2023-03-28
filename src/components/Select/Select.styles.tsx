import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const StyledSelect = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 14px 18px;
	width: 80%;
	height: 60px;
	font-size: 18px;
	font-weight: 600;
	color: ${({ theme }) => theme.color.blackColor};
	background: ${({ theme }) => theme.color.whiteColor};
	border: 1px solid #818181;
	border-radius: 12px;
	cursor: pointer;

	.options {
		overflow: hidden;
		background-color: white;
		border: 1px solid #ccc;
		border-radius: 12px;
		left: 0;
		position: absolute;
		top: 100%;
		width: 100%;

		.option {
			cursor: pointer;
			padding: 14px 18px;

			&:hover {
				color: ${({ theme }) => theme.color.whiteColor};
				background-color: ${({ theme }) => theme.color.primaryColor};
			}
		}
	}

	${md} {
		width: 100%;
		border-radius: ${({ selectIsOpen }) => (selectIsOpen ? '0 0 12px 12px' : '12px')};
		background: ${({ selectIsOpen }) => (selectIsOpen ? '#E7EFFE' : '12px')};
		border: 1px solid #818181;
		font-weight: 600;
		padding: 14px 22px;

		.options {
			top: auto;
			bottom: 100%;
			background: #f5f5f5;
			border: 1px solid #818181;
			border-radius: 12px 12px 0px 0px;
			filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.25));

			.option {
				padding: 14px 18px;
				background: #f5f5f5;
				border: 1px solid #e0e0e0;
				font-weight: 600;
				font-size: 18px;

				&:hover {
					background-color: #e7e7e7;
					color: ${({ theme }) => theme.color.blackColor};
				}

				&:last-child {
					border-bottom: none;
				}
			}
		}
	}
`

export { StyledSelect }
