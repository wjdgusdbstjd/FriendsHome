// 1. 브라우저가 스크롤 위치를 기억하지 못하게 설정 ('manual'로 변경)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// 2. 강제로 페이지 맨 위(0, 0)로 이동시킴
window.scrollTo(0, 0);


gsap.registerPlugin(ScrollTrigger);

        // ----------------------------------------------------
        // 🚩 1. 페이지 로드 시 헤더 나타나기 애니메이션
        // ----------------------------------------------------
        // CSS에서 opacity: 0, transform: translateY(-100px)로 숨겨둔 요소를 나타나게 합니다.
        gsap.to(".logo, .line, .main-header", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5
        });


        // ----------------------------------------------------
        // 🚩 2. 스크롤 방향 기반 헤더 숨김/표시 로직
        // ----------------------------------------------------

        // 숨겨진 상태 (y: -100, opacity: 0)를 정의하는 트윈을 생성합니다.
        const headerHide = gsap.to(".logo, .line, .main-header", {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
            paused: true // 스크롤 이벤트 발생 시에만 실행되도록 멈춰둡니다.
        });

        // 스크롤 동작을 감지하고 헤더를 제어하는 ScrollTrigger를 생성합니다.
        ScrollTrigger.create({
            start: 100, // 스크롤이 100px 이상 내려갔을 때부터 방향 감지 및 작동 시작

            // 스크롤 위치가 업데이트될 때마다 실행 (스크롤 방향 감지)
            onUpdate: (self) => {
                // self.direction: 1 (스크롤 다운), -1 (스크롤 업)

                // 스크롤 다운 (1): 헤더 숨기기
                if (self.direction === 1) {
                    headerHide.play();
                }
                // 스크롤 업 (-1): 헤더 나타내기
                else {
                    headerHide.reverse();
                }
            },

            // 스크롤이 다시 100px 미만 (페이지 맨 위)으로 돌아왔을 때 실행
            onEnterBack: () => {
                // 페이지 맨 위로 왔을 때 무조건 보이게 합니다.
                headerHide.reverse();
            }
        });



        // ------------------------------------------------------------------
        gsap.from(
    ".main .home-txt",
    {
        y: "50vw",
        opacity: 0,
        duration: 0.7, // 튕기는 느낌을 잘 살리려면 시간을 0.5보다 조금 더 주는 게 자연스러워 (예: 0.8 ~ 1)
        delay: 0.5,
        ease: "back.out(1)", // 핵심! 숫자가 커질수록 더 높이 튕겼다 내려옴 (기본값 1.7)
        stagger: 0.35,
        scrollTrigger: {
            trigger: ".main",
            start: "top bottom",
            toggleActions: "play reverse play reverse",
            markers: false
        }
    }
);



        gsap.from(
            ".section-1 .sof",
            {
                x: "-20vw", //8vw아래에서 시작
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-1 .section-1-txt",
            {
                y: "20vw", //8vw아래에서 시작
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-1",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );



        gsap.from(
            ".section-2-top img",
            {
                x: "-30vw", //8vw아래에서 시작
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2-top",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );



        gsap.from(
            ".section-2-bt-txt",
            {
                y: "30vw", //8vw아래에서 시작
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2-top",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );



        gsap.from(
            ".section-2-bt-txt p",
            {
                // y: "30vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2-top",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".img-1",
            {
                y: "-30vw", //8vw아래에서 시작
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2-top",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".img-2",
            {
                x: "30vw", //8vw아래에서 시작
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2-top",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            // 🚩 첫 번째와 두 번째 이미지를 선택
            ".keyword span:nth-child(1) img",
            {
                x: "-30vw", // 👈 위로 30vw만큼 움직임
                opacity: 0,
                duration: 1,
                ease: "power1.out",
                stagger: 0.35, // 이 두 이미지 사이의 시간차
                scrollTrigger: {
                    trigger: ".keyword span:nth-child(1) img",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );


        gsap.from(
            // 🚩 첫 번째와 두 번째 이미지를 선택
            ".keyword span:nth-child(2) img",
            {
                x: "30vw", // 👈 위로 30vw만큼 움직임
                opacity: 0,
                duration: 1,
                ease: "power1.out",
                stagger: 0.35, // 이 두 이미지 사이의 시간차
                scrollTrigger: {
                    trigger: ".keyword span:nth-child(2) img",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );


        gsap.from(
            // 🚩 첫 번째와 두 번째 이미지를 선택
            ".keyword span:nth-child(3) img",
            {
                x: "-30vw", // 👈 위로 30vw만큼 움직임
                opacity: 0,
                duration: 1,
                ease: "power1.out",
                stagger: 0.35, // 이 두 이미지 사이의 시간차
                scrollTrigger: {
                    trigger: ".keyword span:nth-child(3) img",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );


        gsap.from(
            // 🚩 첫 번째와 두 번째 이미지를 선택
            ".keyword span:nth-child(4) img",
            {
                x: "30vw", // 👈 위로 30vw만큼 움직임
                opacity: 0,
                duration: 1,
                ease: "power1.out",
                stagger: 0.35, // 이 두 이미지 사이의 시간차
                scrollTrigger: {
                    trigger: ".keyword span:nth-child(4) img",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );


        gsap.from(
            ".left img",
            {
                // x: "-20vw", // 다른 애니메이션이 있다면 그대로 유지
                // 🚩 여기가 중요합니다: opacity를 0에서 시작하도록 변경
                opacity: 0,
                duration: 1.3,
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35,
                scrollTrigger: {
                    trigger: ".section-4",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );

        gsap.from(
            ".right img",
            {
                // x: "-20vw", // 다른 애니메이션이 있다면 그대로 유지
                // 🚩 여기가 중요합니다: opacity를 0에서 시작하도록 변경
                opacity: 0,
                duration: 1.3,
                delay: 0.9,
                ease: "power1.out",
                stagger: 0.35,
                scrollTrigger: {
                    trigger: ".section-4",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );

        gsap.from(
            ".section-4 p",
            {
                y: "20vw", // 다른 애니메이션이 있다면 그대로 유지
                // 🚩 여기가 중요합니다: opacity를 0에서 시작하도록 변경
                opacity: 0,
                duration: 1.1,
                delay: 1,
                ease: "power1.out",
                stagger: 0.35,
                scrollTrigger: {
                    trigger: ".section-4",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );


        gsap.from(
            ".section-4 h2",
            {
                // x: "-20vw", // 다른 애니메이션이 있다면 그대로 유지
                // 🚩 여기가 중요합니다: opacity를 0에서 시작하도록 변경
                opacity: 0,
                duration: 1.3,
                delay: 1.4,
                ease: "power1.out",
                stagger: 0.35,
                scrollTrigger: {
                    trigger: ".section-4",
                    start: "top bottom",
                    toggleActions: "play reverse play reverse",
                    markers: false
                }
            }
        );