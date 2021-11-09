import styled from "styled-components";


export const ErrorHandlerStyled = styled.div.attrs(
  props => ({
    transition: props.transition || 500
  })
)`
/** CSS Transition Animations*/
  .error_handler__item_transition-enter {
    opacity: 0.2;
    transform: translateX(350px);
  }
  .error_handler__item_transition-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: all  ${props => props.transition}ms ease-in;
  }
  .error_handler__item_transition-exit {
    opacity: 0.5;
  }
  .error_handler__item_transition-exit-active {
    opacity: 0;
    transform: translateX(350px);
    transition: all  ${props => props.transition}ms ease-out;
  }
  .error_handler__item_transition-enter-done {
    background: dark !important;
  }
`;
