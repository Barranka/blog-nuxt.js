<template>
  <div class="message" :class="mesClass">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }, 
    mesClass: {
      type: String,
      default: "success"
    }
  }
}
</script>

<style lang="scss">
	.message {
    font-size: 22px;
		text-align: center;
		padding: 20px;
    &.success {
      color: #26de81;
    }
    &.error {
      color: #ba3838;
    }
	}
</style>
