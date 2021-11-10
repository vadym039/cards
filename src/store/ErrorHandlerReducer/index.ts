import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ErrorHandlerItemInterface, ErrorMode } from '../../components/UI/Error/ErrorHandlerItem'

const timeout: number = 8000;

interface stackInterface {
  message: string,
  mode: ErrorMode,
  timeout: number,
}

interface objectStackIterface {
  [key: string]: stackInterface
}

const ERRORS_STACK: objectStackIterface = {
  USER_EXIST: {
    message: 'User already exists',
    mode: ErrorMode.error,
    timeout: timeout
  },
  USER_NOT_FOUND: {
    message: 'User not found',
    mode: ErrorMode.info,
    timeout: timeout
  },
  NO_EMAIL_AND_PASSWORD: {
    message: 'Email and password are required',
    mode: ErrorMode.error,
    timeout: timeout
  },
  WRONG_EMAIL_PASSWORD: {
    message: 'Wrong email or Password',
    mode: ErrorMode.info,
    timeout: timeout
  },
  NOT_AUTHORIZED: {
    message: 'User not authorized',
    mode: ErrorMode.info,
    timeout: timeout
  },
  INVALID_TOKEN: {
    message: 'Token is invalid',
    mode: ErrorMode.info,
    timeout: timeout
  },
  UNKNOWN_ERROR: {
    message: 'Something went wrong',
    mode: ErrorMode.error,
    timeout: timeout
  },
  NO_TODOS_FINDED: {
    message: 'Pass todos array, please',
    mode: ErrorMode.info,
    timeout: timeout
  },
  REFRESH_TOKEN_EXPIRED: {
    message: 'Refresh token expired',
    mode: ErrorMode.error,
    timeout: timeout
  }
}

export interface initialStateInterface extends stackInterface {
  errors: Array<ErrorHandlerItemInterface>,
  count: number
}

const initialStateSlice: initialStateInterface = {
  errors: [],
  message: '',
  mode: ErrorMode.info,
  timeout: timeout,
  count: 0
}

const generateIdTimeout = (timeout?: number): Pick<ErrorHandlerItemInterface, "id" | "timeout"> => {
  return {
    id: Date.now(),
    timeout: timeout || initialStateSlice.timeout
  }
}

const errorHandlerSlice = createSlice({
  name: 'errorHandler',
  initialState: initialStateSlice,
  reducers: {
    deleteErrorIDCreator(state: initialStateInterface, action: PayloadAction<number>) {
      state.errors = state.errors.filter((val) => val.id !== action.payload)
    },
    setMessagesCreator(state: initialStateInterface, action: PayloadAction<stackInterface | string>) {
      const payload = action.payload
      if (!payload) {
        throw Error('Error Handler reducer: field "message" must be required')
      }
      let message;
      let mode = ErrorMode.info;
      let timeout = initialStateSlice.timeout

      if (typeof payload === 'string') {
        message = payload
      } else {
        message = payload.message
        if (Object.keys(ErrorMode).includes(payload?.mode)) {
          mode = payload.mode
        }
        timeout = payload.timeout ?? initialStateSlice.timeout
      }
      if (!message) {
        throw Error('Error Handler reducer: field "message" must be required')
      }
      state.errors.push({ timeout, message, mode, id: Date.now() })
    },
    userExistCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['USER_EXIST'], ...generateIdTimeout(action?.payload) })
    },
    userNotFoundCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['USER_NOT_FOUND'], ...generateIdTimeout(action.payload) })
    },
    noEmailAndPasswordCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['NO_EMAIL_AND_PASSWORD'], ...generateIdTimeout(action.payload) })
    },
    wrongEmailPasswordCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['WRONG_EMAIL_PASSWORD'], ...generateIdTimeout(action.payload) })
    },
    notAuthorizedCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['NOT_AUTHORIZED'], ...generateIdTimeout(action.payload) })
    },
    invalidTokenCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['INVALID_TOKEN'], ...generateIdTimeout(action.payload) })
    },
    unknownErrorCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['UNKNOWN_ERROR'], ...generateIdTimeout(action.payload) })
    },
    noTodosFindedCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['NO_TODOS_FINDED'], ...generateIdTimeout(action.payload) })
    },
    refreshTokenExpiredCreator(state: initialStateInterface, action: PayloadAction<number | undefined>) {
      state.errors.push({ ...ERRORS_STACK['REFRESH_TOKEN_EXPIRED'], ...generateIdTimeout(action.payload) })
    }
  }
})

export default errorHandlerSlice;
export const { deleteErrorIDCreator, setMessagesCreator, userExistCreator, userNotFoundCreator, noEmailAndPasswordCreator, wrongEmailPasswordCreator, notAuthorizedCreator, invalidTokenCreator, unknownErrorCreator, noTodosFindedCreator, refreshTokenExpiredCreator } = errorHandlerSlice.actions;
