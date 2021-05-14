# Open Source Software Practice - Team4

## Topic :

|            |       김지수        |       한규민        |       김민수       |
| ---------- | :-----------------: | :-----------------: | :----------------: |
| Student ID |     2017310683      |     2018315526      |     2020312552     |
| Github ID  |        7zxu         |      rbals0445      |      miNsu01       |
| E-mail     | jisu7935@g.skku.edu | rbals0445@naver.com | kms78900@naver.com |

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
  
