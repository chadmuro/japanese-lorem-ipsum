<script>
  import Tooltip from "./tooltip/Tooltip.svelte";

  export let onClick;
  export let onMouseLeave;
  export let copied;
</script>

<div class="button-container">
  <Tooltip title={copied ? "Copied to clipboard!" : "Copy to clipboard"}>
    <button on:click={onClick} on:mouseleave={onMouseLeave}>
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        /></svg
      >
    </button>
  </Tooltip>
</div>

<style>
  .button-container {
    align-self: flex-end;
  }

  button {
    padding: 8px;
    border-radius: 4px;
    border: 2px solid brown;
    background: #fff;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  svg {
    width: 20px;
    height: 20px;
    color: brown;
  }
</style>
