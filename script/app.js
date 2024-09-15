function calculateReactArea() {
  const resultBtn = document.getElementById("result-btn");
  const base = parseFloat(document.getElementById("base").value);
  const height = parseFloat(document.getElementById("height").value);

  const area = 0.5 * base * height;

  const result = document.getElementById("result");
  result.innerText = area;

  const convertMeterBtn = document
    .getElementById("convert-meter-btn")
    .addEventListener("click", () => {
      const resultM = document.getElementById("result-m");
      const meter = area / 10000;
      resultM.innerText = meter;
    });
}
