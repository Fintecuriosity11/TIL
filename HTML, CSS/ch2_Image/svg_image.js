<!--SVG 이미지는 Scalable Vector Graphics(스케일러블 벡터 그래픽)을 의미  -->
<!--scalable이란 '확대가 가능하다', '자연스럽게 크기 조절이 가능하다'는 의미 함포  -->


<!--이미지를 확대하거나 축소해도 깨끗한 상태 그대로 유지되는 이미지를 벡터 이미지(vector image) -->

<!--SVG 이미지는 크기를 조정해도 이미지가 깨지지 않고 깨끗이 유지되기 때문에 로고나 아이콘을 많이 사용-->
<!-최근에 데이터 시각화에서 차트나 다이어그램, 지도 등을 구현하는데 있어 용이-->

<!--복잡한 데이터를 웹에 표현해주는 d3.js나 Raphael.js 같은 자바스크립트 라이브러리에서 chart나 graph를 표현하는 방식이 SVG이미지-->

<!--브라우저가 특정 기능을 지원하는지 테스트 해주는 툴이 Modernizr(SVG기능 체크, 간혹 종종 지원안돼는 브라우저 있음)-->



<head>
  <meta charset="uft-8>
  <title>Insert SVG </title>
  <script src="modenizer-custom.js"></script>
</head>

<body>
  <h1>  Insert SVG Image </h1> 
  <img src="images/muffin.svg">            
  <script>                                  // Javascript 소스는 주로 </head> or </body> 태그 직전에 사용
    if (modernizr.svg) {                    // Javascript를 이용해 웹 브라우저에서 SVG기능 지원하는지 여부에 따라 분기문 작성
        // 지원할 경우
       } else {
        // 지원하지 않을 경우
       }
  </script>
</body>
