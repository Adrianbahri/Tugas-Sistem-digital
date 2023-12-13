// Konversi ke biner
function konversibiner(input) {
  const biner = input.toString(2).padStart(4, "0");

  for (let i = 0; i < biner.length; i++) {
    const value = biner[i];
    const element = document.getElementById(
      `input${String.fromCharCode(87 + i)}`
    );
    if (element) {
      element.textContent = value;
    }
  }
}

// Fungsi untuk mendapatkan hasil tabel kebenaran
function getHasilTabelKebenaran(desimal) {
  const tabel_kebenaran = [
    { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1, G: 0 },
    { A: 0, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0 },
    { A: 1, B: 1, C: 0, D: 1, E: 1, F: 0, G: 1 },
    { A: 1, B: 1, C: 1, D: 1, E: 0, F: 0, G: 1 },
    { A: 0, B: 1, C: 1, D: 0, E: 0, F: 1, G: 1 },
    { A: 1, B: 0, C: 1, D: 1, E: 0, F: 1, G: 1 },
    { A: 1, B: 0, C: 1, D: 1, E: 1, F: 1, G: 1 },
    { A: 1, B: 1, C: 1, D: 0, E: 0, F: 0, G: 0 },
    { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1, G: 1 },
    { A: 1, B: 1, C: 1, D: 1, E: 0, F: 1, G: 1 },
  ];
  return (hasil = tabel_kebenaran[desimal]);
}

// Fungsi untuk menampilkan hasil
function tampilkanHasil(hasil) {
  const keys = Object.keys(hasil);

  keys.forEach((key) => {
    const value = hasil[key];
    const input = document.querySelector(`#output${key}`);

    const segment = document.querySelector(`#${key}`);
    segment.style.backgroundColor = segment.style.borderColor = value === 1 ? "#39ff14" : "";
    input.style.color = value === 1 ? "#39ff14" : "";
    input.textContent = value;
  });
}

function inputNumber(number) {
  const input = number;
  const hasil = getHasilTabelKebenaran(input);
  tampilkanHasil(hasil);
  konversibiner(input);
}
