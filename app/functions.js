// pomocná funkce na načítání dat z url
exports.fetchDataFromURL = async function (url) {

    const json = await fetch(url);
    const data = await json.json();
    return (data);
}