// body 태그를 가져옴 (참고용)
let bodyTag = document.body;
console.log(bodyTag);

// 축제 정보를 담은 객체 선언
let hongikFestival = {
    name: "이번 축제 주목해야 할 최고의 라인업", // 제목
    date: {
        date1: "1일차 : 2025년 05월 14일 수요일",
        date2: "2일차 : 2025년 05월 15일 목요일",
        date3: "3일차 : 2025년 05월 16일 금요일",
    },
    location: "서울특별시 마포구 홍익대학교", // 장소
    lineup: {
        day1: "KiiiKiii",
        day2: "MADEIN",
        day3: "AESPA",
    }
}

// section 태그를 문서에서 찾아옴 (축제 내용을 여기에 출력할 예정)
let sectionTag = document.querySelector("section");

// h2 태그 생성 → 제목 넣을 용도
let h2Tag = document.createElement("h2");
h2Tag.innerText = hongikFestival.name; // 텍스트는 '축제 라인업'
sectionTag.appendChild(h2Tag); // section 태그에 h2 붙이기

// 1일차: 라인업 텍스트 생성
let pTag = document.createElement("p");
pTag.innerText = hongikFestival.date.date1 + "\n\n" + hongikFestival.lineup.day1;
sectionTag.appendChild(pTag); // 1일차 + KiiiKiii 출력

// 1일차 이미지 추가
let imgTag = document.createElement("img");
imgTag.src = "https://i.namu.wiki/i/r6avZqfUTDZknQKZgQKxaS04_Q7MoAHMgNtNezGBKcVRUoAPdLe5cukc4USfE-WDlrV2i_oRdd7_iWTDer3eTmpJdi5aCNneSOixDFufyzHSJ9rvys5lRz1oorgLHbMtayjrABMJU7tt39rJNsq90w.webp";
imgTag.alt = "KiiiKiii";
imgTag.width = 500;
imgTag.height = 333;
sectionTag.appendChild(imgTag); // section에 이미지 삽입

// 2일차: 라인업 텍스트 생성
pTag = document.createElement("p");
pTag.innerText = hongikFestival.date.date2 + "\n\n" + hongikFestival.lineup.day2;
sectionTag.appendChild(pTag); // 2일차 + MADEIN 출력

// 2일차 이미지 추가
imgTag = document.createElement("img");
imgTag.src = "https://i.namu.wiki/i/sY9ga5l_c1TQgV3jtqVJsDVZoHtXXhW4_2AuS5d1NFb2n1IDhzWCz8VA37hXRO2lZNngrZTzzjm4BZzkX6wLqidpYSzWk35zy8oB0GsEh-U844wN8VCKmUoCr8VCgtivFpPlkEHBxwC888UkKzvbrw.webp";
imgTag.alt = "MADEIN";
imgTag.width = 500;
imgTag.height = 333;
sectionTag.appendChild(imgTag); // section에 이미지 삽입

// 3일차: 라인업 텍스트 생성
pTag = document.createElement("p");
pTag.innerText = hongikFestival.date.date3 + "\n\n" + hongikFestival.lineup.day3;
sectionTag.appendChild(pTag); // 3일차 + AESPA 출력

// 3일차 이미지 추가
imgTag = document.createElement("img");
imgTag.src = "https://i.namu.wiki/i/TZc_o30Rjf4uJer-10rm-HqA0SxXWAPEICcUt-L7ZVBDPgLcW37VHNYtQDi4JneZKTJLTb94Hc1ZfsaJSLzdR55azo6YisFSUqdx2DDpX5K17qZ8gabbit1Z6GvDHo9UmwYuNz-RalLNPm9lz38Liw.webp";
imgTag.alt = "AESPA";
imgTag.width = 500;
imgTag.height = 333;
sectionTag.appendChild(imgTag); // section에 이미지 삽입
