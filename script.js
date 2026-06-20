// Menu

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// semua

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Close navbar when clicking navigation links
document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});

const mdtik = document.getElementById("mdtik");
const openmdtik = document.getElementById("openmdtik");
const closemdtik = document.getElementById("closemdtik");
const prodidtik = document.getElementById("prodidtik");

openmdtik.onclick = () => {
  mdtik.style.display = "flex";
  showdtik("ti"); // Auto open first prodi
};

closemdtik.onclick = () => {
  mdtik.style.display = "none";
};

function showdtik(prodi) {
  if (prodi === "ti") {
    prodidtik.innerHTML = `
      <h3>Teknik Informatika</h3>
      <p>
        Teknik Informatika mempelajari pengembangan perangkat lunak dan sistem informasi 
untuk menyelesaikan berbagai permasalahan. Program studi ini berfokus pada logika 
pemrograman dan pemanfaatan teknologi digital. 
      </p>

      <strong>Prospek kerja:</strong>
      <ul>
        <li>Software Developer</li>
        <li>Web & Mobile Developer</li>
        <li>AI Engineer</li>
        <li>System Analyst</li>
      </ul>
    `;
  } else if (prodi === "tk") {
    prodidtik.innerHTML = `
      <h3>Teknik Komputer</h3>
      <p>
        Teknik Komputer mempelajari integrasi antara perangkat keras, perangkat lunak, dan 
jaringan komputer. Program studi ini menekankan pemahaman sistem komputer secara 
menyeluruh. 
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Embedded System Engineer</li>
        <li>Network Engineer</li>
        <li>IoT Developer</li>
        <li>Hardware Engineer</li>
      </ul>
    `;
  } else if (prodi === "sdt") {
    prodidtik.innerHTML = `
      <h3>Sains Data Terapan</h3>
      <p>
        Sains Data Terapan mempelajari pengolahan dan analisis data untuk menghasilkan 
informasi yang bermanfaat. Program studi ini menggabungkan data, teknologi, dan 
pengambilan keputusan berbasis fakta.
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Data Analyst</li>
        <li>Data Scientist</li>
        <li>Business Intelligence</li>
        <li>Machine Learning Engineer</li>
      </ul>
    `;
  }
}

// DTE

const mdte = document.getElementById("mdte");
const openmdte = document.getElementById("openmdte");
const closemdte = document.getElementById("closemdte");
const prodidte = document.getElementById("prodidte");

openmdte.onclick = () => {
  mdte.style.display = "flex";
  showdte("elka"); // Auto open first prodi
};

closemdte.onclick = () => {
  mdte.style.display = "none";
};

function showdte(prodi) {
  if (prodi === "elka") {
    prodidte.innerHTML = `
      <h3>Teknik Elektronika</h3>
      <p>
        Teknik Elektronika Fokus pada perancangan dan penerapan rangkaian serta sistem elektronika, termasuk 
mikrokontroler dan perangkat berbasis sensor.
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Teknisi elektronik </li>
        <li>Engineer elektronika</li>
        <li>Teknisi maintenance</li>
        <li>Pengembang alat elektronik</li>
      </ul>
    `;
  } else if (prodi === "elin") {
    prodidte.innerHTML = `
      <h3>Teknik Elektro Industri</h3>
      <p>
        Program Studi Teknik Elektro Industri mempelajari penerapan sistem kelistrikan di 
lingkungan industri. Fokus pembelajaran meliputi instalasi listrik industri, sistem motor 
listrik, panel kontrol, serta otomasi berbasis PLC.
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Electrical engineer industri </li>
        <li>Teknisi listrik pabrik </li>
        <li>Automation engineer </li>
        <li>Maintenance engineer industry</li>
      </ul>
    `;
  } else if (prodi === "telkom") {
    prodidte.innerHTML = `
      <h3>Teknik Telekomunikasi</h3>
      <p>
Teknik Telekomunikasi adalah program studi yang mempelajari sistem pengiriman 
informasi berupa suara, data, dan video dari satu tempat ke tempat lain. Sistem 
komunikasi ini dapat menggunakan media kabel maupun nirkabel dan menjadi dasar 
teknologi internet dan jaringan modern.
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Network engineer</li>
        <li>Engineer telekomunikasi</li>
        <li>Teknisi jaringan internet </li>
        <li>Teknisi sistem komunikasi/li>
      </ul>
    `;
  } else if (prodi === "tri") {
    prodidte.innerHTML = `
      <h3>Teknologi Rekaya Internet</h3>
      <p>
Teknologi Rekayasa Internet adalah program studi yang berfokus pada perancangan, 
pembangunan, dan pengelolaan sistem berbasis internet. Prodi ini menyiapkan lulusan 
yang mampu membangun infrastruktur jaringan internet, layanan berbasis web, serta 
sistem digital yang terhubung melalui jaringan
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Network engineer </li>
        <li>Internet system engineer </li>
        <li>Administrator jaringan dan server </li>
        <li>IT support dan network support /li>
      </ul>
    `;
  }
}

// DTMK

