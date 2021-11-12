import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { userExistCreator } from '../../../store/ErrorHandlerReducer';
import { HaderStyled } from './styled';
import { publicHaderPath, HaderPathInterface } from './HeaderPath/index';

export interface StandartComponentProps {
  className?: string,
  title?: string,
  children?: React.ReactNode
}

export default function HaderComponent({ className }: StandartComponentProps) {
  const dispatch = useAppDispatch()
  const linkPath: Array<HaderPathInterface> = publicHaderPath;

  function addErrorHandler() {
    dispatch(userExistCreator());
  }
  return (
    <HaderStyled className={`${className || ''} w-full sticky bg-cards-yellow-hader`}>
      <div className="flex gap-3 justify-center container m-auto p-4 rounded-md select-none bg-cards-white-hader shadow-haderMenu">
        {
          linkPath.map((val: HaderPathInterface) => (
            <Link
              key={val.link}
              to={val.link}
            >
              {val.name}
            </Link>
          ))
        }
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
        <span onClick={addErrorHandler} onKeyUp={(_ => _)} role="button">Try</span>
      </div >
    </HaderStyled >
  )
}
