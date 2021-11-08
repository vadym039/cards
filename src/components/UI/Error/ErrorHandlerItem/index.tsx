import React from 'react'
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
  deleteItemOnID: (id: string) => void,
}

function ErrorHandlerItem({ error, deleteItemOnID }: StandartErrorHandlerItemInterface) {
  deleteItemOnID
  return (
    <ErrorHandlerItemStyled>
      {error.message}
    </ErrorHandlerItemStyled>
  )
}

export default ErrorHandlerItem
