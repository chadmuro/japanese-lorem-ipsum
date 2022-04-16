<script>
  import { text } from "../text";
  import CopyButton from "./CopyButton.svelte";
  import { copyToClipboard } from "../utils/copyToClipboard";
  import { getTextToCopy } from "../utils/getTextToCopy";

  export let count;
  let copied = false;

  $: textToCopy = getTextToCopy(count).copyText;

  const onClick = () => {
    copyToClipboard(textToCopy);
    copied = true;
  };

  const onMouseLeave = () => {
    if (copied) {
      copied = false;
    }
  };
</script>

<div class="container">
  <CopyButton {onClick} {copied} {onMouseLeave} />
  <div>
    {#each Array(count) as _, num}
      <p>{text[num]}</p>
    {/each}
  </div>
</div>

<style>
  .container {
    border: 1px brown solid;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
