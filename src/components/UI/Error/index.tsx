import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ErrorHandlerStyled } from './styled';
import ErrorHandlerItem from './ErrorHandlerItem/index';
import { useAppDispatch, useAppSelector } from '../../../store'
import { deleteErrorIDCreator } from '../../../store/ErrorHandlerReducer';

function ErrorHandler() {
  const errors = useAppSelector(state => state.error.errors);
  const transition = 500;
  const dispatch = useAppDispatch()

  function deleteItemOnID(id: number): void {
    dispatch(deleteErrorIDCreator(id))
  }

  return (
    <>
      {!!errors?.length &&
        <ErrorHandlerStyled className="fixed w-80 right-0 mt-6 p-3 flex-col max-h-80vh overflow-y-auto overflow-x-hidden" transition={transition} >
          <TransitionGroup
            className="error_handler__list"
            component={null}
          >
            {
              errors.map(val => {
                return (
                  <CSSTransition
                    timeout={transition}
                    classNames="error_handler__item_transition"
                    key={`${val.id}_errorItem`}
                  >
                    <ErrorHandlerItem
                      error={val}
                      deleteItemOnID={deleteItemOnID}
                    />
                  </CSSTransition>
                )
              })
            }

          </TransitionGroup>
        </ErrorHandlerStyled>}
    </>
  )
}

export default ErrorHandler
