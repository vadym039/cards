import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ErrorHandlerStyled } from './styled';
import ErrorHandlerItem, { ErrorHandlerItemInterface, ErrorMode } from './ErrorHandlerItem/index';

function ErrorHandler() {
  // const errors = useSelector(state => state.error.errors)
  const [errors, setErrors] = useState<Array<ErrorHandlerItemInterface>>([{
    id: 1,
    timeout: 40000,
    message: 'test',
    mode: ErrorMode.warning
  }, {
    id: 2,
    timeout: 40000,
    message: 'test2',
    mode: ErrorMode.error
  }, {
    id: 3,
    timeout: 40000,
    message: 'test2',
    mode: ErrorMode.info
  }, {
    id: 4,
    timeout: 40000,
    message: 'test2',
    mode: ErrorMode.success
  }]);
  const transition = 500;
  // const dispatch = useDispatch()

  function deleteItemOnID(id: number): void {
    // dispatch(deleteErrorIDCreator(id))
    setErrors(prev => {
      return prev.filter(val => val.id !== id)
    })
    id
  }

  function addErrorHandler() {
    setErrors(prev => {
      return [...prev || [], {
        id: Number(prev?.length - 1 + 1),
        timeout: 40000,
        message: 'test2',
        mode: ErrorMode.warning
      }]
    })
  }

  return (
    <>
      <button onClick={addErrorHandler}>addErrorHandler</button>
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
