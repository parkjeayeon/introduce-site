'use server';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LinkOutBtn } from '@/app/(introduce)/projects/components/linkOutBtn';
import ImgContentRenderer from '@/app/(introduce)/projects/components/ImgContentRenderer';
import { data, TypeProject } from '@/data/projects';
import ScrollToHash from '@/app/(introduce)/projects/components/ScrollToHash';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/getMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('/projects');
}

export default async function ProjectPage() {
  return (
    <div className={'flex h-full flex-1 justify-center pt-[20px] md:px-10'}>
      <ScrollToHash />
      <div className={'flex w-[1200px] flex-col gap-[50px]'}>
        {data.map((item: TypeProject, index: number) => {
          const isLast = index === data.length - 1;
          return (
            <div
              key={index}
              id={item.id}
              className={cn(
                'border-border relative flex scroll-mt-[100px] items-center gap-10',
                !isLast && 'border-b-2 pb-5',
              )}
            >
              <div className={'flex flex-6 flex-col gap-4'}>
                <div className={'flex items-center gap-2 md:gap-4'}>
                  <h3 className={'text-2xl font-semibold md:text-3xl'}>
                    {item.title}
                  </h3>
                  <div>
                    <Badge
                      className={cn(
                        'rounded-sm border-0 bg-zinc-700 text-xs font-semibold text-white hover:bg-zinc-600',
                        item.type === 'company' &&
                          'bg-red-500 hover:bg-red-600',
                        item.type === 'toy' &&
                          'bg-secondary hover:bg-secondary-100',
                        item.type === 'side' && 'bg-blue-600 hover:bg-blue-500',
                      )}
                    >
                      {item.type === 'company'
                        ? 'Company Project'
                        : item.type === 'toy'
                          ? 'Toy Project'
                          : 'Side Project'}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-3 border-y border-zinc-800 py-2">
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">타입</p>
                    <p className="text-xs font-medium text-white">
                      {item.meta.device}
                    </p>
                  </div>
                  {item.meta.others.length >= 1 && (
                    <div>
                      <p className="mb-1 text-xs text-zinc-500">기타</p>
                      {item.meta.others.map((item, index) => (
                        <p
                          key={index}
                          className="text-xs font-medium text-white"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">프레임워크</p>
                    {item.meta.frameworks.map((item, index) => (
                      <p key={index} className="text-xs font-medium text-white">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">개발인원</p>
                    <p className="text-xs font-medium text-white">
                      {item.meta.developers}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">기여도</p>
                    <p className="text-xs font-medium text-white">
                      {item.meta.contribution}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-zinc-500">개발기간</p>
                  <p className="text-sm text-zinc-400">{item.duration}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs text-zinc-500">대표 라이브러리</p>
                  <div className={'flex flex-wrap items-center gap-2'}>
                    {item.libraries.map((item, index) => (
                      <Badge
                        key={index}
                        className="border-0 bg-zinc-800 text-xs text-zinc-300 hover:bg-zinc-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                {item.introduction !== '' && (
                  <div className={'flex flex-col'}>
                    <p className={'text-sm font-bold md:text-base'}>소개</p>
                    <div
                      className={
                        'text-muted-foreground text-0.5xs mt-1 h-fit resize-none whitespace-pre-wrap outline-none'
                      }
                    >
                      {item.introduction}
                    </div>
                  </div>
                )}
                {item.functions.length >= 1 && (
                  <div className={'flex flex-col'}>
                    <p className={'text-sm font-bold md:text-base'}>
                      주요 기능
                    </p>
                    <ul className="text-muted-foreground text-0.5xs ml-6 list-disc [&>li]:mt-1">
                      {item.functions.map((item, index) => (
                        <li key={index} className={'whitespace-pre-wrap'}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.role.length >= 1 && (
                  <div className={'flex flex-col'}>
                    <p className={'text-sm font-bold md:text-base'}>
                      담당 역할
                    </p>
                    <ul className="text-muted-foreground text-0.5xs ml-6 list-disc [&>li]:mt-1">
                      {item.role.map((item, index) => (
                        <li className={'whitespace-pre-wrap'} key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className={'flex flex-col gap-1 lg:hidden'}>
                  <p className={'text-sm font-bold md:text-base'}>스크린샷</p>
                  <div className={'flex items-center gap-2 overflow-auto'}>
                    <ImgContentRenderer
                      images={item.images}
                      isFrist={index === 0}
                    />
                  </div>
                </div>
                <div className={'mb-2 flex w-full gap-2'}>
                  {item.links.map((item, index) => (
                    <LinkOutBtn key={index} {...item} />
                  ))}
                </div>
              </div>
              <div
                className={
                  'hidden h-full flex-4 overflow-auto lg:relative lg:flex'
                }
              >
                <div className={'absolute top-0'}>
                  <div className={'inline-flex w-full flex-wrap gap-4'}>
                    <ImgContentRenderer
                      images={item.images}
                      isFrist={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={'pb-[50px]'} />
      </div>
    </div>
  );
}
