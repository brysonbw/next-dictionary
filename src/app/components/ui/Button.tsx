'use client';
import clsx from 'clsx';

type Props = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  classes?: string;
  text: string;
};

export default function Button({ type = 'button', classes, text }: Props) {
  return (
    <button type={type} className={clsx(classes)}>
      {text}
    </button>
  );
}
