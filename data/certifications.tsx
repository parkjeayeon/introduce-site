import React, { ReactElement } from 'react';
import IconSql from '@/public/assets/sql.svg';
import Udemy from '@/public/assets/udemy.svg';
import Nodejs from '@/public/assets/nodejs.svg';
import IconJava from '@/public/assets/java.svg';
import IconTest from '@/public/assets/test.svg';
import IconClaude from '@/public/assets/claude.svg';

export type TypeCertification = {
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
  isModal: boolean;
};
export const data: TypeCertification[] = [
  {
    icon: <IconClaude className={'h-[30px] w-[30px]'} />,
    title: '클로드 코드 완벽 마스터: AI 개발 워크플로우 기초부터 실전까지',
    description: '인프런',
    link: 'https://www.inflearn.com/certificate/498580-339317-15040101',
    isModal: false,
  },
  {
    icon: <IconSql className={'h-[30px] w-[30px]'} />,
    title: 'SQLD',
    description: '국가공인 SQL 전문가',
    link: `/sqld.jpg`,
    isModal: true,
  },
  {
    icon: <Udemy className={'h-[30px] w-[30px]'} />,
    title: 'The Ultimate React Course 2023',
    description: '유데미(udemy)    ',
    link: 'https://www.udemy.com/certificate/UC-a26de7c8-2ceb-4fb8-a4a8-86b5373950cd/',
    isModal: false,
  },
  {
    icon: <Nodejs className={'h-[30px] w-[30px]'} />,
    title: '[코드캠프] 고농축 백엔드 코스',
    description: '인프런',
    link: 'https://www.inflearn.com/certificate/498580-329996-12043790',
    isModal: false,
  },
  {
    icon: <IconJava className={'h-[30px] w-[30px] text-red-600'} />,
    title: '자바(JAVA)기반 공공데이터 융합 개발자 양성과정A15',
    description: 'KH정보교육원 강남지원',
    link: '/java.png',
    isModal: true,
  },
  {
    icon: <IconTest className={'h-[30px] w-[30px]'} />,
    title: 'ISTQB CTFL ',
    description: 'KSTQB',
    link: '/istqb.png',
    isModal: true,
  },
];
