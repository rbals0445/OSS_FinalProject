function search() {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");

  let content = document.getElementById("search_input");
  if (content.value.length === 0) {
    alert("Please insert keywords");
    return;
  }

  content = content.value.trim();

  const req = {
    content: content,
  };

  fetch("/search", {
    method: "POST",
    //데이터의 타입, 어떤 타입으로 보낼건지
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        if (url.length === 0) {
          location.href = "/moreinfo?name=" + content;
        } else {
          location.href =
            "/moreinfo?type=" +
            type +
            "&id=" +
            id +
            "&name=" +
            content +
            "&search=1";
        }
      } else {
        alert("There is no matched restaurant");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function mypage() {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  if (url.length === 0) {
    location.href = "/signin";
  } else {
    location.href = "/mypage?type=" + type + "&id=" + id;
  }
}

function mov_category(catego) {
  // type 1, 식당, 2 카페, 3 술집
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");

  if (catego === 1) {
    if (url.length === 0) {
      location.href = "/category?category=restaurant";
    } else {
      location.href =
        "/category?type=" + type + "&id=" + id + "&category=restaurant";
    }
  } else if (catego === 2) {
    if (url.length === 0) {
      location.href = "/category?category=cafe";
    } else {
      location.href = "/category?type=" + type + "&id=" + id + "&category=cafe";
    }
  } else {
    if (url.length === 0) {
      location.href = "/category?category=pub";
    } else {
      location.href = "/category?type=" + type + "&id=" + id + "&category=pub";
    }
  }
}

function mainpage() {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  if (url.length === 0) {
    location.href = "/";
  } else {
    location.href = "/?type=" + type + "&id=" + id;
  }
}
