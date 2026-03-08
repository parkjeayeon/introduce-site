import React from 'react';
import { ProfessionalsT, TypeProfessional } from '@/data/professionals';
import { cn } from '@/lib/utils';
import { ContentIcon } from '@/app/(introduce)/professional/components/ContentIcon';

export function ContentTitle({ label }: { label: string }) {
  return (
    <div
      style={{ animationIterationCount: 1 }}
      className={
        'fade-in-0 max-w-fit animate-[fadeSlideIn_0.8s_ease_forwards] py-10 text-4xl font-semibold opacity-0 transition-all delay-200 duration-800'
      }
    >
      {label}
    </div>
  );
}

export function ContentCard({
  type,
  title,
  description,
  content,
  side,
  align,
}: TypeProfessional & { align: 'left' | 'right' }) {
  let className = 'bg-blue-200';

  switch (type) {
    case 'toy':
      className = 'bg-red-200';
      break;
    case 'company':
      className = 'bg-blue-200';
      break;
    case 'study':
      className = 'bg-purple-200';
      break;
    case 'end':
      className = 'bg-green-200';
      break;
    case 'side':
      className = 'bg-yellow-200';
      break;
  }

  return (
    <div className="relative flex w-full flex-col items-end lg:items-start">
      <ContentIcon type={type} />
      <div
        className={cn(
          'relative w-[calc(100%-52px)] animate-[cdBounceInverse2_.6s] rounded-sm p-[1.5rem] hover:scale-[1.02] lg:ml-0 lg:w-[44%]',
          align === 'right' && 'lg:animate-[cdBounceInverse2_.6s] lg:self-end',
          align === 'left' && 'lg:animate-[cdBounce2_.6s]',
          className,
        )}
      >
        <span
          className={cn(
            'absolute top-[20px] left-[-6px] h-3 w-3 rotate-45',
            align === 'left' && 'lg:left-[calc(100%-6px)]',
            className,
          )}
        />
        <div className={'flex flex-col text-black'}>
          <CardTitle title={title} type={type} />{' '}
          <p className={'mb-2 text-sm font-semibold'}>{description}</p>
          <div className={'text-sm'}>{content}</div>
        </div>
        <div
          className={cn(
            'lg:text-muted-foreground top-[6px] mt-3 flex w-[44%] gap-2 text-black lg:absolute lg:mt-0',
            align === 'left' && 'left-[128%]',
            align === 'right' && 'right-[128%] lg:justify-end',
          )}
        >
          {side}
        </div>
      </div>
    </div>
  );
}

function CardTitle({ type, title }: { type: ProfessionalsT; title: string }) {
  let emoji = '🔥';

  switch (type) {
    case 'toy':
      emoji = '🚀';
      break;
    case 'company':
      emoji = '🔥';
      break;
    case 'study':
      emoji = '📖';
      break;
    case 'profile':
      emoji = '🖥️';
      break;
    case 'side':
      emoji = '🐒';
      break;
  }

  return (
    <h3 className={'m-0 text-lg font-semibold'}>
      {title}
      <span className={'ml-1'}>{emoji}</span>
    </h3>
  );
}
