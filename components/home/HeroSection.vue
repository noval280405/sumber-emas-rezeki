<template>
  <section class="hero">
    <div class="hero-copy">
      <div class="hero-eyebrow"><span /> A LITTLE GOLD, A LIFETIME OF MEANING</div>
      <h1>Keindahan yang<br />Bertahan<br /><em>Sepanjang Waktu.</em></h1>
      <p>
        Temukan koleksi perhiasan emas pilihan untuk<br class="desktop-break" />
        melengkapi setiap momen berharga.
      </p>
      <div class="hero-buttons">
        <UiPrimaryButton to="/koleksi">Lihat Koleksi</UiPrimaryButton
        ><NuxtLink to="/harga-emas" class="text-link"
          >Cek Harga Emas <UiIcon name="arrow" :size="17"
        /></NuxtLink>
      </div>
      <div class="hero-bottom">
        <span>CINCIN <i>·</i> KALUNG <i>·</i> GELANG <i>·</i> ANTING <i>·</i> WEDDING</span>
        <p><UiIcon name="diamond" :size="14" /> Dipilih dengan hati, untuk cerita Anda.</p>
      </div>
    </div>
    <div class="hero-visual">
      <img
        class="hero-photo"
        src="/images/hero/jewelry.jpg"
        alt="Ilustrasi perhiasan emas elegan pada latar hangat"
        fetchpriority="high"
        width="1200"
        height="1400"
      />
      <div class="hero-photo-shade" />
      <div class="hero-image-top">
        <span>THE ART OF EVERYDAY LUXURY</span><UiIcon name="diamond" :size="25" />
      </div>
      <div class="hero-image-caption">
        <span>THE SIGNATURE COLLECTION</span>
        <p>Made to be <em>cherished.</em></p>
        <NuxtLink to="/koleksi" aria-label="Jelajahi signature collection"
          ><UiIcon name="arrow" :size="24"
        /></NuxtLink>
      </div>
      <span class="image-index">01 <i /> 03</span>
    </div>
  </section>
  <div class="trust-strip">
    <span><UiIcon name="diamond" :size="17" /> Koleksi Perhiasan Pilihan</span><i /><span
      ><UiIcon name="check" :size="17" /> Informasi Kadar & Berat</span
    ><i /><span><UiIcon name="chat" :size="17" /> Konsultasi Personal</span><i /><NuxtLink
      to="/lokasi"
      ><UiIcon name="pin" :size="17" /> Kunjungi Toko Kami</NuxtLink
    >
  </div>
</template>
