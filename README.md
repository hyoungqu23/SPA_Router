# SPA_Router

React, History API 사용하여 SPA Router 기능 구현하기

## 데모 페이지

#### [데모 페이지 보러가기]()

## 블로그

#### [블로그 게시글 보러가기](https://hyoungmin.notion.site/SPA-Client-Side-Routing-d65f65e12a714ec4b67b7790fa2db53a)

- 블로그 게시글에 과제 요구 사항과 해결 방법, 트러블 슈팅까지 작성되어 있습니다.

## 기간

2022.10.06 - 2022.10.07

## 기술 스택

- React.js
- TypeScript
- Context API
- History API
- vite

## 디렉토리 구조

```
📦
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
├─ src
│  ├─ App.tsx
│  ├─ Router
│  │  ├─ BrowserRouter.tsx
│  │  ├─ Link.tsx
│  │  ├─ Router.tsx
│  │  └─ RouterContext.ts
│  ├─ hooks
│  │  └─ useRouter.ts
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ About
│  │  │  └─ About.tsx
│  │  └─ Root
│  │     └─ Root.tsx
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock
```

## 설치 및 사용 방법

### 프로젝트 설치

```sh
git clone https://github.com/hyoungqu23/SPA_Router.git
```

### 패키지 설치

```sh
yarn install
```

### 프로젝트 실행

```sh
yarn dev
```
