import React, { ReactElement } from 'react';
import { Github } from '@/components/assets';
import { ExternalLinkIcon } from 'lucide-react';
import LinkButton from '@/app/(introduce)/professional/components/LinkButton';

export type ProfessionalsT =
  | 'profile'
  | 'toy'
  | 'company'
  | 'end'
  | 'study'
  | 'side';

export type TypeProfessional = {
  title: string;
  description: string;
  content: ReactElement;
  side: ReactElement;
  type: ProfessionalsT;
};

export const data: TypeProfessional[] = [
  {
    type: 'profile',
    title: 'FullStack Developer',
    description: '박재연',
    content: (
      <>
        저는 1년 8개월 차 풀스택 개발자입니다. Java로 프로그램 공부를 시작했지만
        스타트업에 들어가서{' '}
        <span className={'font-semibold'}>
          사용자와 직접 맞닿는 화면을 구현하는 일에 매력을 느꼈고 AI시대에
          양쪽다 하는게 메리트가 있다고 생각해 현재는 프론트 개발은 NextJS,
          백엔드 개발은 NestJS + PostgreSQL
        </span>
        을 주력으로 삼고 있습니다. 새로운 기술을 배우고 실무에 빠르게 적용하는
        것을 즐깁니다. 스타트업 환경에서 다양한 프로젝트를 경험하며 문제
        해결력을 키웠습니다.{' '}
        <span className={'font-semibold'}>
          데이터 기반으로 더 나은 사용자 경험을 만드는 데 집중하고 싶습니다.
        </span>
      </>
    ),
    side: (
      <>
        <LinkButton
          link={'https://github.com/KingJaeYeon'}
          label={'깃허브'}
          icon={<Github />}
        />
        {/*<LinkButton*/}
        {/*  link={'https://github.com/KingJaeYeon'}*/}
        {/*  label={'이력서'}*/}
        {/*  icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}*/}
        {/*/>*/}
      </>
    ),
  },
  {
    type: 'side',
    title: 'K-Fate',
    description: 'Side Project',
    content: (
      <>
        <div className={'mb-3 font-medium'}>🗝️ Spring-boot, NextJS</div>
        <p>
          스위트웹 12기 - 생년월일 등 개인정보 입력시 사주결과를 보여주는 서비스
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#k-fate`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2025.12.30 ~ 2026.02.23'}
        align={'right'}
      />
    ),
  },
  {
    type: 'toy',
    title: 'private-app-server',
    description: 'Toy Project',
    content: (
      <>
        <div className={'mb-3 font-medium'}>🗝️ NestJS</div>
        <p>
          이전 private-app을 웹사이트 만들기 위해 다수가 사용할 수 있게 구조
          변경하여 server 작업
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#private-app-server`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2025.11.30 ~'}
        align={'right'}
      />
    ),
  },
  {
    type: 'toy',
    title: '포토폴리오 사이트',
    description: 'Toy Project',
    content: (
      <>
        <div className={'mb-3 font-medium'}>🗝️ NextJS</div>
        <p>
          저를 소개하기 위한 포토폴리오 반응형 웹사이트로, NextJS와 Tailwind,
          Shadcn을 사용해서 개발했습니다.
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#introduce-site`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2025.11.15 - 2025.11.21'}
        align={'right'}
      />
    ),
  },
  {
    type: 'toy',
    title: 'Private App',
    description: 'Toy Project',
    content: (
      <>
        <div className={'mb-3 font-medium'}>{'🗝️ Electron, Reac'}t</div>
        <p>
          개인적으로 사용할 기능들 모아서 개인 앱처럼 쓸려고 만든 Private
          App입니다. 해당 기능이 필요 할때 기능이나 페이지 추가하는 식으로 개발
          진행했고 앞으로도 기능 추가가 있을 예정입니다.
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#private-app`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2025.09.29 - 2025.11.11'}
        align={'right'}
      />
    ),
  },
  {
    type: 'study',
    title: '영어회화 학원(NNY)',
    description: '누나영아카데미어학원',
    content: (
      <p>
        재직 시절, 영어로 외국인과 협업 중인 다른 개발자를 보고 필요성을 크게
        느꼈습니다. 실업급여기간 동안 영어의 기초를 다지기 위해 학원을
        다녔습니다. 다만 기초가 없었기에 시간이 오래 걸렸고 현재는 어떻게 공부해
        나가야하는지 기초지식이 잡힌 상태입니다.
      </p>
    ),
    side: (
      <p className={'lg:text-muted-foreground font-semibold'}>
        2025.03 - 2025.10
      </p>
    ),
  },
  {
    type: 'study',
    title: 'SQLD',
    description: '국가공인 SQL 자격증',
    content: <p>재직시절 SQL 내용 정리하면서 취득</p>,
    side: <p className={'lg:text-muted-foreground font-semibold'}>2025.04</p>,
  },
  {
    type: 'company',
    title: '대규모 게임 플랫폼',
    description: '주식회사 바닐라코드',
    content: (
      <>
        <div className={'mb-3 font-medium'}>
          {'🗝️ NextJS, NestJS, PostgreSQL'}
        </div>
        <p className={'whitespace-pre-wrap'}>
          다수의 해외 게임 벤더 API를 통합하여 운영되는 대규모 트랜잭션 기반
          플랫폼
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#h-game`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2024.09 - 2025.01'}
        align={'right'}
      />
    ),
  },
  {
    type: 'toy',
    title: 'CoinPickle 가이드라인',
    description: 'Toy Project',
    content: (
      <>
        <div className={'mb-3 font-medium'}>{'🗝️ NextJS'}</div>
        <p className={'whitespace-pre-wrap'}>
          {[
            'Coinpickle 리뉴얼 당시 개인적으로 가이드라인 연습 & 기존 보유중인 SVG파일 정리를 위해 만든 프로젝트입니다.',
            '현재는 개인적으로 SVG파일 필요할 때 셔칭용으로 사용 중 입니다.',
          ].join('\n')}
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#coinpickle-guideline`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2024.08'}
        align={'right'}
      />
    ),
  },
  {
    type: 'company',
    title: 'CoinPickle 리뉴얼',
    description: '주식회사 바닐라코드',
    content: (
      <>
        <div className={'mb-3 font-medium'}>{'🗝️ NextJS'}</div>
        <span className={'font-semibold'}>
          암호화폐 투자자를 위한 정보 제공 플랫폼
        </span>
        <p className={'whitespace-pre-wrap'}>
          기존 사이트의 UI 개선과 기능부족 및 모바일 미지원 문제 해결을 위해
          NextJS 기반 반응형 웹으로 전면 UI리뉴얼 및 신규기능 추가 개발 했었고
          프론트엔드 위주로 담당하여 작업하였습니다.
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#coinpickle-v2`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2024.07 - 2024.09'}
        align={'right'}
      />
    ),
  },
  {
    type: 'company',
    title: 'Excoinz admin 리뉴얼',
    description: '주식회사 바닐라코드',
    content: (
      <>
        <div className={'mb-3 font-medium'}>{'🗝️ NextJS'}</div>
        <p className={'whitespace-pre-wrap'}>
          기존 Excoinz 어드민 페이지의 구매 템플릿 기반 구조로 인해 신규 기능
          개발 및 유지보수 비효율적이라 Next.js 기반으로 어드민 페이지 전체
          리뉴얼
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#excoinz-admin`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2024.06'}
        align={'right'}
      />
    ),
  },
  {
    type: 'company',
    title: 'Excoinz IG 솔루션',
    description: '주식회사 바닐라코드',
    content: (
      <>
        <div className={'mb-3 font-medium'}>{'🗝️ NextJS'}</div>
        <p className={'whitespace-pre-wrap'}>
          Excoinz 결제 서비스를 사용하는 게임사·에이전트용 어드민 프론트 개발
        </p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#excoinz-ig`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2024.05'}
        align={'right'}
      />
    ),
  },
  {
    type: 'study',
    title: '[코드캠프] 고농축 백엔드 코스',
    description: '인프런',
    content: (
      <>
        <div className={'mb-3 font-medium'}>
          {'🗝️ Express, NestJS, Docker, Graphql ...'}
        </div>
        <span className={'font-semibold'}>백엔드 강의 107시간</span>
      </>
    ),
    side: (
      <LinkButton
        link={`https://www.inflearn.com/certificate/498580-329996-12043790`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2024.04 - 2024.09'}
        align={'right'}
      />
    ),
  },
  {
    type: 'company',
    title: 'The Solve',
    description: '주식회사 바닐라코드',
    content: (
      <>
        <div className={'mb-3 font-medium'}>
          {'🗝️ NextJS, NestJS, PorstgreSQL'}
        </div>
        <span className={'font-semibold'}>
          사기방지 및 사건등록 시 관련 전문가를 매칭시켜주는 플랫폼
        </span>
        <p className={'whitespace-pre-wrap'}>NextJS AppRouter 첫도입</p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#thesolve`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2024.01 - 2024.04'}
        align={'right'}
      />
    ),
  },
  {
    type: 'study',
    title: 'The Ultimate React Course 2023',
    description: '유데미',
    content: (
      <>
        <div className={'mb-3 font-medium'}>{'🗝️ React'}</div>
        <span className={'font-semibold'}>React 강의 67시간</span>
      </>
    ),
    side: (
      <LinkButton
        link={`https://www.udemy.com/certificate/UC-a26de7c8-2ceb-4fb8-a4a8-86b5373950cd/`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2023.08 - 2023.10.13'}
        align={'right'}
      />
    ),
  },
  {
    type: 'company',
    title: 'Excoinz',
    description: '주식회사 바닐라코드',
    content: (
      <>
        <div className={'mb-3 font-medium'}>{'🗝️ React, NestJS'}</div>
        <span className={'font-semibold'}>
          암호화폐 P2P(Peer-to-Peer) 플랫폼
        </span>
        <p className={'whitespace-pre-wrap'}>React 시작</p>
      </>
    ),
    side: (
      <LinkButton
        link={`/projects#excoinz`}
        icon={<ExternalLinkIcon className={'h-4 w-4 text-red-600'} />}
        label={'2023.08 - 2024.05'}
        align={'right'}
      />
    ),
  },
];
