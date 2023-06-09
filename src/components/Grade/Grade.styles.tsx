import styled from 'styled-components'

const StyledGrade = styled.div`
	width: 52px;
	height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.color.whiteColor};
	border-radius: 50%;
	font-size: 24px;
	border: 1px solid ${({ theme }) => theme.grade.border};
	font-weight: 700;
`

export { StyledGrade }
