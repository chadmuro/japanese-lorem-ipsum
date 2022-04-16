<script>
  import ParagraphInput from "./components/ParagraphInput.svelte";
  import TextDisplay from "./components/TextDisplay.svelte";

  let count = 1;
</script>

<main>
  <h1>Japanese Lorem Ipsum</h1>
  <ParagraphInput bind:count />
  <TextDisplay {count} />
</main>

<style>
  main {
    text-align: center;
    max-width: 768px;
    margin: 100px auto;
    padding: 0 20px;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
