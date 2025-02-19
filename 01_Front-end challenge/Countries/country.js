const CountryName = new URLSearchParams(location.search).get("name");

let url = `https://restcountries.com/v3.1/name/${CountryName}?fullText=true`;

const FullData = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((place) => {
        const placeCard = document.createElement("a");
        placeCard.classList.add("shadow-xl", "rounded-xl", "overflow-hidden", "transition-transform", "transform", "hover:scale-105");

        const currencies = place.currencies ? Object.values(place.currencies).map(c => c.name).join(", ") : "N/A";
        const languages = place.languages ? Object.values(place.languages).join(", ") : "N/A";
        const topLevelDomain = place.tld ? place.tld[0] : "N/A";
        const capital = place.capital?.[0] || "N/A";
        const population = place.population ? place.population.toLocaleString() : "N/A";
        const nativeName = place.name.nativeName?.eng?.common || "N/A";

        placeCard.innerHTML = `
          <div class="flex flex-wrap gap-16 align-middle mt-10 p-10">
            <img
              src="${place.flags.svg}"
              alt="Country Flag"
              class="w-[40%]"
            />
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-4">${place.name.common}</h2>
              <div class="flex-col flex-wrap">
                <p class="m-0"><span class="font-semibold ">Native:</span> ${nativeName}</p>
                <p class="m-0"><span class="font-semibold">Population:</span> ${population}</p>
                <p class="m-0"><span class="font-semibold">Region:</span> ${place.region || "N/A"}</p>
                <p class="m-0"><span class="font-semibold">Sub Region:</span> ${place.subregion || "N/A"}</p>
                <p class="m-0"><span class="font-semibold">Capital:</span> ${capital}</p>
                <p class="m-0"><span class="font-semibold">Top Level Domain:</span> ${topLevelDomain}</p>
                <p class="m-0"><span class="font-semibold">Currencies:</span> ${currencies}</p>
                <p class="m-0"> class="font-semibold">Languages:</span> ${languages}</p>
              </div>
              <div>
                <p class="font-se<span class="semibold">Border Countries : <a class="shadow-md gap-2 px-2 ml-2" href="#">France</a><a class="shadow-md gap-2 px-2 m-3" href="#">India</a></p>
              </div>
            </div>
          </div>
        `;

        document.querySelector(".oneCountry").append(placeCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
    });
};

FullData();
