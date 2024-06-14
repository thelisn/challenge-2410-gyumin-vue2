# CHALLENGE

## 기술 스택

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)

<br>

## 프로젝트 설치

Node.js 20.14.0 버전 이상에서 실행할 것을 권장합니다.

챌린지 프로젝트를 Vue2로 구현하였습니다.

앱 실행을 위해 3000번 포트(Server)와 5173번 포트(Client)를 사용합니다.

(이미 3000번 혹은 5173번 포트가 사용 중이라면 제대로 실행되지 않을 수 있습니다.)

1. 프로젝트 클론

   ```bash
   git clone https://github.com/thelisn/challenge-2410-gyumin.git
   ```

2. 디렉토리 변경

   ```bash
   cd challenge-2410-gyumin
   ```

3. 패키지 설치

   ```bash
   npm install
   ```

4. 패키지 빌드

   ```bash
   npm run build
   ```

5. 프로젝트 실행

   ```bash
   npm run dev
   ```

6. [http://localhost:5173](http://localhost:5173) 접속

<br>

## 프로젝트 설명

- 포스트 확인, 작성, 검색(제목 및 날짜)이 가능한 피드를 구현
- Mocking DB 사용하여 데이터를 호출 및 생성 (json-server 라이브러리 사용)
- 활용 라이브러리
  - CSS: SCSS
  - 상태 관리: Vuex
