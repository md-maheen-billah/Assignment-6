const loadPosts = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const markR = document.getElementById("div-right");
  markR.classList.remove("hidden");
  data.posts.forEach((item) => {
    const postContainer = document.getElementById("div-left");
    let activePart = "";
    if (item.isActive) {
      activePart = `<div
        class=" w-4 h-4 rounded-full bg-[#10B981] absolute left-[80%]"
      ></div>`;
    } else {
      activePart = `<div
        class=" w-4 h-4 rounded-full bg-[#FF3434] absolute left-[80%]"
      ></div>`;
    }
    const divPost = document.createElement("div");
    divPost.innerHTML = `
    <div class="flex flex-col items-center lg:items-start lg:flex-row bg-[#F3F3F5] p-4 lg:p-10 rounded-3xl gap-6 mb-6">
                <div class="w-20 h-20 rounded-3xl relative">
                ${activePart}
                    <img class="rounded-3xl" src="${item.image}" alt="">
                </div>
                <div class="w-full">
                    <div class="flex text-sm font-medium gap-4"><h3># ${item.category}</h3>
                    <h3>Author: ${item.author.name}</h3></div>
                    <h2 class="text-xl font-bold mt-3">${item.title}</h2>
                    <p class="text-base font-normal text-[#12132D99] mt-4">${item.description}</p>
                    <hr class="mb-4 border-dashed bg-[#12132D40] mt-5">
                    <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div class="flex gap-4">
                            <div class="flex gap-2 items-center"><img src="images/tabler-icon-message-2.svg" alt=""><p>${item.comment_count}</p></div>
                            <div class="flex gap-2 items-center"><img src="images/tabler-icon-eye.svg" alt=""><p>${item.view_count}</p></div>
                            <div class="flex gap-2 items-center"><img src="images/tabler-icon-clock-hour-9.svg" alt=""><p>${item.posted_time}</p></div>
                        </div>
                        <div><button id="${item.id}" class="add-btn shadow-none btn"><img src="images/email 1.svg" alt=""></button></div>
                    </div>
                </div>
            </div>
    `;
    postContainer.appendChild(divPost);

    const id = document.getElementById(item.id);
    id.addEventListener("click", makeRead);

    function makeRead() {
      let counter = parseInt(document.getElementById("mark-as").innerText);
      counter = counter + 1;
      const readContainer = document.getElementById("div-right");
      const divSeen = document.createElement("div");
      const markT = document.getElementById("mark-as");
      markT.innerText = counter;
      divSeen.innerHTML = `
      <div
              class="bg-white rounded-3xl p-4 mt-4 flex justify-between"
            >
              <h2 class="text-[16px] font-semibold w-36 lg:w-48">${item.title}</h2>
              <div class="flex gap-2 items-center">
                <img src="images/tabler-icon-eye.svg" alt="" />
                <p>${item.view_count}</p>
              </div>
            </div>
    `;
      readContainer.appendChild(divSeen);
    }
  });
};

const loadCategory = async (searchText) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const data = await response.json();
  const markR = document.getElementById("div-right");
  markR.classList.remove("hidden");
  toggleLoadingSpinner();
  data.posts.forEach((item) => {
    const postContainer = document.getElementById("div-left");
    let activePart = "";
    if (item.isActive) {
      activePart = `<div
          class=" w-4 h-4 rounded-full bg-[#10B981] absolute left-[80%]"
        ></div>`;
    } else {
      activePart = `<div
          class=" w-4 h-4 rounded-full bg-[#FF3434] absolute left-[80%]"
        ></div>`;
    }
    const divPost = document.createElement("div");
    divPost.innerHTML = `
    <div class="flex flex-col items-center lg:items-start lg:flex-row bg-[#F3F3F5] p-4 lg:p-10 rounded-3xl gap-6 mb-6">
    <div class="w-20 h-20 rounded-3xl relative">
    ${activePart}
        <img class="rounded-3xl" src="${item.image}" alt="">
    </div>
    <div class="w-full">
        <div class="flex text-sm font-medium gap-4"><h3># ${item.category}</h3>
        <h3>Author: ${item.author.name}</h3></div>
        <h2 class="text-xl font-bold mt-3">${item.title}</h2>
        <p class="text-base font-normal text-[#12132D99] mt-4">${item.description}</p>
        <hr class="mb-4 border-dashed bg-[#12132D40] mt-5">
        <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div class="flex gap-4">
                <div class="flex gap-2 items-center"><img src="images/tabler-icon-message-2.svg" alt=""><p>${item.comment_count}</p></div>
                <div class="flex gap-2 items-center"><img src="images/tabler-icon-eye.svg" alt=""><p>${item.view_count}</p></div>
                <div class="flex gap-2 items-center"><img src="images/tabler-icon-clock-hour-9.svg" alt=""><p>${item.posted_time}</p></div>
            </div>
            <div><button id="${item.id}" class="add-btn shadow-none btn"><img src="images/email 1.svg" alt=""></button></div>
        </div>
    </div>
</div>
      `;
    postContainer.appendChild(divPost);

    const id = document.getElementById(item.id);
    id.addEventListener("click", makeRead);

    function makeRead() {
      let counter = parseInt(document.getElementById("mark-as").innerText);
      counter = counter + 1;
      const readContainer = document.getElementById("div-right");
      const divSeen = document.createElement("div");
      const markT = document.getElementById("mark-as");
      markT.innerText = counter;
      divSeen.innerHTML = `
      <div
      class="bg-white rounded-3xl p-4 mt-4 flex justify-between"
    >
      <h2 class="text-[16px] font-semibold w-36 lg:w-48">${item.title}</h2>
      <div class="flex gap-2 items-center">
        <img src="images/tabler-icon-eye.svg" alt="" />
        <p>${item.view_count}</p>
      </div>
    </div>
      `;
      readContainer.appendChild(divSeen);
    }
  });
};

setTimeout(function () {
  loadPosts();
  toggleLoadingSpinner();
  toggleLoadingSpinner2();
  loadLatestPosts();
}, 2000);

const toggleLoadingSpinner = () => {
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.classList.add("hidden");
};
const toggleLoadingSpinner2 = () => {
  const loadingSpinner = document.getElementById("loading-spinner2");
  loadingSpinner.classList.add("hidden");
};

const handleSearch = () => {
  const searchField = document.getElementById("search-txt");
  const searchText = searchField.value;
  const postContainer = document.getElementById("div-left");
  postContainer.textContent = "";
  setTimeout(function () {
    loadCategory(searchText);
  }, 2000);
  const loadingSpinner = document.getElementById("loading-spinner");
  loadingSpinner.classList.remove("hidden");
  const markR = document.getElementById("div-right");
  markR.classList.add("hidden");
};
