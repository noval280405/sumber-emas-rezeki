<template>
  <div class="playground-container">
    <h2>Playground Belajar JavaScript Mandiri</h2>
    <p class="deskripsi">
      Tulis dan jalankan kode JavaScript secara bebas di bawah ini. Anda bisa membuat variabel baru, mengubah nilai <code>let</code>, mencoba kondisi <code>if/else</code>, loop, hingga fungsi.
    </p>

    <!-- Editor Kode -->
    <div class="editor-section">
      <div class="editor-header">
        <span>JavaScript Editor</span>
        <button @click="resetKode" class="btn-reset">Reset Kode</button>
      </div>
      <textarea 
        v-model="userCode" 
        rows="12" 
        spellcheck="false"
        placeholder="Tulis kode JavaScript kamu di sini..."
      ></textarea>
    </div>

    <!-- Tombol Eksekusi -->
    <button @click="jalankanKode" class="btn-run">▶ Jalankan Kode</button>

    <!-- Console Output -->
    <div class="output-section">
      <h3>Console Output:</h3>
      <div :class="['console-box', hasError ? 'error' : '']">
        <template v-if="logs.length > 0">
          <div v-for="(log, index) in logs" :key="index" class="log-item">
            <span class="prompt">></span> {{ log }}
          </div>
        </template>
        <div v-else class="placeholder-text">
          Gunakan <code>console.log(...)</code> dalam kode untuk melihat hasil keluaran di sini.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatihanJava',
  data() {
    return {
      // Kode bawaan yang memuat contoh fleksibel
      userCode: `// 1. Deklarasi Variabel (let bisa diubah, const tidak)
let skor = 50;
const namaPemain = "Budi";

// 2. Mengubah nilai variabel let
skor = skor + 25;

console.log("Pemain:", namaPemain);
console.log("Skor Akhir:", skor);

// 3. Contoh Kondisi (If - Else)
if (skor >= 75) {
  console.log("Status: LULUS!");
} else {
  console.log("Status: COBA LAGI!");
}
`,
      logs: [],
      hasError: false
    }
  },
  methods: {
    jalankanKode() {
      this.logs = [];
      this.hasError = false;

      // Menangkap output console.log dari kode pengguna
      const customConsole = {
        log: (...args) => {
          const formattedArgs = args.map(arg => {
            if (typeof arg === 'object') {
              return JSON.stringify(arg, null, 2);
            }
            return String(arg);
          });
          this.logs.push(formattedArgs.join(' '));
        }
      };

      try {
        // Menjalankan kode pengguna dengan konteks console yang ditangkap
        const runFunction = new Function('console', this.userCode);
        runFunction(customConsole);
        
        if (this.logs.length === 0) {
          this.logs.push("(Kode berhasil dijalankan tanpa output console.log)");
        }
      } catch (error) {
        this.hasError = true;
        this.logs.push(`Runtime Error: ${error.message}`);
      }
    },
    resetKode() {
      this.userCode = `let nilai = 80;\n\nif (nilai >= 70) {\n  console.log("Selamat, Anda Lulus!");\n} else {\n  console.log("Tetap Semangat!");\n}`;
      this.logs = [];
      this.hasError = false;
    }
  }
}
</script>

<style scoped>
.playground-container {
  max-width: 700px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.deskripsi {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.editor-section {
  margin: 15px 0 10px 0;
  border: 1px solid #333;
  border-radius: 6px;
  overflow: hidden;
}

.editor-header {
  background-color: #2d2d2d;
  color: #ccc;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.btn-reset {
  background: transparent;
  border: 1px solid #555;
  color: #ccc;
  padding: 2px 8px;
  border-radius: 3px;
  cursor: pointer;
}

.btn-reset:hover {
  background-color: #444;
}

textarea {
  width: 100%;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.9rem;
  padding: 12px;
  border: none;
  background: #1e1e1e;
  color: #f8f8f2;
  box-sizing: border-box;
  resize: vertical;
  outline: none;
}

.btn-run {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 15px;
}

.btn-run:hover {
  background-color: #218838;
}

.output-section h3 {
  margin-bottom: 8px;
  font-size: 1rem;
}

.console-box {
  padding: 12px;
  background-color: #0f172a;
  color: #38bdf8;
  border-radius: 6px;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.88rem;
  min-height: 80px;
  max-height: 200px;
  overflow-y: auto;
}

.console-box.error {
  color: #f87171;
}

.log-item {
  margin-bottom: 4px;
}

.prompt {
  color: #94a3b8;
}

.placeholder-text {
  color: #64748b;
  font-style: italic;
}
</style>