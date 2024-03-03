const loadPosts = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
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
    <div class="flex bg-[#F3F3F5] p-10 rounded-3xl gap-6 mb-6">
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
                    <div class="flex items-center justify-between">
                        <div class="flex gap-4">
                            <div class="flex gap-2 items-center"><img src="images/tabler-icon-message-2.svg" alt=""><p>${item.comment_count}</p></div>
                            <div class="flex gap-2 items-center"><img src="images/tabler-icon-eye.svg" alt=""><p>${item.view_count}</p></div>
                            <div class="flex gap-2 items-center"><img src="images/tabler-icon-clock-hour-9.svg" alt=""><p>${item.posted_time}</p></div>
                        </div>
                        <div><button><img src="images/email 1.svg" alt=""></button></div>
                    </div>
                </div>
            </div>
    `;
    postContainer.appendChild(divPost);
  });
};
loadPosts();
