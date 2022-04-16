<script>
  import { getTextToCopy } from "../utils/getTextToCopy";

  export let count;

  $: charLength = getTextToCopy(count).charLength;
</script>

<div>
  <label for="number-paragraphs">Number of paragraphs:</label>
  <input
    type="number"
    id="number-paragraphs"
    bind:value={count}
    min="1"
    max="10"
  />
  <p>Character Count: {charLength}</p>
</div>

<style>
  input {
    padding: 12px;
    border-radius: 4px;
    border: 2px solid brown;
  }

  input:focus {
    outline: none;
    border: 2px solid #ff3e00;
  }
</style>
