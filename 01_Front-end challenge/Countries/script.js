document.addEventListener("DOMContentLoaded", () => {
  const countriesContainer = document.querySelector(".countries-container");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((country) => {
        const countryCard = document.createElement("a");
        countryCard.classList.add(
          "w-64",
          "rounded-xl",
          "shadow-md",
          "overflow-hidden",
          "m-10",
          "pb-6",
          "bg-white",
          "hover:shadow-lg",
          "transition",
          "transform",
          "duration-300",
          "hover:scale-105"
        );
        countryCard.href = `/Countries/country.html?name=${country.name.common}`;

        countryCard.innerHTML = `
          <img src="${country.flags.svg}" alt="${country.name.common}" class="w-full h-48 object-cover shadow-md">
          <div class="px-2">
            <h2 class="text-xl font-bold mt-3">${country.name.common}</h2>
            <p class="mb-0 mt-3"><span class="font-semibold">Population: </span>${country.population.toLocaleString('en-IN')}</p>
            <p class="mb-0"><span class="font-semibold">Region: </span >${country.region}</p>
            <p class="mb-0"><span class="font-semibold">Capital: </span>${country.capital?.[0] || "No capital available"}</p>
          </div>
        `;

        countriesContainer.append(countryCard);
      });
    })
    .catch((error) => console.error("Error fetching data: ", error));
});
