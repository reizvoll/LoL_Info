# 👾 LoL_Info 👾

![Main](https://github.com/user-attachments/assets/7d9dbfac-22fc-4407-9bdf-f0094b9296f7)

## 📝 프로젝트 개요
**LoL_Info**은 Riot Games의 API 및 Data Dragon을 활용하여 <br>
게임 **리그오브레전드** 의 다양한 데이터를 조회할 수 있는 **웹 어플리케이션**입니다.

## 📖 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [배포 URL](#배포-url)
3. [기술 스택](#기술-스택)
4. [프로젝트 구조](#프로젝트-구조)
5. [페이지 설명](#페이지-설명)
   - [1. Home](#1-home)
   - [2. 챔피언 리스트](#2-챔피언-리스트)
   - [3. 아이템 리스트](#3-아이템-리스트)
   - [4. 로테이션 챔피언 리스트](#4-로테이션-챔피언-리스트)
6. [프로젝트 체크리스트](#프로젝트-체크리스트)
   - [✅ 필수 구현 사항](#✅-필수-구현-사항)
   - [🚀 도전 기능](#🚀-도전-기능)
7. [Trouble Shooting](#trouble-shooting)
   - [파일 이름 대소문자 충돌 문제](#파일-이름-대소문자-충돌-문제)

---

## 💻 배포 URL
[LoL_Info](https://lo-l-info-pi.vercel.app/)

---

## 🛠️ 기술 스택
<img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/Next_Theme-gray?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS-%2338B?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/Tanstack_Query-ff4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Tanstack_Query_Devtools-DB7093?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Type_Script-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Vercel-121118?style=for-the-badge&logo=vercel&logoColor=white">

---

## 📂 프로젝트 구조

```plaintext
src/
│
├── app/                      # Next.js의 App Router 기능을 사용하는 디렉토리
│   ├── api/rotation/         # API 라우트 디렉토리 (데이터 제공용 API 파일들이 들어감)
│   │   └── route.ts          # Rotation 관련 데이터를 반환하는 API 라우트 파일
│   │
│   ├── champions/            # 'champions' 페이지와 하위 라우트
│   │   ├── [id]/             # 동적 라우팅을 위한 챔피언 ID 라우트
│   │   │   └── page.tsx      # 개별 챔피언 상세 페이지
│   │   └── page.tsx          # 챔피언 메인 페이지 (전체 목록 또는 주요 뷰)
│   │
│   ├── items/                # 'items' 페이지와 하위 라우트
│   │   ├── [id]/             # 동적 라우팅을 위한 아이템 ID 라우트
│   │   │   └── page.tsx      # 개별 아이템 상세 페이지
│   │   └── page.tsx          # 아이템 메인 페이지 (전체 목록 또는 주요 뷰)
│   │
│   └── rotation/             # 'rotation' 관련 페이지 라우트
│       ├── page.tsx          # 챔피언 로테이션 메인 페이지
│       ├── globalError.tsx   # 에러 핸들링을 위한 글로벌 에러 페이지
│       ├── layout.tsx        # 로테이션 페이지 레이아웃 설정
│       └── page.tsx          # 추가 페이지 (중복으로 보이지만 로직이 다를 수 있음)
│
├── components/               # 재사용 가능한 컴포넌트 모음
│   ├── champ_rotation/       # 챔피언 로테이션과 관련된 UI 컴포넌트들
│   ├── champion/             # 챔피언 관련 공통 컴포넌트들
│   ├── home/                 # 홈 페이지에서 사용하는 컴포넌트
│   ├── layout/               # 레이아웃 관련 컴포넌트들 (Header, Footer 등)
│   ├── providers/            # React-Query Provider
│
├── styles/                   # 전역 CSS, 스타일링 파일
├── types/                    # 타입 정의 (champion / championRotation / item)
├── utils/                    # serverApi 및 문자 제거 정규식 컴포넌트
└── .env.local                # 환경 변수 설정 파일 (로컬 환경에서만 사용)
```

---

## 📜 페이지 설명



### 1. Home

![Home](https://github.com/user-attachments/assets/58040e67-e4b8-42bc-af96-7edd51b3ad2f)

	- 메인 비주얼
	    League of Legends를 상징하는 고화질 배경 이미지와 타이틀이 돋보임.

	- 네비게이션 바
	    HOME, 챔피언 목록, 아이템 목록, 챔피언 로테이션, Dark mode 버튼 제공.

	- 주요 기능 버튼
	    챔피언 목록 보기, 아이템 목록 보기, 이번 주 로테이션 챔피언 확인 가능.

	- 푸터
	    Riot Games와의 관계 및 저작권 안내 문구 포함.

<br>

### 2. 챔피언 리스트

![ChampList](https://github.com/user-attachments/assets/644d6dcc-476f-4893-adf7-48778a7dd273)

	- 쳄피언 목록 페이지
	    그리드 형식의 카드 형태로 나열 (반응형 적용)
        각 카드에는 챔피언 이미지, 이름, 별칭(?) 이 표시됨

	- 상세 페이지
	    챔피언 스킨 이미지를 배경으로 표시, 세부 내용의 경우 조건부 렌더링을 적용하여 깔끔한 UI 구현에 집중
        세부 내용 - 스토리, 역할군, 패시브 스킬정보, 아군/적군을 위한 Tip, 스킨

<br>

### 3. 아이템 리스트

![ItemList](https://github.com/user-attachments/assets/ef04c4be-9390-4498-bfbb-ba18084a8467)

	- 아이템 목록 페이지
	    그리드 형식의 카드 형태로 나열 (반응형 적용)
        각 카드에는 아이템 이미지, 이름, 가격 이 표시됨
        `<Image>` 컴포넌트 사용 -> 이미지 최적화

	- 상세 페이지
	    목록 리스트와 동일하게 카드 형식 적용
        세부 내용(설명 및 가격정보)의 경우 조건부 렌더링 적용


<br>

### 4. 로테이션 챔피언 리스트

![RotationChamp](https://github.com/user-attachments/assets/dba999f0-9611-4e30-bc82-ab66e3bd01e4)

	- 로테이션 챔피언 목록 페이지
        동적 데이터 처리를 위한 `Tanstack-Query` 사용
	    그리드 형식의 카드 형태로 나열 (반응형 적용), 각 카드에는 챔피언 스킨이미지, 이름이 표시됨
        초보를 위한 무료 챔피언 리스트 추가 (타입 적용)
        `<Image>` 컴포넌트 사용 -> 이미지 최적화

	- 상세 페이지
	    `Link`를 활용하여 챔피언 목록의 상세페이지로 이동하도록 라우팅 설정

<br>

---

# 🖌️ 프로젝트 체크리스트

### ✅ 필수 구현 사항

### 1. 데이터 Fetching
- [x] `types/` 디렉토리 내 필요한 타입 정의
- [x] Server Actions로 데이터 fetching (`/champions`, `/items`, `/rotation`)
- [x] `fetch` 활용한 외부 API 호출 및 에러 처리 구현

### 2. Tanstack Query
- [x] 클라이언트 컴포넌트에 `Tanstack Query` (`useQuery`, `useMutation`) 사용
- [x] Query Key 및 옵션 설정
- [x] 로딩 및 에러 상태 (`isPending`, `isError`, `data`) 처리

### 3. 각 페이지 구현 및 렌더링 방식 적용
- [x] 챔피언 목록 페이지 (`/champions`): ISR 방식
- [x] 챔피언 상세 페이지 (`/champions/[id]`): 동적 렌더링, 동적 메타데이터 생성
- [x] 챔피언 로테이션 페이지 (`/rotation`): CSR 방식
- [x] 아이템 목록 페이지 (`/items`): SSG 방식

### 4. 레이아웃 및 네비게이션 구성
- [x] 글로벌 레이아웃 설정
- [x] 네비게이션 메뉴 추가 및 페이지 간 이동 구현

<br>

---

### 🚀 도전 기능

### 1. 로딩 및 에러 핸들링 고도화
- [x] `Suspense`, `loading.tsx`로 로딩 상태 관리
- [x] 스트리밍 서버 사이드 렌더링(SSR) 적용
- [x] 의도적인 API 호출 지연으로 로딩 시간 시뮬레이션
- [x] error.tsx 파일 생성 및 사용자 친화적 에러 처리
- [x] `global-error.tsx` 파일로 전역 에러 관리
- [x] 에러 발생 시 리셋/재시도 기능 구현 (`useRouter`, `startTransition` 활용)

### 2. 성능 최적화
- [x] `<Image>` 컴포넌트로 이미지 최적화
- [] 동적 import로 코드 스플리팅
- [x] Lazy Loading 적용

### 3. 반응형 디자인 및 UI 개선
- [x] Tailwind CSS로 반응형 디자인 구현
- [x] 모바일 친화적 인터페이스 제공 (헤더 제외)

### 4. 유틸리티 타입 적극 활용
- [] TypeScript 유틸리티 타입(`Partial`, `Pick`, `Omit`) 활용

### 5. 다크 모드 기능 구현
- [x] `Header` 컴포넌트 생성 및 다크 모드 토글 추가 -> `Next-Theme`활용
- [x] `layout.tsx`에서 `Header` 포함 및 다크 모드 지원

<br>

---
## 📌 Trouble Shooting


### **파일 이름 대소문자 충돌 문제**

### 문제 상황

`.ts`와 `.tsx` 혼용 사용으로 인해 파일 이름의 대소문자 구분을 잘못하는 경우가 생겨
<br> 이를 해결하고자 파일명의 대소문자를 변경하던 도중 충돌 문제가 발생했다.
<br>
<br>
특히 macOS 파일 시스템의 경우, 대소문자를 구분하지 않는 기본 설정으로 인해 아래와 같은 문제가 나타났다.
<br>
- 파일 이름이 Champion.ts에서 champion.ts로 변경되지 않음
- import 경로 충돌로 인해 컴파일 에러 발생

### 원인 분석
1. Mac Os 파일 시스템의 한계 - `champion.ts`와 `Champion.ts`를 Mac OS 파일 시스템에서 구분을 하지 못함
2. import 경로 불일치 - 경로를 `@/types/champion`에서 `@/types/Champion`으로 변경되어 컴파일러에 혼란 발생
3. Git의 파일 이름 추적 문제 - Git은 대소문자 변경만으로는 파일 이름 변경을 인식하지 못함

### 해결 방법

1. `core.ignorecase` 설정

    기존에 사용하던 `core.ignorecase` 설정을 통해 대소문자 구분을 시도했었으나,
	<br> 메모장에서 복사한 명령어의 **하이픈(-)** 이 **긴 대시(—)** 로 변환되어 에러가 발생했다.
    <br> 해결할 당시에는 원인 파악이 되지 않아 해당 방법 대신 해결방법 2를 시도하였다.


2. Git 명령어로 강제 반영

    Git에서 대소문자 변경 사항을 정확히 반영하도록 `git mv` 명령어 사용
    
    ```
    # 기존 -> 수정될 이름 순으로 작성
    git mv src/types/Champion.ts src/types/champion.ts
    git commit -m "fix: 파일 이름 대소문자 통일"
    ```

3. `git mv` 명령어로 대체

    최종적으로, `git mv` 명령어를 사용하여 문제를 해결
    <br>(대소문자 구분을 하지 않는 파일 시스템에서도 Git이 파일 이름 변경을 감지할 수 있도록 보장하기 때문)

### 결과
- 빌드 및 개발 환경에서 더 이상 **대소문자 충돌 문제**가 발생하지 않음. 🎉
- `import` 경로도 일관되게 수정되어 코드 관리가 더욱 편리해짐.

### 추가 팁

1. git mv 명령어 사용하기
- 대소문자 구분이 필요한 경우, 파일 이름 변경 시 항상 git mv 명령어를 사용할 것.
2. 복사한 명령어 확인하기
- 메모장에서 복사한 명령어는 **특수 문자(긴 대시 등)**가 포함되지 않았는지 확인해야 함.
3. core.ignorecase 한계
- macOS처럼 대소문자를 구분하지 않는 파일 시스템에서는 core.ignorecase를 false로 설정해도 파일 이름 변경이 감지되지 않을 수 있음