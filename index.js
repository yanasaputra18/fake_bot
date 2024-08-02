const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "Hallo, perkenalkan nama saya yanabot. siapa nama kamu",
    `Halo ${data?.nama}, berapa usia kamu?`,
    `Ohhh ${data?.usia}, hobi kamu apa yah?`,
    `Wawww sama dong aku juga hobi ${data?.hobi}, btw punya pacar ga?`,
    `Ohh ${data?.pacar}, ya udah kalo gitu. udahan yah?`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1100]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Terimakasih yah ${userData[0]} telah main ke yanabot. Kali-kali kita ${userData[2]} bareng ya!`;
  jawaban.value = "Terimakasih yah";
}

function botEnd() {
  window.location.reload();
}
