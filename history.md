## Development History

21/05/07 - 김민수

- TODO : 폰트 및 사이즈, 화면 크기(전체 or 일부) 등
  - main.html : 카테고리 아이콘, search input 태그 활성화 시 돋보기 아이콘 안보이도록
  - signin.html : 입력값 다루기
  - signup.html : 0% 진행
  - personalInfo.html : 0% 진행
- 진행 : Only layout
  - main.html : 디자인, signin page 연결 - 80%
  - signin.html : 디자인, main, signup page 연결 - 90%
  - Screenshot : /image/screenshot_main.png, screenshot_signin.png

21/05/08 - 김민수

- TODO :
  - main.html : 카테고리 링크 연결
  - sign.html : 입력값 다루기
  - signup.html : 입력값 다루기
  - personalInfo.html : 디자인 변경
- 진행 :
  - signup.html : 디자인, main page 연결
  - personalInfo.html : signup page에 기초한 디자인
  - Screenshot :
    - /image/screenshot_signup.png, screenshot_Info.png
    - /image/screenshot_main.png 변경

21/05/08 - 한규민

- 변경사항 :
  - main.html : 메인버튼 클릭 범위 수정 (Width 전체 -> 텍스트 범위에만 맞게)
  - signin.html : ditto
  - signup.html : ditto
  - personalinfo.html : ditto

21/05/12 - 김지수

- TODO :
  - category.html : 카테고리별 페이지 타이틀 및 목록 변경
  - moreinfo.html : DB 연결
  - mypage.html : 회원정보 DB 연결
  - image :
    - category_img : DB 연결
    - profile_img : DB 연결
- 진행 :
  - category.html : 디자인
  - moreinfo.html : 디자인
  - mypage.html : 디자인
  - image :
    - category_img
    - profile_img
- 변경사항 :
  - main.html : 카테고리 버튼 클릭 시 category.html 연결

21/05/13 - 한규민

- TODO :
  - 페이지별 DB설계 및 실제 연동
  - Express 사용으로 인한 초반 아키텍처의 변경 필요 (express-generator에 맞게 구조 변환 필요)
- 진행 :
  - Express 사용 및 express-generator로 프레임워크 제공 structure 사용
  - SKKU MEAL의 몇가지 페이지를 Express structure에 연동해보고 결과 확인
  - DB(Mysql) 연동 시도 및 성공 (카카오톡방에 사진 첨부)

21/05/14 - 한규민

- 변경사항 :
  - npm install express --save 로 express 설치 후 ./Mypage에서 npm start로 실행 가능
  - 주소는 localhost:7777
  - Express Structure로 변경
  - Description :
    - ./views : .html 폴더
    - ./public : css,js,image 폴더
    - ./routes : client의 요청에 응답하여 page나 정보를 바꿔주는 폴더
    - db.js : DB내용이라 .gitignore에 추가했음. 카카오톡으로 요청 가능

21/05/17 - 한규민

- 변경사항 :
  - SignUp에서 입력된 데이터들 가공 및 client-server 응답 체크 (rest api 이용)
  - DB에서 중복된 아이디 체크 후 register 가능.
  - SignUp.ejs에서 중복 pwd체크 하는 기능 제거. (비동기처리 새로 해야해서)
  - client에서 validation check, server에서는 db와 값 체크 후 response
  - 학습 내용 https://blog.naver.com/rbals0445 에 기록.

21/05/18 - 한규민

- 변경사항 :
  - Register,login 기능 구현
  - Update 기능 구현
  - page 이동시에 사용자 정보 담아서 이동하는것 구현
  - personalInfo.ejs : password input type="password"로 변경, disabled 속성 추가
- TODO :
  - moreinfo 구현 필요
  - 좋아요,싫어요,찜목록 구현
  - 사진 저장기능 구현
  - 메인에서 검색기능 구현
  - 카테고리 img 클릭 시 이미지 나오게 구현 필요

21/05/19 - 김민수

- 변경사항 :
  - data/Restaurant.txt 추가 - 음식점 조사 목록
- TODO :
  - 음식점 카테고리별 번호 부여
  - 추가적인 음식점 목록 및 사진
  - 음식점 목록 데이터베이스에 추가하기

21/05/21 - 김민수

- 변경사항 :
  - README.txt 수정 - screenshot, demo video, how to use, history 메뉴 만듦
  - data/Restaurant.txt - 음식점 추가
- TODO :
  - screenshot 만들기, demo video 제작 후 link, how to use

21/05/23 - 한규민

- 변경사항 :
  - 로그인 후 Mypage에서 찜목록 불러오기 구현
  - moreinfo 구현
  - 사진 저장기능 구현
  - 메인에서 검색기능 구현
  - 카테고리 img 클릭 시 페이지 이동 구현 (category.ejs)
  - 여러 category 같은 페이지로 모두 재사용함(추가페이지 필요 X)
  - 좋아요, 싫어요 기능
- TODO :
  - DB 값 정리 및 img 저장 필요