const mdtmk = document.getElementById("mdtmk");
const openmdtmk = document.getElementById("openmdtmk");
const closemdtmk = document.getElementById("closemdtmk");
const prodidtmk = document.getElementById("prodidtmk");

openmdtmk.onclick = () => {
  mdtmk.style.display = "flex";
  showdtmk("tmb"); // Auto open first prodi
};

closemdtmk.onclick = () => {
  mdtmk.style.display = "none";
};

function showdtmk(prodi) {
  if (prodi === "tmb") {
    prodidtmk.innerHTML = `
      <h3>Teknologi Multimedia dan Broadcasting</h3>
      <p>
        Program studi Teknik Informatika berfokus pada pengembangan perangkat
        lunak, sistem informasi, kecerdasan buatan, dan teknologi berbasis web
        maupun mobile.
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Video editor </li>
        <li>Content creator</li>
        <li>Broadcaster </li>
        <li>Multimedia operator </li>
      </ul>
    `;
  } else if (prodi === "gemtek") {
    prodidtmk.innerHTML = `
      <h3>Teknologi Game</h3>
      <p>
        Teknologi Game mempelajari pengembangan permainan digital dari sisi teknis dan 
kreatif. Program studi ini menggabungkan pemrograman dengan desain game. 
Teknologi Game mempelajari pengembangan permainan digital dari sisi teknis dan 
kreatif. Program studi ini menggabungkan pemrograman dengan desain game. 
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Game developer</li>
        <li>Game designer</li>
        <li>UI/UX game</li>
        <li>Content creator game </li>
      </ul>
    `;
  } else if (prodi === "trm") {
    prodidtmk.innerHTML = `
      <h3>Teknologi Rekayasa Multimedia </h3>
      <p>
        Teknologi Rekayasa Multimedia mempelajari pengembangan konten multimedia 
berbasis teknologi digital. Program studi ini menyiapkan lulusan untuk industri kreatif 
dan teknologi. 
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Multimedia designer</li>
        <li>UI/UX designer </li>
        <li>Digital content developer</li>
        <li>Creative technologist </li>
      </ul>
    `;
  } else if (prodi === "bd") {
    prodidtmk.innerHTML = `
      <h3>Bisnis Digital</h3>
      <p>
        Program studi Bisnis Digital mempelajari pengelolaan dan pengembangan usaha 
berbasis teknologi digital. Program studi ini menggabungkan pemahaman bisnis dengan 
pemanfaatan teknologi informasi dan platform digital.  
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Digital marketer </li>
        <li>Manajer e-commerce</li>
        <li>Product manager</li>
        <li>Business analyst</li>
      </ul>
    `;
  }
}

// DTME

const mdtme = document.getElementById("mdtme");
const openmdtme = document.getElementById("openmdtme");
const closemdtme = document.getElementById("closemdtme");
const prodidtme = document.getElementById("prodidtme");

openmdtme.onclick = () => {
  mdtme.style.display = "flex";
  showdtme("meka"); // Auto open first prodi
};

closemdtme.onclick = () => {
  mdtme.style.display = "none";
};

function showdtme(prodi) {
  if (prodi === "meka") {
    prodidtme.innerHTML = `
      <h3>Teknik Mekatronika</h3>
      <p>
        Teknik mekatronika memadukan ilmu mekanika, elektronika, dan sistem kontrol. 
Program studi ini fokus pada pengembangan mesin dan sistem otomatis. 
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Mekatronika engineer</li>
        <li>Automation engineer</li>
        <li>Robotic engineer </li>
        <li>Engineer mesin otomatis</li>
      </ul>
    `;
  } else if (prodi === "spe") {
    prodidtme.innerHTML = `
      <h3>Teknik Sistem Pembangkit Energi</h3>
      <p>
        Sistem Pembangkit Energi mempelajari proses pembangkitan dan pengelolaan energi 
listrik. Program studi ini juga membahas pemanfaatan energi baru dan terbarukan 
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Engineer energi</li>
        <li>Teknisi pembangkit </li>
        <li>Analis energi </li>
        <li>Pengelola sistem tenaga</li>
      </ul>
    `;
  } else if (prodi === "trpm") {
    prodidtme.innerHTML = `
      <h3>Teknologi Rekayasa Perancangan Manufaktur</h3>
      <p>
        Program studi Teknologi Rekayasa Perancangan Manufaktur mempelajari proses 
perancangan dan pembuatan produk industri dari tahap desain hingga siap diproduksi. 
Program studi ini menekankan penerapan teknologi manufaktur untuk menghasilkan 
produk yang efisien, fungsional, dan sesuai kebutuhan industri. 
      </p>
      <strong>Prospek Kerja:</strong>
      <ul>
        <li>Manufacturing engineer</li>
        <li>Design engineer </li>
        <li>Product designer industri</li>
        <li>Quality control engineer </li>
      </ul>
    `;
  }
}

// Single window click listener to close all modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === mdtik) mdtik.style.display = "none";
  if (e.target === mdte) mdte.style.display = "none";
  if (e.target === mdtmk) mdtmk.style.display = "none";
  if (e.target === mdtme) mdtme.style.display = "none";
});
