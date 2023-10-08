window.onload = function () {
  const profileNameInput = document.getElementById("inputPorfileName");
  const jobRoleInput = document.getElementById("inputJobRole");
  const postContent = document.getElementById("content");
  const postBtn = document.getElementById("post");

  let postData = [];
  let myObj = {};
  let id = 1;

  postBtn.addEventListener("click", function () {
    // console.log(profileNameInput.value);
    const postRow = document.getElementById("allPost");

    myObj.id = id;
    myObj.name = profileNameInput.value;
    myObj.job = jobRoleInput.value;
    myObj.content = postContent.value;
    myObj.date = new Date();

    postData.push(myObj);

    console.log(postData);
    id++;

    let postDiv = document.createElement("div");

    postData.forEach((elm) => {
      postDiv.classList.add(
        "col-12",
        "d-flex",
        "justify-content-center",
        "my-3"
      );
      postDiv.innerHTML = `
        <div class="card text-start col-8">
        <div class="card-body">
              <div class="row">
                <div class="col-1">
                  <i class="bi bi-person-circle" style="font-size: 70px"></i>
                </div>
                <div class="col-11">
                  <h5 class="card-title">${elm.name}</h5>
                  <p class="card-text">${elm.job}</p>
                  <p class="card-text">${elm.date}</p>
                </div>
              </div>
              <p class="card-text mt-2">
                ${elm.content}
              </p>
            </div>
            <div class="card-footer text-muted d-flex justify-content-around">
              <button type="button" class="btn btn-light"><i class="bi bi-hand-thumbs-up"></i>Like</button>
              <button type="button" class="btn btn-light"><i class="bi bi-chat-right-text"></i>Comment</button>
              <button type="button" class="btn btn-light"><i class="bi bi-arrow-90deg-right"></i>Share</button>
              <button type="button" class="btn btn-light"><i class="bi bi-send-fill"></i>Send</button>
            </div>
            </div>
        `;
      postRow.append(postDiv);
      profileNameInput.value = "";
      jobRoleInput.value = "";
      postContent.value = "";
    });
  });
};
