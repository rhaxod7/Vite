import './style.css';
// 이미지 경로를 public 폴더에 넣고, 아래 배열에 파일명을 추가하세요.
const images = [
  'https://c.files.bbci.co.uk/DCE1/production/_104454565_mary-mcgowan_caught-in-the-act_00001294.jpg',
  'https://grandpark.seoul.go.kr/asset/images/sub/Zoo/2_3_3_Endangered_img04.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7ETDWeKGLqZDChUF0NhdIqbE2qkps602e2fCEgZuLrIsZ9gdqXUGktbF7WsR0kk-L90&usqp=CAU',
  'https://grandpark.seoul.go.kr/asset/images/sub/Zoo/2_3_3_Endangered_img06.png',
  'https://cdn.epnnews.com/news/photo/202008/5216_6301_1640.jpg',
];

const app = document.getElementById('app');

if (app) {
  app.innerHTML = `
    <div class="gallery-title">이미지 갤러리</div>
    <div class="gallery">
      ${images
        .map(
          (src, idx) => `
            <img src="${src}" alt="Gallery Image ${idx + 1}" loading="lazy" />
          `
        )
        .join('')}
    </div>
  `;
}
