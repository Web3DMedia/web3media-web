import cn from "classnames"
import { RiLoader3Line } from "react-icons/ri"
import styled from "styled-components"

interface ISpinner {
  color?: string
  size?: number
  className?: string
}

const StyledSpan = styled.span`
  .spinner {
    animation: spin 1s infinite forwards running 0s;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

export const Spinner = ({
  size = 20,
  color = "currentColor",
  className = ""
}: ISpinner) => (
  <StyledSpan>
    <RiLoader3Line
      className={cn("spinner", className)}
      size={size}
      style={{ color }}
    />
  </StyledSpan>
)
