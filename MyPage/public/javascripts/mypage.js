function moreinfo(name) {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  if (url.length === 0) {
    location.href = "/moreinfo";
  } else {
    location.href = "/moreinfo?type=" + type + "&id=" + id + "&name=" + name;
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

function modifyinfo() {
  let url = window.location.search;
  const urlparam = new URLSearchParams(url);
  const id = urlparam.get("id");
  const type = urlparam.get("type");
  if (url.length === 0) {
    location.href = "/";
  } else {
    location.href = "/personalinfo?type=" + type + "&id=" + id;
  }
}
