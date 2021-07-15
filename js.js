async function country() {
  let Name = document.getElementById("name").value;
  const res = await fetch("https://api.nationalize.io/?name=" + Name);

  const resJSON = await res.json();
  console.log(resJSON);

  if (!res.ok) {
    let error = "name no fount";
    alert(error);
  }

  return resJSON;
}

function show(n) {
  console.log("n : ");
  document.getElementById("p").innerHTML = n.country[0].country_id;
}
