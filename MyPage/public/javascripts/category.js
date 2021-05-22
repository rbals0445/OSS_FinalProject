function gotomain() {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  if (!id) {
    location.href = "/";
  } else {
    location.href = "/?type=" + type + "&id=" + id;
  }
}

function moreinfo(name) {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  const cate = urlparam.get("category");
  if (!id) {
    location.href = "/moreinfo?name=" + name + "&category=" + cate;
  } else {
    location.href =
      "/moreinfo?type=" +
      type +
      "&id=" +
      id +
      "&name=" +
      name +
      "&category=" +
      cate;
  }
}
