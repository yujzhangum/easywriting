import { createGlobalStyle } from 'styled-components';

export const GlobalStyleicon = createGlobalStyle`
@font-face {
    font-family: 'iconfont';  /* project id 3112490 */
    src: url('');
    src: url('?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_3112490_61mumt4xsrq.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_3112490_61mumt4xsrq.woff') format('woff'),
    url('//at.alicdn.com/t/font_3112490_61mumt4xsrq.ttf') format('truetype'),
    url('#iconfont') format('svg');
  }

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`