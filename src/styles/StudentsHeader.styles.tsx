import styled from 'styled-components'

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h1 {
		font-size: 32px;
	}

	.search-box {
		display: flex;
		position: relative;
		margin-left: auto;

		input {
			padding-left: 58px;
			width: 271px;
			height: 52px;
			margin-left: auto;
			border: 1px solid ${({ theme }) => theme.color.blackColor};
			border-radius: 12px;
			font-size: 18px;
		}

		input[type='search']::-webkit-search-cancel-button {
			margin-right: 16px;
		}

		button {
			margin-left: 14px;
			width: 52px;
			height: 52px;
			background-color: ${({ theme }) => theme.color.primaryColor};
			color: ${({ theme }) => theme.color.whiteColor};
			font-size: 32px;
			border: none;
			border-radius: 12px;
			cursor: pointer;
		}
	}

	@media (max-width: 768px) {
		/* display: none; */
		flex-direction: column;
		align-items: flex-start;
		margin-left: 0;

		h1 {
			font-size: 24px;
			margin-bottom: 24px;
		}

		.search-box {
			margin-left: 0;
		}
	}
`

export { StyledHeader }
