<template>
  <client-only>
    <div class="control">

		  <label> <slot/> </label>
		  <label class="editor-input"><input type="radio" v-model="type" value="html" class="editor-input__button">HTML</label>
		  <label class="editor-input"><input type="radio" v-model="type" value="md" class="editor-input__button">MD</label>


      <div class="editor">
        <codemirror
          v-if="type === 'html'"
          @input="onInput"
          :value="value"
          :options="cmOption"
          class="editor__input"></codemirror>
        <textarea
		      v-else
		      v-model="valueMd"
		      @input="onInput(valueMd)"
		      class="editor__input"></textarea>

        <div class="editor__prev html-reset" v-html="value"></div>
      </div>
    </div>
  </client-only>
</template>

<script>
import showdown from "showdown"

export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      type: "html",
      valueMd: "",
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: "sublime",
        mode: "text/x-vue",
        theme: "default"
      }
    }
  },
  watch: {
    type(val) {
      let converter = new showdown.Converter()
      if (val === "md") return this.valueMd = converter.makeMarkdown(this.value)
    }
  },
  methods: {
    onInput(val) {
      let converter = new showdown.Converter({noHeaderId: true })
      if (this.type === "md")
      val = converter.makeHtml(val)
	    return this.$emit("input", val)
    }
  }
}
</script>

<style lang="scss">
.editor {
	display: flex;
	justify-content: space-between;
	&__input, &__prev{
		width: 49%;
		padding: 30px 27px;
		border-radius: 14px;
		border: 1px solid #DCDFE6;
		max-height: 50vh;
		overflow: auto;
	}
	&__input{
		height: 362px;
		background-color: #fff;
		padding-left: 10px;
	}
}
.editor-input{
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
	padding: 10px;
	&__button{
		width: 20px;
		margin: 0;
	}
}
</style>