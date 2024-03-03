const loadLatestPosts = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await response.json();
  data.forEach((item) => {
    const latestPostContainer = document.getElementById("latest-posts");
    const divLatestPost = document.createElement("div");
    divLatestPost.innerHTML = `
    <div class="p-6 rounded-3xl border lg:h-[470px]">
    <img
      class="w-[326px] h-[190px] rounded-2xl"
      src="${item.cover_image}"
      alt=""
    />
    <div class="flex items-center mt-6 gap-2">
      <img src="images/time.svg" alt="" />
      <p class="text-[#12132D99]">${
        item.author?.posted_date || "No publish date"
      }</p>
    </div>
    <h3 class="mt-4 font-extrabold text-lg leading-7">
      ${item.title}
    </h3>
    <p class="mt-3 text-[#12132D99] leading-6">
      ${item.description}
    </p>
    <div class="flex items-center mt-4 gap-4">
      <img
        class="w-[44px] h-[44px] rounded-full"
        src="${item.profile_image}"
        alt=""
      />
      <div>
        <h3 class="font-bold">${item.author.name}</h3>
        <p class="text-[#12132D99] text-sm">${
          item.author?.designation || "Unknown"
        }</p>
      </div>
    </div>
  </div>
      `;
    latestPostContainer.appendChild(divLatestPost);
  });
};
