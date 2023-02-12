import type { PropsWithChildren } from 'react';

type CardProps = {
  icon: React.ReactNode;
  name: string;
};

export const Card = ({
  icon,
  name,
  children,
}: PropsWithChildren<CardProps>) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-neutral-800 rounded-xl p-4 w-32 h-32">
      {icon}
      <p className="text-neutral-200 text-center text-xs">{name}</p>
    </div>
  );
};
