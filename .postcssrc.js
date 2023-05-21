// .으로 시작하는건 숨김파일을 의미한다.
// import, export 키워드를 사용하는방식을 ESM(ecma script module)

// nodejs에서는 esm을 지원안하고 commonJS를 사용

// js를 브라우저에서 동작하는게 잇고 nodejs에서 동작하는게있는데
// 가져오기 내보내기는 esm이라는 브라우저에서 사용하는방식
// postcssrc.js는 번들러를 통해서 변환하는 방식이기때문에 브라우저에서 동작하는 방식이 아니고 nodejs에서 동작하는 방식을 사용해야한다.

// import autoprefixer from 'autoprefixer'
const autoprefixer = require("autoprefixer");
// css 처리

// export {
//   plugins: [
//     autoprefixer
//   ]
// }

// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

module.exports = {
	plugins: [require("autoprefixer")],
};
