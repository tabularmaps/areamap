export const create = (tag) => document.createElement(tag);
export const get = (id) => document.getElementById(id);

export const makeGrids = (stab, separator = " ") => {
  const area = [];
  let maxc = 0;
  const lines = stab.split("\n");
	for (let a of lines) {
    const row = a.split(separator);
    if (row.length > 1 || row[0].length > 0) {
      area.push(row);
      if (row.length > maxc) {
        maxc = row.length;
      }
    }
  }
  const c = document.createElement("div");
  c.style.display = "grid";
  c.style.gridTemplateColumns = `repeat(${maxc}, 1fr)`;
  c.style.gridTemplateRows = `repeat(${lines.length}, 1fr)`;
  const areas = [];
  for (const ar of area) {
    for (const a of ar) {
      const div = document.createElement("span");
      c.appendChild(div);
      div.textContent = a;
      areas.push(a);
    }
  }
  c.areas = areas;
  return c;
};
