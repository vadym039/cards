import React, { useEffect } from 'react'
import { StandartComponentProps } from '../../Hader';
import { ErrorHandlerItemStyled } from './styled';

export enum ErrorMode {
  error = 'error_eH',
  warning = 'warning_eH',
  info = 'info_eH',
  success = 'success_eH'
}

export interface ErrorHandlerItemInterface {
  id: number,
  timeout: number,
  mode: ErrorMode,
  message: string
}

interface StandartErrorHandlerItemInterface extends StandartComponentProps {
  error: ErrorHandlerItemInterface,
  deleteItemOnID: (id: number) => void,
}

function ErrorHandlerItem({ error, deleteItemOnID }: StandartErrorHandlerItemInterface) {
  useEffect(() => {
    setTimeout(() => {
      deleteItemOnID(error.id)
    }, error.timeout)
  }, [deleteItemOnID, error.id, error.timeout])

  return (
    <ErrorHandlerItemStyled className={`flex mt-3 rounded relative`}>
      {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
      <span onClick={(): void => deleteItemOnID(error.id)} onKeyUp={(_) => _} role="button" className="absolute right-2 cursor-pointer">x</span>
      <span className={`${error.mode} flex w-full border border-white p-3 rounded`}>{error.message}</span>
    </ErrorHandlerItemStyled>
  )
}

export default ErrorHandlerItem
