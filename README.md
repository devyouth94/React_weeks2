<h1 align="center">리액트 2주차</h1>

<p align="center">2022. 07. 29 ~ 2022. 08. 04</p>

<h2 align="center">완성화면</h2>

<img width="1080" alt="스크린샷 2022-08-04 오후 5 20 09" src="https://user-images.githubusercontent.com/97172050/182799663-3d005b7c-70bd-4b8a-9fd8-537acf74f14e.png">

<hr/><br>

<h2 align="center">폴더구조</h2><br>

<p align="center"><img width="161" alt="스크린샷 2022-08-04 오후 5 19 49" src="https://user-images.githubusercontent.com/97172050/182799989-6a5698dd-7175-43ca-8ee5-25ec011c6ab9.png"></p>

- components : 기능별로 컴포넌트 분리
- pages : 투두리스트(메인화면)과 상세화면 두 페이지로 분리
- redux : 모든 리듀서들 관리하는 configStore와 하나의 리듀서를 가진 모듈 파일 todos.js를 관리
- shared : 각 페이지들로 이동하는 router 주소 관리

<hr /><br>

<h2 align="center">파일 간 부모관계</h2><br>

- App.js
  - Router.js
    - DetiailPage.js
    - TodoList.js
      - Layout.js
        - Header.js
        - Form.js
        - List.js
          - Todo.js
- configStore.js
  - todos.js
