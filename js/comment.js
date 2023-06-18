var selectedRating = 0; // 선택한 별점을 저장할 변수

function handleStarSelect(rating) {
  selectedRating = rating;
}

function submitComment() {
  var username = document.getElementById("username").value;
  var comment = document.getElementById("comment").value;

  if (username === "" || comment === "") {
    alert("닉네임과 내용을 모두 입력해주세요.");
    return;
  }

  var newComment = document.createElement("p");
  newComment.innerHTML =
    "<strong>" +
    username +
    "</strong>" +
    "<br />" +
    comment;

  document.getElementById("comments").appendChild(newComment);

  // 입력 필드 초기화
  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";

  // 별점 초기화
  selectedRating = 0;
  clearStarRating();
}

function handleStarHover(rating) {
  var stars = document.getElementsByClassName("star");

  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].classList.add("active");
    } else {
      stars[i].classList.remove("active");
    }
  }
}

function clearStarRating() {
  var stars = document.getElementsByClassName("star");

  for (var i = 0; i < stars.length; i++) {
    stars[i].classList.remove("active");
  }
}
