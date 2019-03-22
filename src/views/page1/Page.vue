<template>
	<div class="page1">
		<h1>{{ msg }}</h1>
		<br/>
		<PageComponents/>
	</div>
</template>

<script>

import PageComponents from './cpts/PageComponents.vue'

export default {
  name: 'page1',
  components: {
    PageComponents
  },
  data() {
		return {
			msg: ''
		}
  },
}
</script>

<style lang="scss" scoped>

</style>