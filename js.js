async function country() {
  let Name = document.getElementById("name").value;
  const res = await fetch("https://api.nationalize.io/?name=" + Name);

  const resJSON = await res.json();
  console.log(resJSON);

  if (!res.ok) {
    let error = "name no fount";
    alert(error);
    throw new Error(error);
  }

  return resJSON;
}

function show(n) {
  console.log("n : " + n.country[0].country_id);
  document.getElementById("p").innerHTML = n.country[0].country_id;
}
