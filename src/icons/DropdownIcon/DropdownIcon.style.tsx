import styled from 'styled-components'

const StyledDropdownIcon = styled.svg<{ selectIsOpen: boolean }>`
	position: absolute;
	right: 14px;
	margin-top: 10px;
	margin-bottom: 10px;
	transform: ${({ selectIsOpen }: any) => (selectIsOpen ? 'rotate(180deg)' : 'rotate(0)')};
	transition: transform 0.2s;
`

export { StyledDropdownIcon }
