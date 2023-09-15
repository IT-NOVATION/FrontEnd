# 🛠️ 사용기술

- HTML/CSS, Typescript
- npm, webpack
- React 18
- Styled-components, Tanstack Query, React Hook Form, Recoil, React Router Dom, Framer-motion, Axios
- AWS- S3, Cloudfront, Lambda
- Figma, Discord, Notion

# 🖥️ 개발 및 학습 내용 & 트러블슈팅

## 1. 서버 상태 다루기

- TanStack Query를 적극활용하여 서버 상태와 클라리언트 상태 분리
- cacheTime, staleTime을 데이터마다 알맞게 적절히 조절하여 관리 ([자세히](https://velog.io/@stakbucks/react-query-%EC%BA%90%EC%8B%B1-%EA%B8%B0%EB%8A%A5-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0))

## 2. UX 개선을 위한 노력

- 무거운 이미지 로딩 경험을 개선하기 위해, suspense, skeleton ui 활용 ([자세히](https://velog.io/@stakbucks/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A1%9C%EB%94%A9-%EA%B2%BD%ED%97%98-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0-2-feat.-suspense))
- 부드러운 버튼 동작을 위해 Optimistic Update 도입 ([자세히](https://velog.io/@stakbucks/Optimistic-Update-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-tanstack-query))

## 3. WYSIWYG 에디터 도입

- 블로그 형식의 글 작성을 위한 React Quill 에디터 사용 ([자세히](https://velog.io/@stakbucks/React-Quill-WYSIWYG-%EC%97%90%EB%94%94%ED%84%B0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0))
- 에디터에 이미지 업로드시 base64 형식으로 저장되는 문제를 S3와 Cloudfront를 이용해 개선 ([자세히](https://velog.io/@stakbucks/React-Quill-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-2))

## 4. 애니메이션

- Framer-motion의 Animate Presence를 활용해 여러가지 슬라이더 애니메이션 구현

## 5. 로그인 및 인증

- JWT 방식의 인증 활용
- 백엔드와 협업하여 카카오, 네이버, 구글 소셜로그인 구현
- accessToken, refreshToken을 브라우저의 localStorage에 저장하고, 요청시 헤더에 담아 전송하는 방식으로 통신
- TanStack Query의 queryClient를 활용해 로그인상태 전역관리

## 6. 배포

- Github actions를 통해 main브랜치에 푸쉬되면 workflow를 통해 자동으로 빌드되어 S3에 업로드 되도록 구현
- Lambda를 이용해 Cloudfront 캐시 자동 무효화

## 7. 기타

- 별점 매기는 기능 외부 라이브러리 없이 직접 구현 ([자세히](https://velog.io/@stakbucks/%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0))
- 로그인/회원가입을 네비게이션바의 버튼 클릭시 어느 페이지에서든 가능하게 해야하는 요구사항이 있었는데, Recoil을 활용해 모달을 전역상태 관리 ([자세히](https://velog.io/@stakbucks/Recoil%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EC%A0%84%EC%97%AD-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EB%AA%A8%EB%8B%AC-%EB%A7%8C%EB%93%A4%EA%B8%B01))
- Craco를 활용하여 webpack 설정 수정하여 import문 가독성 개선
- Tanstack query의 useInfiniteQueries 를 사용해 무한 스크롤 구현
