const tasks = [];

for (let i = 1; i <= 5; i += 1) {
  tasks.push({
    name: `win-${i}`,
    title: `Tile ${i}`,
    x: (i - 1) * 320 + 20,
    y: 20,
  });
}

export default tasks;
