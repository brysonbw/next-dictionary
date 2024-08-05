'use client';
import clsx from 'clsx';
import React from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  id: string;
  type: string;
  value?: string;
  classes?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  id,
  type,
  value,
  placeholder,
  classes,
}: Props) {
  const { register } = useFormContext();
  return (
    <input
      id={id}
      type={type}
      value={value}
      className={clsx(classes)}
      placeholder={placeholder}
      {...register(id)}
    />
  );
}
