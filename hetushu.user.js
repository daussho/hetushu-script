// ==UserScript==
// @name hetushu font
// @namespace http://daussho.com/
// @version 0.4
// @description  Hetushu font
// @match https://m.hetushu.com/book/*
// @copyright 2024+, daussho.com
// ==/UserScript==

(async () => {
  if (document.title == "Just a moment...") return;

  await new Promise((r) => setTimeout(r, 1000));

  document.querySelector("#content").style =
    "font-size: 22px; line-height: 1.5;";
  document.querySelector(".cmask").remove();
  document.querySelector("#message").remove();
})();
