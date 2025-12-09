gsap.registerPlugin(ScrollTrigger);


        // ----------------------------------------------------
        // 1. 페이지 로드 시 헤더 나타나기
        // ----------------------------------------------------
        gsap.to(".logo, .line, .main-header, .line-1", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5
        });


        // ----------------------------------------------------
        // 2. 헤더 숨기기/보이기 트윈 (충돌 방지 버전)
        // ----------------------------------------------------
        const headerHide = gsap.to(".logo, .line, .main-header, .line-1", {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
            paused: true,
            immediateRender: false
        });


        // ----------------------------------------------------
        // 3. 헤더 텍스트/라인 색상 변경용 ScrollTrigger
        // ----------------------------------------------------
        const ALL_HEADER_CONTENT = "header a, .line, .line-1";
        const MENU_LINES = ".left-group ul .line, .middle-group ul .line, .right-group ul .line, .line-1";

        ScrollTrigger.create({
            start: 100,

            onEnter: () => {
                gsap.to(ALL_HEADER_CONTENT, {
                    color: "#B650F0",
                    borderTopColor: "#B650F0",
                    borderColor: "#B650F0",
                    duration: 0.3
                });

                gsap.to(MENU_LINES, {
                    backgroundColor: "#B650F0",
                    borderColor: "#B650F0",
                    duration: 0.3
                });
            },

            onLeaveBack: () => {
                gsap.to(ALL_HEADER_CONTENT, {
                    color: "#ffffff",
                    borderTopColor: "#ffffff",
                    borderColor: "#ffffff",
                    duration: 0.3
                });

                gsap.to(MENU_LINES, {
                    backgroundColor: "#ffffff",
                    borderColor: "#ffffff",
                    duration: 0.3
                });
            }
        });


        // ----------------------------------------------------
        // 4. 헤더 숨김 / 표시용 ScrollTrigger (전용으로 분리)
        // ----------------------------------------------------
        ScrollTrigger.create({
            start: 0,
            end: "max",

            onUpdate: (self) => {
                // 스크롤 다운 → 헤더 숨기기
                if (self.direction === 1) {
                    if (!headerHide.isActive()) headerHide.play();
                }
                // 스크롤 업 → 헤더 나타내기
                else {
                    if (!headerHide.isActive()) headerHide.reverse();
                }
            },

            onEnterBack: () => {
                if (!headerHide.isActive()) headerHide.reverse();
            }
        });




        gsap.from(
            ".main img:nth-child(1)",
            {
                x: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".main img:nth-child(2)",
            {
                y: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".main img:nth-child(3)",
            {
                y: "-10vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".main img:nth-child(1)",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );







        // gsap.from(
        //     ".section-1 h1",
        //     {
        //         x: "-20vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.4,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-1",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );


        // gsap.from(
        //     ".section-1 p",
        //     {
        //         y: "20vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.4,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-1",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );

        // gsap.from(
        //     ".section-1-img .chef-h3",
        //     {
        //         x: "20vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.4,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-1-img",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );

        // gsap.from(
        //     ".section-1-img .hover-wrapper-chef",
        //     {
        //         x: "20vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.4,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-1-img",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );


        // gsap.from(
        //     ".section-1-img .perfect-h3",
        //     {
        //         x: "20vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.8,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-1-img",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );

        // gsap.from(
        //     ".section-1-img .hover-wrapper",
        //     {
        //         x: "20vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.8,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-1-img",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );

        // gsap.from(
        //     ".section-1-img .monica-2",
        //     {
        //         y: "-20vw",
        //         opacity: 0, //투명인 상태에서 시작
        //         duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
        //         delay: 0.8,
        //         ease: "power1.out",
        //         stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
        //         scrollTrigger: {
        //             trigger: ".section-1-img",   // → trigger 를 h2 로
        //             start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
        //             toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
        //             markers: false //페이지에 스크롤 위치 마커
        //         }
        //     }
        // );


        gsap.from(
            ".section-2 .section-2-bottom",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-2-bottom",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-4 h2",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-4 p",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-4",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-5 h1",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-5",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-5 .but-not img",
            {
                y: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.3,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".but-not",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-5 .but-not h3",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".but-not",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );

        gsap.from(
            ".section-5 .but-not p",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.6,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".but-not",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-6 p",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-6",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-7 h1",
            {
                y: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-7 h2",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.4,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-7-bottom img",
            {
                x: "-20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7-bottom",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


        gsap.from(
            ".section-7-bottom p",
            {
                x: "20vw",
                opacity: 0, //투명인 상태에서 시작
                duration: 1, //얼마동안 이 모션을 진행할건지 - 숫자가 커질수록 느려짐
                delay: 0.5,
                ease: "power1.out",
                stagger: 0.35, //각 애미메이션 사이에 0.15초의 지연을 둠
                scrollTrigger: {
                    trigger: ".section-7-bottom",   // → trigger 를 h2 로
                    start: "top bottom",                // h2 의 top 이 뷰포트 bottom 에 닿을 때
                    toggleActions: "play reverse play reverse", // 나타날때마다 모션 진행
                    markers: false //페이지에 스크롤 위치 마커
                }
            }
        );


