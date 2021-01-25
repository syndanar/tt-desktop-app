export default function (data) {
  const message = JSON.parse(data);

  const transform = {};

  try {
    transform.from = [];
    transform.to = [];
    transform.value = 0;

    message.x.inputs.forEach((input) => {
      transform.from.push(input.prev_out.addr);
    });

    message.x.out.forEach((out) => {
      transform.to.push(out.addr);
      transform.value += out.value;
    });
  } catch (e) {
    return `Error occurred while transform message from blockchain. \n${e}`;
  }
  return transform;
}
