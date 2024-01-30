/**
 * @since 2024-01-29
 * prettierrc 적용방법: http://wiki.duzon.com:8080/pages/viewpage.action?pageId=221120991
 *
 * @history
 * 2024-01-29: [강우성] 최초 작성
 */

module.exports = {
  // '' or ""
  singleQuote: true,
  //코드 마지막에 세미콜른이 있게 formatting
  semi: true,
  //탭의 사용을 금하고 스페이스바 사용으로 대체하게 formatting
  useTabs: false,
  //들여쓰기 너비는 2칸
  tabWidth: 2,
  /**
   * 기본값은 버전 v2.0.0에서 none-> es5로 바뀌었다.
   * es5로 설정하면 유효한 곳(객체,배열)에서의 Trailing commas는 허용하지만 다른곳에서는 허용하지 않는다. 타입스크립트의 함수 파라미터에는 허용되지 않는다.
   * none으로 설정하면 trailing commas다.
   * all로 설정하면 가능한 모든곳에 콤마를 찍는다. 예를들어 함수의 파라미터.
   */
  trailingComma: 'all',
  //줄바꿈 전용( \n), Linux, macOS 및 git repos 내부에서 일반적임
  endOfLine: 'lf',
  //'가독성을 위해 80자를 초과하는 문자를 사용하지 않는 것이 좋습니다.'라는 지침에 따라 80으로 지정. >> 코드 한줄이 maximum 80칸
  printWidth: 80,
  //화살표 함수가 하나의 매개변수를 받을 때 괄호 생략
  arrowParens: 'never',
  //객체 리터럴의 대괄호 사이에 공백을 인쇄
  bracketSpacing: true,
  //여러 줄의 HTML(HTML, JSX, Vue, Angular) 요소를 다음 줄에 단독으로 두는 대신 마지막 줄 끝에 넣음 (자체 닫는 요소에는 적용되지 않음).
  bracketSameLine: true,
  //HTML, JSX 등에서 attribute를 한 줄에 하나씩 작성
  singleAttributePerLine: false,
  //일반 텍스트를 포맷팅할 때 줄 바꿈을 적용하는 방식을 지정(줄 바꿈 적용하지 않음)
  proseWrap: 'never',
  //필요한 경우 개체 속성 주위에만 따옴표를 추가
  quoteProps: 'as-needed',
};

/**
 * End Of Line 특이사항
 * Prettier 설정에서 개행 문자에 관한 옵션을 지정해줄 때 crlf, lf를 지정할 수 있다.
 * 이는 타자기를 사용하던 때부터 있던 기능으로부터 생긴 것이다.
 * cr은 'Carrige Return', lf는 'Line Feed'를 의미한다.
 * 타자기를 사용할 때, 한 줄의 끝까지 입력하면 다음 줄의 처음부터 입력하기 위해, 인쇄 헤드를 문자열의 시작 위치로 옮기고 (Carrige Return) 문서의 아래줄로 이동 (Line Feed) 시킨다.
 * Windwos 등의 운영체제에서는 이러한 기능의 흔적으로 개행 문자를 입력하면 기본값으로 crlf를 수행해 \r\n이 입력되며, Linux 계열 운영체제나 현재의 MacOS에서는 \n가 입력된다.
 * 각각의 바이트 코드가 다르므로 서로 다른 운영체제 간의 호환성을 해칠 수 있어 End of Line 옵션을 통해 개행 문자를 통일해주는 것이다.
 *
 * warning: in the working copy of 'index.html' lf will be replaced by crlf the next time git touches it
 *
 * Windows에서 "endOfLine": "lf"을 지정해주고 git add를 수행하면 위의 경고를 볼 수 있다.
 * Windows의 Git에서는 기본적으로 개행 문자를 crlf로 저장하는 것을 수행하기 때문이다. 이러한 경고를 방지하기 위해 Git의 core.autocrlf 설정을 사용하여 줄바꿈 문자열을 관리할 수 있다.
 *
 * for Windows, DOS: git config --global core.autocrlf true
 * for Linux, MacOS : git config --global core.autocrlf input
 *
 * check-in, check-out할 때 파일을 어떻게 처리할지 설정하는 변수로 true로 설정하면 Git은 저장소에 커밋할 때 줄바꿈 문자열을 변경하지 않는다.
 */
