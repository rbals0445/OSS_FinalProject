let like_cnt = 0;
let dislike_cnt = 0;
let wishlist_cnt = 0;
function back() {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  const cate = urlparam.get("category");
  const search = urlparam.get("search");

  //return을 안써주면 그냥 아래로 내려감
  //href가 아예 페이지를 넘기는게 아닌가 체크해봐야할듯
  if (!cate) {
    if (!id) {
      location.href = "/";
      return;
    } else if (search === "1") {
      location.href = "/?type=" + type + "&id=" + id;
      return;
    }
  }

  if (!id) {
    location.href = "/category?category=" + cate;
  } else {
    if (cate) {
      location.href =
        "/category?type=" + type + "&id=" + id + "&category=" + cate;
    } else {
      location.href = "/mypage?type=" + type + "&id=" + id;
    }
  }
  return;
}

function like() {
  if (like_cnt) {
    alert("You can click only once!!");
    return;
  }
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  const cate = urlparam.get("category");
  const search = urlparam.get("search");
  const name = urlparam.get("name");

  let like = document.getElementById("like");

  if (!id) {
    alert("You have to login first!!");
    return;
  }

  const req = {
    name: name,
    id: id,
  };

  fetch("/like", {
    method: "POST",
    //데이터의 타입, 어떤 타입으로 보낼건지
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        like.innerHTML = parseInt(like.innerText) + 1;
        like_cnt++;
      } else {
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
}

function dislike() {
  if (dislike_cnt) {
    alert("You can click only once!!");
    return;
  }
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  const cate = urlparam.get("category");
  const search = urlparam.get("search");
  const name = urlparam.get("name");
  if (!id) {
    alert("You have to login first!!");
    return;
  }

  let dislike = document.getElementById("dislike");

  const req = {
    name: name,
    id: id,
  };

  fetch("/dislike", {
    method: "POST",
    //데이터의 타입, 어떤 타입으로 보낼건지
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        dislike.innerHTML = parseInt(dislike.innerText) + 1;
        dislike_cnt++;
      } else {
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
}

function wishlist() {
  if (wishlist_cnt) {
    alert("You can click only once!!");
    return;
  }
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  const cate = urlparam.get("category");
  const search = urlparam.get("search");
  const name = urlparam.get("name");
  if (!id) {
    alert("You have to login first!!");
    return;
  }

  const req = {
    name: name,
    id: id,
  };

  fetch("/wishlist", {
    method: "POST",
    //데이터의 타입, 어떤 타입으로 보낼건지
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("add wishlist!");
        wishlist_cnt++;
      } else {
        alert("delete wishlist!");
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
}
