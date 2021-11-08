import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ErrorHandlerStyled } from './styled';
import ErrorHandlerItem, { ErrorHandlerItemInterface, ErrorMode } from './ErrorHandlerItem/index';

function ErrorHandler() {
  // const errors = useSelector(state => state.error.errors)
  const errors: Array<ErrorHandlerItemInterface> = [{
    id: 1,
    timeout: 400,
    message: 'test',
    mode: ErrorMode.warning
  }, {
    id: 2,
    timeout: 400,
    message: 'test2',
    mode: ErrorMode.error
  },{
    id: 3,
    timeout: 400,
    message: 'test2',
    mode: ErrorMode.error
  }]
  // const dispatch = useDispatch()

  function deleteItemOnID(id: any) {
    // dispatch(deleteErrorIDCreator(id))

    id
  }
  return (
    <>
      {!!errors?.length &&
        <ErrorHandlerStyled className="fixed w-80 right-0 mt-6 p-3 flex-col">
          <TransitionGroup
            className="error_handler__list"
            component={null}
          >
            {
              errors.map(val => {
                return (
                  <CSSTransition
                    timeout={1500}
                    classNames="error_handler__item_transition "
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
