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
