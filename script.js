let theme = 1;
let main_bg = document.querySelector("body");
let calc = document.querySelector("h1");
let ul = document.querySelector("ul");
let p = document.querySelector("p");
let toggle_bg = document.querySelector("#toggle");
let input = document.querySelector("input");
let key_bg = document.querySelector(".grid");
let btn = document.querySelectorAll(".btn");
let t = document.querySelector("#theme");
let dl = document.querySelector(".del");
let rs = document.querySelector(".reset");
let eq = document.querySelector(".equal");
function button(a) {
  let pre = input.value;
  input.value = pre + a;
}

function del() {
  let len = input.value.length;
  let a = input.value.slice(0, len - 1);
  input.value = a;
}

function sum() {
  let first = input.value;
  let plus = first.indexOf("+");
  let minus = first.indexOf("-");
  let multiply = first.indexOf("x");
  let divide = first.indexOf("/");
  if (plus != -1) {
    let arr = first.split("+");
    let sum = 0;
    arr.forEach((element) => {
      let n = parseInt(element);
      sum = sum + n;
    });
    console.log(sum);
    if (sum === NaN) {
      input.value = "syntax error";
    } else {
      input.value = sum;
    }
  }
  if (minus != -1) {
    let arr = first.split("-");
    let m = 0;
    arr.forEach((element) => {
      let n = parseInt(element);
      m = n - m;
    });

    if (m == NaN) {
      input.value = "syntax error";
    } else {
      input.value = m;
    }
  }
  if (multiply != -1) {
    let arr = first.split("x");
    let ml = 1;
    arr.forEach((element) => {
      let n = parseInt(element);
      ml = n * ml;
    });
    if (ml == NaN) {
      input.value = "syntax error";
    } else {
      input.value = ml;
    }
  }
  if (divide != -1) {
    let arr = first.split("/");
    let d = 1;
    arr.forEach((element) => {
      let n = parseInt(element);
      d = n / d;
    });
    if (d == NaN) {
      input.value = "syntax error";
    } else {
      input.value = d;
    }
  }
}
// reset function
function reset() {
  input.value = "";
}

// themes

t.addEventListener("click", () => {
  if (theme == 1) {
    t.classList.remove("translate-x-[0rem]");
    t.classList.add("translate-x-[0.9rem]");

    // changing the theme
    main_bg.classList.add("bg-[#e6e6e6]");
    toggle_bg.classList.add("bg-[#d1cccc]");
    calc.classList.add("text-[#35352c]");
    ul.classList.add("text-[#35352c]");
    p.classList.add("text-[#35352c]");
    input.classList.add("bg-[#ededed]", "text-[#35352c]");
    key_bg.classList.add("bg-[#d1cccc]");
    btn.forEach((el) => {
      el.classList.add(
        "shadow-[0px_3px_0px_#a69d91]",
        "bg-[#e5e4e1]",
        "text-[#35352c]"
      );
    });
    dl.classList.add(
      "shadow-[0px_3px_0px_#1b5f65]",
      "bg-[#377f86]",
      "text-[#ffffff]"
    );
    rs.classList.add(
      "shadow-[0px_3px_0px_#1b5f65]",
      "bg-[#378f86]",
      "text-[#ffffff]"
    );
    eq.classList.add(
      "shadow-[0px_3px_0px_#893901]",
      "bg-[#ca5502]",
      "text-[#ffffff]"
    );
    theme = 2;
  } else if (theme == 2) {
    t.classList.remove("translate-x-[0.9rem]");
    t.classList.add("translate-x-[1.9rem]");
    // changing the theme
    main_bg.classList.add("bg-[#160628]");
    toggle_bg.classList.add("bg-[#1d0934]");
    calc.classList.add("text-[#ffe53d]");
    ul.classList.add("text-[#ffe53d]");
    p.classList.add("text-[#ffe53d]");
    input.classList.add("bg-[#1d0934]", "text-[#ffe53d]");
    key_bg.classList.add("bg-[#1d0934]");
    btn.forEach((el) => {
      el.classList.add(
        "shadow-[0px_3px_0px_#871c9c]",
        "bg-[#341c4f]",
        "text-[#ffe53d]"
      );
    });
    dl.classList.add(
      "shadow-[0px_3px_0px_#bc15f4]",
      "bg-[#58077d]",
      "text-[#ffffff]"
    );
    rs.classList.add(
      "shadow-[0px_3px_0px_#bc15f4]",
      "bg-[#58077d]",
      "text-[#ffffff]"
    );
    eq.classList.add(
      "shadow-[0px_3px_0px_#6cf9f2]",
      "bg-[#00e0d1]",
      "text-[#1b2428]"
    );
    theme = 3;
  } else if (theme == 3) {
    t.classList.remove("translate-x-[1.9rem]");
    t.classList.add("translate-x-[0rem]");
    theme = 1;
    //  changing theme
    main_bg.classList.remove("bg-[#160628]");
    toggle_bg.classList.remove("bg-[#1d0934]");
    calc.classList.remove("text-[#ffe53d]");
    ul.classList.remove("text-[#ffe53d]");
    p.classList.remove("text-[#ffe53d]");
    input.classList.remove("bg-[#1d0934]", "text-[#ffe53d]");
    key_bg.classList.remove("bg-[#1d0934]");
    btn.forEach((el) => {
      el.classList.remove(
        "shadow-[0px_3px_0px_#871c9c]",
        "bg-[#341c4f]",
        "text-[#ffe53d]"
      );
    });
    dl.classList.remove(
      "shadow-[0px_3px_0px_#bc15f4]",
      "bg-[#58077d]",
      "text-[#ffffff]"
    );
    rs.classList.remove(
      "shadow-[0px_3px_0px_#bc15f4]",
      "bg-[#58077d]",
      "text-[#ffffff]"
    );
    eq.classList.remove(
      "shadow-[0px_3px_0px_#6cf9f2]",
      "bg-[#00e0d1]",
      "text-[#1b2428]"
    );
    //removing theme 2

    main_bg.classList.remove("bg-[#e6e6e6]");
    toggle_bg.classList.remove("bg-[#d1cccc]");
    calc.classList.remove("text-[#35352c]");
    ul.classList.remove("text-[#35352c]");
    p.classList.remove("text-[#35352c]");
    input.classList.remove("bg-[#ededed]", "text-[#35352c]");
    key_bg.classList.remove("bg-[#d1cccc]");
    btn.forEach((el) => {
      el.classList.remove(
        "shadow-[0px_3px_0px_#a69d91]",
        "bg-[#e5e4e1]",
        "text-[#35352c]"
      );
    });
    dl.classList.remove(
      "shadow-[0px_3px_0px_#1b5f65]",
      "bg-[#377f86]",
      "text-[#ffffff]"
    );
    rs.classList.remove(
      "shadow-[0px_3px_0px_#1b5f65]",
      "bg-[#378f86]",
      "text-[#ffffff]"
    );
    eq.classList.remove(
      "shadow-[0px_3px_0px_#893901]",
      "bg-[#ca5502]",
      "text-[#ffffff]"
    );
  }
});