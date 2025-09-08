function cardTemplate(agent){
  const e = ELEMENTS[agent.element];
  const card = document.createElement("article");
  card.className="card";
  card.draggable=true;

  const portrait = (profiles[agent.id] && profiles[agent.id].portrait) 
    ? `<img src="${profiles[agent.id].portrait}" alt="${agent.name}" style="width:100%;border-radius:12px;margin-bottom:8px">`
    : "";

  card.innerHTML = `
    ${portrait}
    <div class="row" style="justify-content:space-between">
      <div class="name">${agent.name}</div>
      <div class="badge" style="border-color:${e.color}">${e.emoji} ${agent.element}</div>
    </div>
    <div class="row roles">${agent.roles.map(r=>`<span class="badge">${r}</span>`).join("")}</div>
    <div class="row">
      ${agent.util.map(u=>`<span class="badge tiny">${u}</span>`).join("")}
      <span class="badge">${agent.power}★</span>
    </div>
    <div class="note">${agent.note}</div>
    <button class="btn add">Add to Team</button>
  `;
  card.querySelector(".add").addEventListener("click", ()=> addToTeam(agent.id));
  card.addEventListener("dragstart", e=>{
    e.dataTransfer.setData("text/agent", agent.id);
    e.dataTransfer.effectAllowed="copy";
  });
  return card;
}
