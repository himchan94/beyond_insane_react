export function CounterComponent() {
  const root = document.getElementById("root");

  let counter = 0;

  const fragment = document.createDocumentFragment();

  const btn = document.createElement("button");
  btn.setAttribute("id", "btn-counter");
  btn.innerHTML = "Counter";

  const current_count = document.createElement("div");
  current_count.setAttribute("id", "elem-counter");

  const reset_btn = document.createElement("button");
  reset_btn.setAttribute("id", "count-reset");
  reset_btn.innerHTML = "Reset Count";

  // root.innerHTML = `<h1>Hello world!</h1>`;

  const current_count_display = (count) => {
    return (current_count.innerHTML = `<span style="color: red;">${count}</span>`);
  };

  const reset_counter = (count) => {
    if (count > 10) {
      root.append(reset_btn);
    } else {
      if (document.body.contains(document.getElementById("count-reset"))) {
        // document.body.removeChild(reset_btn);
        reset_btn.remove();
      }
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "btn-counter") {
      console.log("count");
      counter = counter + 1;
      current_count_display(counter);
      reset_counter(counter);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "count-reset") {
      console.log("re");
      counter = 0;
      current_count.innerHTML = "Count Reset";
    }
  });

  fragment.appendChild(btn);
  fragment.appendChild(current_count);

  return root.appendChild(fragment);
}
