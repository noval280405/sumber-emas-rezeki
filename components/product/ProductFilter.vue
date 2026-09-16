<script setup lang="ts">
export interface Filters {
  categories: string[]
  karats: string[]
  gender: string
  color: string
  stock: string
  price: string
  weight: string
}
const props = defineProps<{ modelValue: Filters }>()
const emit = defineEmits<{ 'update:modelValue': [value: Filters]; reset: [] }>()
const update = (key: keyof Filters, value: string | string[]) =>
  emit('update:modelValue', { ...props.modelValue, [key]: value })
const toggle = (key: 'categories' | 'karats', value: string) =>
  update(
    key,
    props.modelValue[key].includes(value)
      ? props.modelValue[key].filter((v) => v !== value)
      : [...props.modelValue[key], value],
  )
const expanded = ref(false)
const advancedCount = computed(
  () =>
    ['weight', 'gender', 'color', 'stock'].filter((key) => props.modelValue[key as keyof Filters])
      .length,
)
const labels: Record<string, string> = {
  '0-2000000': '< Rp2 juta',
  '2000000-5000000': 'Rp2–5 juta',
  '5000000-10000000': 'Rp5–10 juta',
  '10000000-Infinity': 'Rp10 juta+',
  '0-2': '< 2 gram',
  '2-5': '2–5 gram',
  '5-10': '5–10 gram',
  '10-Infinity': '10+ gram',
}
const activeFilters = computed(() =>
  Object.entries(props.modelValue).flatMap(([key, value]) =>
    (Array.isArray(value) ? value : value ? [value] : []).map((item) => ({
      key: key as keyof Filters,
      value: item,
      label: labels[item] || item,
    })),
  ),
)
const remove = (key: keyof Filters, value: string) => {
  if (key === 'categories' || key === 'karats') toggle(key, value)
  else update(key, '')
}
</script>
<template>
  <div class="filter-content compact-filters">
    <div class="filter-title">
      <h3>Filter Koleksi</h3>
      <button class="text-button" @click="$emit('reset')">Reset</button>
    </div>
    <div v-if="activeFilters.length" class="active-filter-list" aria-label="Filter aktif">
      <button
        v-for="filter in activeFilters"
        :key="`${filter.key}-${filter.value}`"
        :aria-label="`Hapus filter ${filter.label}`"
        @click="remove(filter.key, filter.value)"
      >
        {{ filter.label }} <UiIcon name="close" :size="12" />
      </button>
    </div>
    <fieldset
      v-for="group in [
        {
          key: 'categories' as const,
          title: 'Kategori',
          values: ['Cincin', 'Kalung', 'Gelang', 'Anting', 'Liontin', 'Wedding'],
        },
        { key: 'karats' as const, title: 'Kadar Emas', values: ['24K', '22K', '18K', '14K'] },
      ]"
      :key="group.key"
    >
      <legend>{{ group.title }}</legend>
      <label
        v-for="item in group.values"
        :key="item"
        class="filter-chip"
        :class="{ selected: modelValue[group.key].includes(item) }"
        ><input
          type="checkbox"
          :checked="modelValue[group.key].includes(item)"
          @change="toggle(group.key, item)"
        />{{ item }}</label
      >
    </fieldset>
    <label
      >Harga<select
        aria-label="Harga"
        :value="modelValue.price"
        @change="update('price', ($event.target as HTMLSelectElement).value)"
      >
        <option value="">Semua Harga</option>
        <option value="0-2000000">&lt; Rp2.000.000</option>
        <option value="2000000-5000000">Rp2.000.000 – Rp5.000.000</option>
        <option value="5000000-10000000">Rp5.000.000 – Rp10.000.000</option>
        <option value="10000000-Infinity">Rp10.000.000+</option>
      </select></label
    >
    <button class="advanced-filter-toggle" :aria-expanded="expanded" @click="expanded = !expanded">
      <span
        >Filter lainnya <small v-if="advancedCount">{{ advancedCount }}</small></span
      >
      <UiIcon name="chevron" :size="15" />
    </button>
    <div v-show="expanded" class="advanced-filter-fields">
      <label
        >Berat<select
          aria-label="Berat"
          :value="modelValue.weight"
          @change="update('weight', ($event.target as HTMLSelectElement).value)"
        >
          <option value="">Semua Berat</option>
          <option value="0-2">&lt; 2 gram</option>
          <option value="2-5">2 – 5 gram</option>
          <option value="5-10">5 – 10 gram</option>
          <option value="10-Infinity">10+ gram</option>
        </select></label
      ><label
        v-for="group in [
          { key: 'gender' as const, title: 'Gender', values: ['Wanita', 'Pria', 'Unisex'] },
          {
            key: 'color' as const,
            title: 'Warna Emas',
            values: ['Yellow Gold', 'Rose Gold', 'White Gold'],
          },
          {
            key: 'stock' as const,
            title: 'Availability',
            values: ['Tersedia', 'Terbatas', 'Pre Order', 'Habis'],
          },
        ]"
        :key="group.key"
        >{{ group.title
        }}<select
          :aria-label="group.title"
          :value="modelValue[group.key]"
          @change="update(group.key, ($event.target as HTMLSelectElement).value)"
        >
          <option value="">Semua</option>
          <option v-for="v in group.values" :key="v" :value="v">{{ v }}</option>
        </select></label
      >
    </div>
  </div>
</template>
