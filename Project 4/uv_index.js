let latitude = 14.6943;
let longitude = -18.9249;

const UVapi =
    `https://currentuvindex.com/api/v1/uvi?latitude=${latitude}&longitude=${longitude}`;


async function UvApiCall() {
    const response = await fetch(UVapi);
    const data = await response.json();

    if (data.ok == false) {
        return data.message;
    }
    
    return data.now.uvi;
}

(async () => {
    console.log(await UvApiCall());
})();



