<script setup lang="ts">
import { ringSizes, ringSizeNotice } from '~/data/ringSizes'
</script>
<template>
  <section>
    <UiSectionTitle eyebrow="Langkah sederhana" title="Cara mengukur cincin Anda" />
    <div class="three-grid steps-cards">
      <article>
        <span>01</span>
        <h3>Gunakan cincin Anda</h3>
        <p>
          Letakkan cincin yang pas di atas penggaris. Ukur diameter bagian dalam, tanpa menghitung
          ketebalan cincin.
        </p>
      </article>
      <article>
        <span>02</span>
        <h3>Atau ukur keliling jari</h3>
        <p>
          Lingkarkan pita kertas pada jari, beri tanda pertemuannya, kemudian ukur panjangnya dalam
          milimeter.
        </p>
      </article>
      <article>
        <span>03</span>
        <h3>Cocokkan & konfirmasi</h3>
        <p>
          Bandingkan hasil dengan tabel contoh. Pastikan ukuran akhir dengan admin atau pengukuran
          langsung di toko.
        </p>
      </article>
    </div>
    <div class="section"><RingSizeCalculator /></div>
    <UiSectionTitle eyebrow="Panduan referensi" title="Tabel ukuran cincin" />
    <p class="notice">{{ ringSizeNotice }}</p>
    <div class="table-scroll">
      <table>
        <caption>
          Tabel ukuran contoh · bukan standar universal
        </caption>
        <thead>
          <tr>
            <th>Ukuran</th>
            <th>Diameter dalam (mm)</th>
            <th>Keliling (mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in ringSizes" :key="s.size">
            <td>{{ s.size }}</td>
            <td>{{ s.diameter }}</td>
            <td>{{ s.circumference }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="tips-panel">
      <h3>Tips agar lebih nyaman</h3>
      <p>
        Ukur beberapa kali saat jari dalam kondisi normal. Hindari pita terlalu ketat dan
        pertimbangkan buku jari. Model cincin yang lebih lebar bisa terasa berbeda; pengukuran
        langsung tetap disarankan.
      </p>
    </div>
  </section>
</template>
