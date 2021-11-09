import React from 'react';
import { Link } from 'react-router-dom';
import { HaderStyled } from './styled';

export interface StandartComponentProps {
  className?: string,
  title?: string,
  children?: React.ReactNode
}

export default function HaderComponent({ className }: StandartComponentProps) {
  return (
    <HaderStyled className={`${className || ''} w-full sticky bg-cards-yellow-hader`}>
      <div className="flex container m-auto p-4 rounded-md">
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
    </HaderStyled>
  )
}
