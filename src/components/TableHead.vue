<template>
  <thead>
    <tr>
      <th
        v-for="(col, index) in columns"
        v-bind:key="'column-' + index"
        :class="{
          'text-start': index <= 1,
          'text-end': index + 1 == columns.length && columns.length != 1,
        }"
      >
        <a v-if="col.loading">
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          {{ col.name }}
        </a>
        <a
          v-else
          @click.prevent="col.sortName ? sort(index) : null"
          class="text-muted list-sort"
          :class="{ 'cursor-pointer': col.sortName }"
          :data-sort="col.sortName"
        >
          {{ col.name }}
        </a>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array
    }
  },
  methods: {
    sort (index) {
      this.$emit('sort', index)
    }
  }
}
</script>

<style></style>
