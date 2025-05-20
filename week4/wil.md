## <프론트엔드 스터디 4주차 WIL>

### 이번주 스터디 목표
- API를 이용해 서버에서 데이터를 받아오고, JavaScript로 화면에 동적으로 출력해보기
- fetch의 기본 구조 익히기
- 검색엔진 최적화(SEO) 개념 알아보기

### 오늘의 키워드
- API (Application Programming Interface)
- fetch / 비동기 통신
- 이벤트 리스너
- SEO (Search Engine Optimization)

**1.서버와 통신하기**
- 클라이언트는 서버한테 데이터를 요청한다.
- 서버는 그 요청을 받아드리면 데이터를 보낸다.
- 이런 데이터를 주고 받는 통로 역할을 하는 것이 API이다.
   
- 프론트앤드는 사용자가 직접 상호작용하는 부분을 다루는 개발영역이다.
- 백앤드는 서버가 동작하는 부분을 다루는 개발 영역이다.  

- id는 하나의 태그를 의미한다.
- const는 많이 쓰는데 아마 수정을 불가하게 해야 탈이 없어서 그런것 같다.

**2. 데이터를 화면에 뿌리기**
- 이번 스터디에서는 `JSONPlaceholder`라는 임시 API를 이용해 `todo` 데이터를 받아와서 화면에 출력했다.
- JavaScript의 `fetch()`를 이용해 데이터를 비동기적으로 요청하고 `.then()`을 이용해 응답을 처리하는 기본 흐름을 익혔다.
- getElementById()는 ()안의 요소를 가져 온다.
-  // API 요청 (→ 현재 URL 오타 있음: users1 → users)  
    fetch('http://jsonplaceholder.typicode.com/users1/1/todos')  
        .then((response) => response.json()) //   응답을 JSON으로 변환
        .then((json) => render(json));       // 변환된 데이터를 render 함수에 전달

**3. SEO (Search Engine Optimization)**
- 구글 검색 엔진 최적화를 위한 전략
- 웹 접근성이란 모두가 사용할 수 있는 웹을 만들자라는 목적을 지님

### 느낀점
- 확실히 학부에서 배우는 것과 별개로 fetch같은 개념은 실제 작동하기 위해 필요한 매소드를 잘 배워야 겠다...
- 학부 수준에서는 너무 이론적이다...

### 다음 스터디 목표
- 오늘 못한 TODOLIST 마무리
- if 문을 통한 TODO 완료 여부 분별하기
- API에 대한 심화 공부 & 비동기 처
- 지금 만들어진 페이지를 배포