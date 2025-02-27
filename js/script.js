
//文字上からfadeIn class名：fadeIn
jQuery(function ($) {
  $(window).on('load scroll', function () {

    let box = $('.fadeIn');
    let animated = 'animated';

    box.each(function () {

      let boxOffset = $(this).offset().top;
      let scrollPos = $(window).scrollTop();
      let wh = $(window).height();

      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass(animated);
      }
    });
  });
})

//ハンバーガーメニュー　class名：is-openMenu
$(function () {
  $('.c_hamburger').on('click', () => {
    $('body').toggleClass('is-openMenu');
  })

  $('.l_header__navLink').click(function () {
    $('body').removeClass('is-openMenu');
  });
})



//nav fixed
window.addEventListener('load', fixedCheck);  //ページ全体（画像やスタイルシートを含む）が完全に読み込まれたときに発生
window.addEventListener('resize', fixedCheck);  //画面サイズが変わったときに発生
window.addEventListener('scroll', fixedCheck, { passive: true });  //スクロールしたときに発生
function fixedCheck() {
  let mvBottom = document.getElementById('headerMv');
  let globalN = document.getElementById('headerFixed');
  let fixedJudge = mvBottom.getBoundingClientRect().bottom; //navの上の要素(headerMv)のbottomの値を取得
  if (fixedJudge <= 0) {
    globalN.classList.add('fixed');  //headerMvのクラスにfixedを追加

  } else {
    globalN.classList.remove('fixed');  //headerMvのクラスからfixedを削除
  }
}

//ボタンスクロール
$(document).ready(function () {
  let pagetop = $('.pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100を通過するとスクロールトップが表示される
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);　　//500はスクロール速度
    return false;
  });
});


//タブ切り替え
var tabSwitchTab = 'js-tab_switch--tab'; // 切り替えタブ要素
var tabSwitchBody = 'js-tab_switch--body'; // 切り替えられるコンテンツ要素
var tabSwitchBtn = 'js-tab_switch--button'; // 切り替えタブ要素内ボタン
var classCurrent = 'is-current'; // アクティブを示すclass

if ($('.' + tabSwitchTab).length) {
  // 初期表示時
  $(window).on('load', function () {
    // タブ設定の子要素で一番最初の要素にアクティブを示すclass追加
    $('.' + tabSwitchTab).children(':first-child').addClass(classCurrent);

    // 切り替えタブ要素内のaタグにボタンを示すclass追加
    $('.' + tabSwitchTab).find('a').addClass(tabSwitchBtn);

    // 切り替えられるコンテンツ要素で一番最初の要素以外を非表示
    $('.' + tabSwitchBody).children(':not(:first-child)').hide();
  });

  // タブクリック時
  $(document).on('click', '.' + tabSwitchBtn, function (evt) {
    // アニメーション速度設定
    var animateSpeed = 300;

    // aタグの機能をリセット
    evt.preventDefault();

    // 親要素にアクティブを示すclassがついていなかったら処理をする
    if (!$(this).parent().hasClass(classCurrent)) {

      // クリックした要素のhref内のidを取得
      var tabTargetContent = $(this).attr('href');

      // hrefの中身がアンカーリンクだったら処理をする（hrefの1文字目が#で判定）
      if (tabTargetContent.charAt(0) === '#') {
        // クリックした要素の親要素の同列のコンテンツからアクティブを示すclassを削除
        $(this).parent().siblings().removeClass(classCurrent);

        // クリックした要素の親にアクティブを示すclass追加
        $(this).parent().addClass(classCurrent);

        // 切り替えられるコンテンツ要素を全て非表示
        $(tabTargetContent).siblings().hide();

        // クリック先の要素のみフェードイン
        $(tabTargetContent).css('display', 'grid').hide().fadeIn(animateSpeed);
      }
    }
  });
}


//ローディング後画像読み込み
// document.addEventListener("DOMContentLoaded", function () {
//   const images = document.querySelectorAll('.c_section__item');
//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src;
//         img.onload = () => img.classList.add('loaded');
//         observer.unobserve(img);
//       }
//     });
//   }, 
//   { 
//     rootMargin: "0px 0px 50px 0px" 
//   }); 
//     images.forEach(img => { observer.observe(img); });
// });

//星のエフェクト
document.addEventListener('DOMContentLoaded', function() {
  const starField = document.querySelector('.star-field');

  for (let i = 0; i < 100; i++) {
      let star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.width = star.style.height = `${Math.random() * 10 + 10}px`; // ランダムな大きさを設定
      star.style.animationDuration = `${Math.random() * 5 + 5}s, ${Math.random() * 2 + 1}s`; // 回転の速度をランダムに設定
      starField.appendChild(star);
  }
});

//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1.5,
  loop: true,
  speed: 5000,
  allowTouchMove: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    // スライドの表示枚数：500px以上の場合
    500: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 6,
    }
  }
});

