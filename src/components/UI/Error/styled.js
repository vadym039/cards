import styled from "styled-components";


export const ErrorHandlerStyled = styled.div`
/** CSS Transition Animations*/
  .error_handler__item_transition-enter {
    opacity: 0.2;
    transform: translateX(350px);
  }
  .error_handler__item_transition-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: all 500ms ease-in;
  }
  .error_handler__item_transition-exit {
    opacity: 0.5;
  }
  .error_handler__item_transition-exit-active {
    opacity: 0;
    transform: translateX(350px);
    transition: all 500ms ease-out;
  }
`;
