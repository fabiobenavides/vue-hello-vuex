  <template>
    <div>
        <input 
          v-model="colorCode"
          placeholder="Enter color code"
          type="text">
      </div>
</template>
<script>
    export default {
        computed: {
            colorCode: {
                get() {
                return this.$store.state.colorCode;
                },
                set(newValue) {
                this.$store.commit('setColorCode', newValue);
                }
            }
        },
}
</script>
<style></style>